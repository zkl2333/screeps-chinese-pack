/**
 * 翻译的大致流程是：发现路由变化 > 重新加载翻译源，发现 html 元素变化 > 重新翻译内容
 * 
 * 实现的方式有两种：
 * 1. 监听 onHashChange 事件，触发时加载翻译源，再用 MutationObserver 单独监听元素变化
 * 2. 使用 MutationObserver 监听元素变化，变化之前检查路由是否有变更，有的话重载翻译源
 * 
 * 第一种方法无法保证先加载翻译源再重新翻译内容，就会出现翻译内容时还是用的之前的翻译源
 * 为了解决这个问题就需要再加载翻译源后再全量翻译一次，而这些翻译内容很多都是和 MutationObserver 里的翻译是重复的，造成了性能浪费，故弃用。
 * 下面则为第二种方法的实现。
 */

import { getContent, updateContent } from './storage'
import { getNoQueryHash, isExceptElement } from './utils'
import { isOwnTextMutation } from './mutation'

const reportError = function (error: unknown): void {
    console.warn('[screeps-chinese-pack] 翻译脚本发生异常', error)
}


/**
 * 设置该插件所需的回调
 * 
 * @param callbacks 要触发的回调
 */
export default function (callbacks: ListenerCallbacks): MutationObserver {
    const observer = new MutationObserver(getMutationCallback(callbacks))
    const onHashChange = function (): void {
        if (updateHash(callbacks)) safelyChangeElements(callbacks.onElementChange, [document.body])
    }

    // 启动监听
    observer.observe(document.body, {
        childList: true,
        characterData: true,
        subtree: true
    })
    window.addEventListener('hashchange', onHashChange)

    const disconnect = observer.disconnect.bind(observer)
    observer.disconnect = function (): void {
        window.removeEventListener('hashchange', onHashChange)
        disconnect()
    }

    return observer
}


/**
 * 包装回调
 * 
 * MutationObserver 接受回调的入参不是单纯的 html 元素数组
 * 这里将其格式化后再执行业务回调
 * 
 * @param callback 要触发的实际回调
 */
const getMutationCallback = function ({ onHashChange, onElementChange }: ListenerCallbacks) {
    // 同一渲染帧内可能收到多批 DOM 变更；合并后统一翻译，避免阻塞主线程。
    let pendingNodes: Node[] = []
    let frameId: number | undefined

    const flush = function (): void {
        frameId = undefined

        // 取出并清空队列，避免翻译过程产生的新变更与本次混在一起
        const changedNodes = [...new Set(pendingNodes)].filter(node => node.isConnected)
        pendingNodes = []
        if (changedNodes.length <= 0) return

        try {
            updateHash({ onHashChange, onElementChange })
            safelyChangeElements(onElementChange, changedNodes)
        }
        catch (error) {
            reportError(error)
        }
    }

    return function (mutationsList: MutationRecord[]) {
        // 获取发生变更的节点
        try {
            const changedNodes: Node[] = [].concat(...mutationsList.map(mutation => {
                if (isOwnTextMutation(mutation)) return []
                if (isExceptElement(mutation.target)) return []

                if (mutation.type === 'childList') {
                    if (mutation.addedNodes.length > 0) return [...mutation.addedNodes]
                }
                // 是节点内容变更的话就直接返回变更的节点
                else if (mutation.type === 'characterData') {
                    return [mutation.target]
                }

                return []
            }))

            // 如果没有发生变化的节点，就不需要翻译
            if (changedNodes.length <= 0) return

            pendingNodes.push(...changedNodes)
            if (frameId === undefined) frameId = requestAnimationFrame(flush)
        }
        catch (error) {
            reportError(error)
        }
    }
}

const updateHash = function ({ onHashChange }: ListenerCallbacks): boolean {
    const { hash } = getContent()
    const newHash = getNoQueryHash(document.location.hash)
    if (hash === newHash) return true

    try {
        onHashChange(document.location.hash)
        updateContent({ hash: newHash })
        return true
    }
    catch (error) {
        reportError(error)
        return false
    }
}

const safelyChangeElements = function (onElementChange: ListenerCallbacks['onElementChange'], nodes: Node[]): void {
    try {
        onElementChange(nodes)
    }
    catch (error) {
        reportError(error)
    }
}
