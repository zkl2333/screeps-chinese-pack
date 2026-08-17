/**
 * CPU 管理页
 * @see https://screeps.com/a/#!/cpu
 */
const content: PageContent = {
    hashs: ['#!/cpu'],
    content: [
        { 'en-US': 'Manage your CPU', 'zh-CN': '管理您的 CPU' },
        { 'en-US': 'CPU Credits', 'zh-CN': 'CPU 点数', 'reuse': true },
        { 'en-US': 'CPU limit', 'zh-CN': 'CPU 限制', 'reuse': true },
        { 'en-US': 'Credits', 'zh-CN': '点数', 'reuse': true },
        { 'en-US': 'Get more', 'zh-CN': '获取更多', 'reuse': true },
        { 'en-US': 'Off', 'zh-CN': '关闭', 'reuse': true },
        { 'en-US': 'Blocked', 'zh-CN': '已封禁', 'reuse': true },
        { 'en-US': 'Change', 'zh-CN': '更改', 'reuse': true },
        { 'en-US': 'Cancel', 'zh-CN': '取消', 'reuse': true },
        { 'en-US': 'Save', 'zh-CN': '保存', 'reuse': true },
        { 'en-US': 'Days Left', 'zh-CN': '剩余天数', 'reuse': true },
        { 'en-US': 'Next charge date:', 'zh-CN': '下次扣费日期：', 'reuse': true },
        { 'en-US': '1 CPU Credit', 'zh-CN': '1 点 CPU', 'reuse': true },
        { 'en-US': '1ms CPU time limit', 'zh-CN': '1ms CPU 时间限制', 'reuse': true },
        { 'en-US': '1 day', 'zh-CN': '1 天', 'reuse': true },
        {
            'en-US': 'are spent to execute your scripts on the game server on a daily basis.\nYou can set a',
            'zh-CN': '会按天消耗，用于在游戏服务器上执行您的脚本。您可以设置',
            'reuse': true
        },
        {
            'en-US': 'are spent to execute your scripts on the game server on a daily basis. You can set a',
            'zh-CN': '会按天消耗，用于在游戏服务器上执行您的脚本。您可以设置',
            'reuse': true
        },
        {
            'en-US': 'for scripts execution in the range between 20 and 300.\nYou can change the value any time without limitation.',
            'zh-CN': '用于脚本执行，范围为 20 到 300。您可以随时更改该值，没有次数限制。',
            'reuse': true
        },
        {
            'en-US': 'for scripts execution in the range between 20 and 300. You can change the value any time without limitation.',
            'zh-CN': '用于脚本执行，范围为 20 到 300。您可以随时更改该值，没有次数限制。',
            'reuse': true
        },
        {
            'en-US': 'on your game tick execution within',
            'zh-CN': '用于您每个游戏 tick 的执行，持续',
            'reuse': true
        },
        { 'en-US': 'You have insufficient credits', 'zh-CN': '您的点数不足', 'reuse': true },
        {
            'en-US': /^You will be charged \d+ credits$/,
            'zh-CN': (text: string) => text.replace('You will be charged ', '将扣除 ').replace(' credits', ' 点'),
            'reuse': true
        },
        {
            'en-US': /^You will be refunded \d+ credits$/,
            'zh-CN': (text: string) => text.replace('You will be refunded ', '将退还 ').replace(' credits', ' 点'),
            'reuse': true
        },
        {
            'selector': '.cpu-desc',
            'zh-CN': (el: HTMLElement) => {
                el.innerHTML = el.innerHTML
                    .replace(
                        '<b>CPU Credits</b> are spent to execute your scripts on the game server on a daily basis.',
                        '<b>CPU 点数</b>会按天消耗，用于在游戏服务器上执行您的脚本。'
                    )
                    .replace(
                        'You can set a <b>CPU limit</b> for scripts execution in the range between 20 and 300.',
                        '您可以将脚本执行的 <b>CPU 限制</b>设置在 20 到 300 之间。'
                    )
                    .replace(
                        'You can change the value any time without limitation.',
                        '您可以随时更改该值，没有次数限制。'
                    )
                    .replace(
                        '<b>1 CPU Credit</b> = <b>1ms CPU time limit</b> on your game tick execution within <b>1 day</b>.',
                        '<b>1 点 CPU</b> = 在 <b>1 天</b>内，每个游戏 tick 可使用 <b>1ms CPU 时间限制</b>。'
                    )
            },
            'reuse': true
        }
    ]
}

export default content
