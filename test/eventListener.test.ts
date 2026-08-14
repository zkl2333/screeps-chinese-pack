import listener from '@/eventListener'
import translate from '@/translate'
import { updateSource } from '@/storage'
import { isText } from '@/utils'

describe('eventListener 模块', () => {
    const onHashChange = jest.fn()
    const onElementChange = jest.fn()

    beforeEach(() => {
        onHashChange.mockReset()
        onElementChange.mockReset()
    })

    test('hash 变更时可以触发回调', done => {
        // onHashChange 会在 onElementChange 之前调用
        const observer = listener({
            onHashChange,
            onElementChange: data => {
                // onHashChange 会被触发且收到对应的 hash
                expect(onHashChange.mock.calls).toEqual([['#testHash']])
                // onElementChange 会收到变更的新 innerHTML
                expect(data.length).toBe(1)
                expect(isText(data[0])).toBe(true)
                expect((data[0] as Text).wholeText).toBe('newContent')

                observer.disconnect()
                done()
            }
        })

        document.location.hash = 'testHash'
        document.body.innerHTML = 'newContent'
    })

    test('被排除的元素变更时不会触发回调', done => {
        document.body.innerHTML = `
            <div>
                <div class="except"></div>
                <div class="include"></div>
            </div>
        `
        // 排除一个元素
        document.querySelector('.except').stopTranslateSearch = true

        const observer = listener({ onHashChange, onElementChange })

        document.querySelector('.except').innerHTML = 'test'
        document.querySelector('.include').innerHTML = 'test'

        // MutationObserver 和翻译回调都异步执行，需要等待渲染帧完成
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                const { calls } = onElementChange.mock
                // 触发变更的元素里不会有 .except 的内容
                expect(calls.length).toBe(1)

                const [firstArg] = calls[0]
                expect(firstArg.length).toBe(1)
                expect(firstArg[0]).toBeInstanceOf(Text)
                observer.disconnect()
                done()
            })
        })
    })

    test('移除元素不会触发回调', done => {
        document.body.innerHTML = `
            <div>
                <div class="wait-remove"></div>
            </div>
        `
        const observer = listener({ onHashChange, onElementChange })

        const removeElement = document.querySelector('.wait-remove')
        removeElement.parentElement.removeChild(removeElement)

        setTimeout(() => {
            const { calls } = onElementChange.mock
            // 移除的元素不会触发回调
            expect(calls.length).toBe(0)
            observer.disconnect()
            done()
        })
    })

    test('汉化自身的文本变更不会递归触发回调', done => {
        document.location.hash = 'own-mutation'
        updateSource(document.location.hash, [{
            hashs: ['#own-mutation'],
            content: [{ 'en-US': 'A', 'zh-CN': 'a', 'reuse': true }]
        }])
        const translateCallback = jest.fn((nodes: Node[]) => {
            translate(nodes)

            if (translateCallback.mock.calls.length === 1) {
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        expect(target.textContent).toBe('a')
                        expect(translateCallback).toHaveBeenCalledTimes(1)
                        target.firstChild.textContent = 'A'
                    })
                })
            }
            else {
                expect(target.textContent).toBe('a')
                expect(translateCallback).toHaveBeenCalledTimes(2)
                observer.disconnect()
                done()
            }
        })
        const observer = listener({ onHashChange, onElementChange: translateCallback })

        const target = document.createElement('div')
        target.textContent = 'A'
        document.body.appendChild(target)
    })
})
