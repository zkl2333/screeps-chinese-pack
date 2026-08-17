/**
 * 问题上报
 * @see https://screeps.com/a/#!/report-problem
 */
const content: PageContent = {
    hashs: ['#!/report-problem'],
    content: [
        { 'en-US': 'Report a problem', 'zh-CN': '问题上报' },
        { 'en-US': 'Before submitting the form below, please note the following:', 'zh-CN': '提交下方表单前，请注意以下事项：' },
        { 'en-US': 'You can use our', 'zh-CN': '您可以使用我们的 ' },
        { 'en-US': 'Slack chat', 'zh-CN': 'Slack 聊天室' },
        { 'en-US': 'to get a quick answer to your question from our community members.', 'zh-CN': ' 向社区成员快速提问。' },
        { 'en-US': 'Please leave your feature request in', 'zh-CN': '功能建议请发到 ' },
        { 'en-US': 'this forum section', 'zh-CN': '此论坛分区' },
        { 'en-US': 'where other players can join its discussion.', 'zh-CN': '，以便其他玩家一起讨论。' },
        {
            'en-US': 'If you report a bug, please specify your client and OS and attach a screenshot or screencast showing the issue.',
            'zh-CN': '如果您要报告缺陷，请注明客户端与操作系统，并附上能复现问题的截图或录屏。'
        },
        { 'en-US': 'Urgent', 'zh-CN': '紧急' },
        {
            'en-US': 'Check this box if your request requires immediate attention, for example when your account is not functioning properly. Please do so only when absolutely necessary.',
            'zh-CN': '仅在需要立即处理时勾选此项，例如账户无法正常使用。请务必只在确有必要时勾选。'
        },
        { 'en-US': 'Submit', 'zh-CN': '提交', 'reuse': true },
        { 'en-US': 'Your request has been successfully submitted.', 'zh-CN': '您的请求已成功提交。', 'reuse': true },
        {
            'selector': 'input[placeholder="Your email address"]',
            'zh-CN': (el: HTMLElement) => el.setAttribute('placeholder', '您的邮箱地址'),
            'reuse': true
        },
        {
            'selector': 'input[placeholder="Subject"]',
            'zh-CN': (el: HTMLElement) => el.setAttribute('placeholder', '主题'),
            'reuse': true
        },
        {
            'selector': 'textarea[placeholder="Description"]',
            'zh-CN': (el: HTMLElement) => el.setAttribute('placeholder', '描述'),
            'reuse': true
        },
        {
            'selector': 'input[placeholder="Your client and OS version"]',
            'zh-CN': (el: HTMLElement) => el.setAttribute('placeholder', '您的客户端与操作系统版本'),
            'reuse': true
        }
    ]
}

export default content
