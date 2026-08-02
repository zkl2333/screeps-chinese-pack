import { dontTranslate } from 'utils'

const content: PageContent = {
    hashs: ['#!/'],
    content: [
        // 阻止翻译右上角的 CPU 及内存使用量
        dontTranslate('.cpu > .sysbar-title > strong'),
        dontTranslate('.mem > div.sysbar-title > strong'),

        { 'en-US': 'Persistent world:', 'zh-CN': '永恒世界：', 'reuse': true },
        { 'en-US': 'Overview', 'zh-CN': '总览', 'reuse': true },
        { 'en-US': 'World', 'zh-CN': '世界', 'reuse': true },
        { 'en-US': 'Market', 'zh-CN': '市场', 'reuse': true },
        { 'en-US': 'Inventory', 'zh-CN': '库存', 'reuse': true },
        { 'en-US': 'Switch to', 'zh-CN': '切换至', 'reuse': true },
        { 'en-US': 'Season world', 'zh-CN': '赛季世界', 'reuse': true },
        { 'en-US': 'Arena', 'zh-CN': '竞技场', 'reuse': true },

        { 'en-US': 'Documentation', 'zh-CN': '文档', 'reuse': true },
        { 'en-US': 'Training', 'zh-CN': '练习', 'reuse': true },
        { 'en-US': 'Public Test Realm', 'zh-CN': '公共测试服务器', 'reuse': true },
        { 'en-US': 'Seasons Overview', 'zh-CN': '赛季总览', 'reuse': true },
        { 'en-US': 'Simulation', 'zh-CN': '模拟器', 'reuse': true },
        { 'en-US': 'Tutorial', 'zh-CN': '教程', 'reuse': true },

        { 'en-US': 'Messages', 'zh-CN': '消息', 'reuse': true },
        { 'en-US': 'Chat', 'zh-CN': '聊天', 'reuse': true },
        { 'en-US': 'News', 'zh-CN': '新闻', 'reuse': true },
        { 'en-US': 'Report a problem', 'zh-CN': '问题上报', 'reuse': true },

        { 'en-US': 'Blog', 'zh-CN': '博客', 'reuse': true },
        { 'en-US': 'Forum', 'zh-CN': '论坛', 'reuse': true },

        { 'en-US': 'Terms of Service', 'zh-CN': '服务条款', 'reuse': true },
        { 'en-US': 'Privacy policy', 'zh-CN': '隐私政策', 'reuse': true },
        { 'en-US': 'Privacy Policy', 'zh-CN': '隐私政策', 'reuse': true },

        { 'en-US': 'SALE!', 'zh-CN': '促销！', 'reuse': true },
        { 'en-US': 'NEW!', 'zh-CN': '新品！', 'reuse': true },
        { 'en-US': 'Item Shop', 'zh-CN': '物品商店', 'reuse': true },
        { 'en-US': '1 hour', 'zh-CN': '1 小时', 'reuse': true },
        { 'en-US': '24 hours', 'zh-CN': '24 小时', 'reuse': true },
        { 'en-US': '7 days', 'zh-CN': '7 天', 'reuse': true },

        { 'en-US': 'Respawn', 'zh-CN': '重生', 'reuse': true },
        { 'en-US': 'View profile', 'zh-CN': '查看资料', 'reuse': true },
        { 'en-US': 'Manage account', 'zh-CN': '账户管理', 'reuse': true },
        { 'en-US': 'Sign out', 'zh-CN': '登出', 'reuse': true },

        { 'en-US': 'New update is available', 'zh-CN': '有可用的更新' },
        { 'en-US': 'RELOAD', 'zh-CN': '重新加载' },
        { 'en-US': 'Your CPU is limited', 'zh-CN': '您的 CPU 受限' },
        { 'en-US': 'Unlock your CPU here', 'zh-CN': '在此解锁 CPU', 'reuse': true },
        { 'en-US': 'Order a subscription here', 'zh-CN': '点此购买一个订阅 ' },

        // 登陆弹窗
        { 'en-US': 'Sign In', 'zh-CN': '登录', 'reuse': true },
        { 'en-US': 'E-mail or username', 'zh-CN': '邮箱或用户名', 'reuse': true },
        { 'en-US': 'Password', 'zh-CN': '密码', 'reuse': true },
        { 'en-US': 'SIGN IN', 'zh-CN': '登录', 'reuse': true },
        { 'en-US': 'OR', 'zh-CN': '或', 'reuse': true },
        { 'en-US': 'I forgot my password', 'zh-CN': '我忘记密码了', 'reuse': true },
        { 'en-US': 'Create a new account', 'zh-CN': '创建一个新账户', 'reuse': true },
        { 'en-US': 'Account credentials are invalid', 'zh-CN': '账号验证失败', 'reuse': true },

        // 右上角登陆按钮
        { 'en-US': 'Sign in', 'zh-CN': '登录 ', 'reuse': true },
        { 'en-US': 'or register', 'zh-CN': '或注册', 'reuse': true },

        { 'en-US': 'Global Control Level has been increased!', 'zh-CN': '全局控制等级（GCL）已提升！' },
        { 'en-US': 'You can control', 'zh-CN': '您现在可以控制 ' },
        { 'en-US': /\d+ rooms/, 'zh-CN': (text: string) => text.replace('rooms', '个房间') },
        { 'en-US': 'now.', 'zh-CN': '了。' },

        // 阻止翻译左侧边栏头部的赛季服倒计时
        {
            'selector': 'app-time-left',
            /**
             * 因为这个元素会因为未知原因销毁重建一次，导致单纯通过 dontTranslate 设置的禁止翻译被清掉了
             * 所以这里加个延迟，等元素重建完成后再添加禁止翻译
             */
            'zh-CN': () => setTimeout(() => {
                const el = document.body.querySelector('app-time-left')
                el.stopTranslateSearch = true
            }, 1000)
        },

        // 重生确认框
        {
            'en-US': 'All your buildings and creeps will become unowned so that you\n        can reset your spawn in any vacant room on the map.',
            'zh-CN': '您将失去所有的建筑和 creep，然后您就可以在地图上的任意无主房间重新放置 spawn。',
            'reuse': true
        },
        { 'en-US': 'Learn more', 'zh-CN': '了解更多', 'reuse': true },
        { 'en-US': 'Note:', 'zh-CN': '注意：', 'reuse': true },
        {
            'en-US': 'you will NOT be able to spawn again in the same\n        room within 3 days since the initial spawn placement!',
            'zh-CN': '在放置第一个 spawn 之后的三天内，您将无法再次重生在相同房间中。',
            'reuse': true
        },
        { 'en-US': 'Cancel', 'zh-CN': '取消', 'reuse': true },

        // ===== 全局通用（2026-08 从 build.min.js 补充）=====

        // 时间显示
        { 'en-US': /^Just now$/, 'zh-CN': '刚刚', 'reuse': true },
        {
            'en-US': /^Today at /,
            'zh-CN': (text: string) => text.replace('Today at ', '今天 '),
            'reuse': true
        },
        {
            'en-US': /^Yesterday at /,
            'zh-CN': (text: string) => text.replace('Yesterday at ', '昨天 '),
            'reuse': true
        },
        {
            'en-US': /^(\d+) minute(s?) ago$/,
            'zh-CN': (text: string) => text.replace(/(\d+) minute(s?) ago/, '$1 分钟前'),
            'reuse': true
        },
        {
            'en-US': /^(\d+) hour(s?) ago$/,
            'zh-CN': (text: string) => text.replace(/(\d+) hour(s?) ago/, '$1 小时前'),
            'reuse': true
        },

        // 服务器维护
        { 'en-US': 'The server is under maintenance. Please reload the page.', 'zh-CN': '服务器正在维护中，请重新加载页面。', 'reuse': true },
        { 'en-US': 'The server is under maintenance. Please restart.', 'zh-CN': '服务器正在维护中，请重新启动。', 'reuse': true },
        { 'en-US': 'Under construction', 'zh-CN': '维护中', 'reuse': true },
        { 'en-US': 'Unknown error', 'zh-CN': '未知错误', 'reuse': true },

        // Steam / 激活码
        { 'en-US': 'An error occured while logging into your Steam account. Please restart Steam and try again.', 'zh-CN': '登录 Steam 账户时发生错误，请重启 Steam 后重试。', 'reuse': true },
        { 'en-US': 'Activation code is invalid', 'zh-CN': '激活码无效', 'reuse': true },

        // 订阅 / 论坛
        { 'en-US': 'Do you want to cancel your subscription?', 'zh-CN': '确定要取消您的订阅吗？', 'reuse': true },
        { 'en-US': 'Posting on the forums is only allowed for users with an active subscription due to a large amount of spam. We are very sorry.', 'zh-CN': '由于垃圾信息泛滥，只有活跃订阅用户才能在论坛发帖。非常抱歉。', 'reuse': true },
        { 'en-US': 'You must set an email in your account settings to post on the forums.', 'zh-CN': '要在论坛发帖，您必须在账户设置中绑定邮箱。', 'reuse': true },

        // 其他
        { 'en-US': 'In Development', 'zh-CN': '开发中', 'reuse': true },
        { 'en-US': 'The game is not launched yet. Please try again on August 12', 'zh-CN': '游戏尚未启动，请于 8 月 12 日再试。', 'reuse': true }
    ]
}

export default content
