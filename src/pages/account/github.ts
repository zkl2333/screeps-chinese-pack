/**
 * GitHub 集成
 * @see https://screeps.com/a/#!/account/github
 */
const content: PageContent = {
    hashs: ['#!/account/github'],
    content: [
        { 'en-US': 'GitHub Integration', 'zh-CN': 'GitHub 集成' },
        { 'en-US': 'Sync from:', 'zh-CN': '同步来源：' },
        { 'en-US': 'Reset', 'zh-CN': '重置', 'reuse': true },
        { 'en-US': 'Sync', 'zh-CN': '同步', 'reuse': true },
        { 'en-US': 'Cancel', 'zh-CN': '取消', 'reuse': true },
        {
            'selector': '[placeholder="Select repository"]',
            'zh-CN': (el: HTMLElement) => el.setAttribute('placeholder', '选择仓库'),
            'reuse': true
        },
        {
            'selector': 'input[placeholder="Folder"]',
            'zh-CN': (el: HTMLElement) => el.setAttribute('placeholder', '文件夹'),
            'reuse': true
        }
    ]
}

export default content
