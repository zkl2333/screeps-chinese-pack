/**
 * 账户管理入口页面
 * @see https://screeps.com/a/#!/account
 */
const content: PageContent = {
    hashs: ['#!/account'],
    content: [
        { 'en-US': 'Account', 'zh-CN': '账户' },
        { 'en-US': 'Notifications', 'zh-CN': '通知' },
        { 'en-US': 'Player name', 'zh-CN': '玩家昵称' },
        { 'en-US': 'Badge', 'zh-CN': '徽标' },
        { 'en-US': 'E-mail', 'zh-CN': '邮箱' },
        { 'en-US': 'Password', 'zh-CN': '密码', 'reuse': true },
        { 'en-US': 'Auth tokens', 'zh-CN': '验证令牌' },
        {
            'en-US': 'Keep yourself notified about what is happening in the game.',
            'zh-CN': '让自己时刻了解游戏中发生了什么。'
        },
        { 'en-US': 'Learn more', 'zh-CN': '了解更多', 'reuse': true },
        {
            'en-US': 'Link your Steam account to use the same account in both web and Steam versions of the game.',
            'zh-CN': '关联您的 Steam 账户，以便在网页版和 Steam 版游戏中使用同一账户。'
        },
        {
            'en-US': 'You can link your GitHub account and automatically pull code to Screeps from any of your GitHub repositories.',
            'zh-CN': '您可以关联 GitHub 账户，并让 Screeps 自动从您的任意 GitHub 仓库拉取代码。'
        },

        { 'en-US': 'CPU Unlock', 'zh-CN': 'CPU 解锁', 'reuse': true },
        { 'en-US': 'CPU Unlock:', 'zh-CN': 'CPU 解锁：', 'reuse': true },

        { 'en-US': 'Notifications enabled', 'zh-CN': '启用通知' },
        { 'en-US': 'Send interval', 'zh-CN': '通知发送间隔', 'reuse': true },
        { 'en-US': 'Send when online', 'zh-CN': '在线时是否发送', 'reuse': true },
        { 'en-US': 'Notify on errors', 'zh-CN': '代码异常时通知', 'reuse': true },
        { 'en-US': 'Notify on new messages', 'zh-CN': '有新消息时通知', 'reuse': true },

        // 通知间隔与说明
        { 'en-US': 'Yes', 'zh-CN': '是', 'reuse': true },
        { 'en-US': 'No', 'zh-CN': '否', 'reuse': true },
        { 'en-US': 'Steam', 'zh-CN': 'Steam', 'reuse': true },
        { 'en-US': 'GitHub', 'zh-CN': 'GitHub', 'reuse': true },
        { 'en-US': 'Lifetime', 'zh-CN': '永久', 'reuse': true },
        { 'en-US': 'Active', 'zh-CN': '已激活', 'reuse': true },
        { 'en-US': 'Inactive', 'zh-CN': '未激活', 'reuse': true },
        { 'en-US': 'No tokens', 'zh-CN': '暂无令牌', 'reuse': true },
        {
            'en-US': /^(\d+) tokens?$/,
            'zh-CN': (text: string) => text.replace(/(\d+) tokens?/, '$1 个令牌'),
            'reuse': true
        },
        { 'en-US': '5 min', 'zh-CN': '5 分钟', 'reuse': true },
        { 'en-US': '10 min', 'zh-CN': '10 分钟', 'reuse': true },
        { 'en-US': '30 min', 'zh-CN': '30 分钟', 'reuse': true },
        { 'en-US': '3 hours', 'zh-CN': '3 小时', 'reuse': true },
        { 'en-US': '6 hours', 'zh-CN': '6 小时', 'reuse': true },
        { 'en-US': '12 hours', 'zh-CN': '12 小时', 'reuse': true },
        { 'en-US': '3 days', 'zh-CN': '3 天', 'reuse': true },
        { 'en-US': 'Immediately', 'zh-CN': '立即', 'reuse': true },
        { 'en-US': 'Every 5 min', 'zh-CN': '每 5 分钟', 'reuse': true },
        { 'en-US': 'Every 10 min', 'zh-CN': '每 10 分钟', 'reuse': true },
        { 'en-US': 'Every 30 min', 'zh-CN': '每 30 分钟', 'reuse': true },
        { 'en-US': 'Every 1 hour', 'zh-CN': '每 1 小时', 'reuse': true },
        { 'en-US': 'Every 3 hours', 'zh-CN': '每 3 小时', 'reuse': true },
        { 'en-US': 'Every 6 hours', 'zh-CN': '每 6 小时', 'reuse': true },
        { 'en-US': 'Every 12 hours', 'zh-CN': '每 12 小时', 'reuse': true },
        { 'en-US': 'Every 24 hours', 'zh-CN': '每 24 小时', 'reuse': true },
        { 'en-US': 'Every 3 days', 'zh-CN': '每 3 天', 'reuse': true },
        { 'en-US': 'Never', 'zh-CN': '从不', 'reuse': true },
        {
            'en-US': 'All notifications will be grouped and mailed out periodically using this interval.',
            'zh-CN': '所有通知将按此间隔合并后定期发送邮件。',
            'reuse': true
        },
        {
            'en-US': 'Send notifications when your script throws an error.',
            'zh-CN': '当您的脚本抛出错误时发送通知。',
            'reuse': true
        },
        {
            'en-US': 'Please specify your e-mail address first.',
            'zh-CN': '请先设置您的邮箱地址。',
            'reuse': true
        },

        // steam 关联
        {
            'en-US': 'Do you really want to unlink your Steam account?',
            'zh-CN': '您确定要解除和 Steam 账户的关联吗？',
            'reuse': true
        },
        { 'en-US': 'LINK TO STEAM', 'zh-CN': '关联 Steam', 'reuse': true },
        { 'en-US': 'Steam user', 'zh-CN': 'Steam 用户' },
        { 'en-US': 'Steam profile link visible', 'zh-CN': 'Steam 个人资料是否可见' },

        // github 关联
        {
            'en-US': 'Do you really want to unlink your GitHub account?',
            'zh-CN': '您确定要解除和 GitHub 账户的关联吗？',
            'reuse': true
        },
        { 'en-US': 'LINK TO GITHUB', 'zh-CN': '关联 GitHub', 'reuse': true },
        { 'en-US': 'GitHub user', 'zh-CN': 'GitHub 用户' },
        { 'en-US': 'Sync from repository', 'zh-CN': '从仓库同步' },
        { 'en-US': 'Not set', 'zh-CN': '未设置' },
        {
            'en-US': 'All your scripts in Screeps account will be overwritten with this action! Are you sure?',
            'zh-CN': '此操作将覆盖您 Screeps 账户中的所有脚本！确定要继续吗？',
            'reuse': true
        },

        { 'en-US': 'Cancel', 'zh-CN': '取消', 'reuse': true },
        { 'en-US': 'OK', 'zh-CN': '确定', 'reuse': true },

        { 'en-US': 'Learn how to commit scripts from local machine', 'zh-CN': '了解如何从本地机器提交代码' }
    ]
}

export default content
