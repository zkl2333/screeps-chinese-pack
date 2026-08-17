const content: PageContent = {
    hashs: ['#!/market/all', '#!/market2/all'],
    content: [
        // 市场->全部订单
        { 'en-US': 'Raw resources', 'zh-CN': '原始资源' },
        { 'en-US': 'Factory production', 'zh-CN': '工厂产物' },
        { 'en-US': 'Lab production', 'zh-CN': '实验室产物' },
        // 订单明细
        { 'en-US': 'Refresh', 'zh-CN': '刷新' },
        { 'en-US': 'Target room:', 'zh-CN': '目标房间：' },
        { 'en-US': 'Selling', 'zh-CN': '出售中' },
        { 'en-US': 'Buying', 'zh-CN': '求购中' },
        { 'en-US': 'Order ID', 'zh-CN': '订单标识', 'reuse': true },
        { 'en-US': 'Price', 'zh-CN': '单价', 'reuse': true },
        { 'en-US': 'Available', 'zh-CN': '可用', 'reuse': true },
        { 'en-US': 'Remaining', 'zh-CN': '剩余', 'reuse': true },
        { 'en-US': 'Total', 'zh-CN': '总量', 'reuse': true },
        { 'en-US': 'Room', 'zh-CN': '房间', 'reuse': true },
        { 'en-US': 'Range', 'zh-CN': '距离', 'reuse': true },
        { 'en-US': 'Price history', 'zh-CN': '历史单价' },
        { 'en-US': 'Date', 'zh-CN': '日期' },
        { 'en-US': 'Transactions', 'zh-CN': '交易次数' },
        { 'en-US': 'Total volume', 'zh-CN': '总成交量' },
        { 'en-US': 'Price (avg ± stddev)', 'zh-CN': '单价（均价 ± 标准差）' },
        {
            'en-US': /Price \(avg .+ stddev\)/,
            'zh-CN': '单价（均价 ± 标准差）',
            'reuse': true
        },
        { 'en-US': 'Back to resources list', 'zh-CN': '返回资源列表', 'reuse': true },
        { 'en-US': 'No orders', 'zh-CN': '暂无订单', 'reuse': true },
        { 'en-US': 'this page', 'zh-CN': '此页面', 'reuse': true },
        {
            'en-US': 'A special item that allows its owner to activate 60 days of CPU subscription. You can buy or activate tokens on the',
            'zh-CN': '此特殊物品可让持有者激活 60 天 CPU 订阅。您可以在',
            'reuse': true
        },

        // 翻译订单
        {
            'selector': '#mat-dialog-0 > app-dlg-resource-orders > header:nth-child(6) > div:nth-child(1) > span',
            'zh-CN': (el: HTMLElement) => {
                el.innerHTML = el.innerHTML.replace(/orders?/g, '个订单')
            }
        },
        {
            'selector': '#mat-dialog-0 > app-dlg-resource-orders > header:nth-child(8) > div > span',
            'zh-CN': (el: HTMLElement) => {
                el.innerHTML = el.innerHTML.replace(/orders?/g, '个订单')
            }
        }
    ]
}

export default content
