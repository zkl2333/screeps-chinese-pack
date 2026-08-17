/**
 * 运行时设置
 * @see https://screeps.com/a/#!/account/runtime
 */
const content: PageContent = {
    hashs: ['#!/account/runtime'],
    content: [
        { 'en-US': 'Runtime', 'zh-CN': '运行时' },
        {
            'en-US': 'These settings control how your script is executed in runtime.',
            'zh-CN': '这些设置控制您的脚本在运行时如何执行。'
        },
        { 'en-US': 'Virtual machine', 'zh-CN': '虚拟机' },
        { 'en-US': 'Isolated (default)', 'zh-CN': '隔离（默认）', 'reuse': true },
        { 'en-US': 'Shared (legacy)', 'zh-CN': '共享（旧版）', 'reuse': true }
    ]
}

export default content
