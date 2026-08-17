/**
 * 游戏大厅 / 赛季排行榜 / 早期预览
 */
const content: PageContent = {
    hashs: ['#!/lobby', '#!/game-lobby', '#!/survival', '#!/arena', '#!/early-preview', '#!/early-preview-request'],
    content: [
        // 游戏大厅
        { 'en-US': 'World', 'zh-CN': '世界', 'reuse': true },
        {
            'en-US': 'Stake your claim in a huge, constantly expanding, persistent world, and develop your colony as you compete with other players for control over the territory.',
            'zh-CN': '在广阔且持续扩张的永恒世界中占领领地，与其他玩家竞争并发展您的殖民地。',
            'reuse': true
        },
        { 'en-US': 'Survival', 'zh-CN': '生存', 'reuse': true },
        {
            'en-US': 'Defend from NPC creeps, wave after wave, trying to stay as long as you can.',
            'zh-CN': '抵御一波又一波 NPC creep 的进攻，尽可能长时间坚守。',
            'reuse': true
        },
        {
            'en-US': 'Defend from computer-lead creeps, wave after wave, trying to stay as long as you can.',
            'zh-CN': '抵御一波又一波由电脑控制的 creep 进攻，尽可能长时间坚守。',
            'reuse': true
        },
        {
            'en-US': 'Play against others in a confined arena fighting for energy and points.',
            'zh-CN': '在封闭竞技场中与其他玩家争夺能量与积分。',
            'reuse': true
        },
        { 'en-US': 'Duel', 'zh-CN': '决斗', 'reuse': true },
        {
            'en-US': 'Fight with a random player opponent 1 vs 1 until any of you wins.',
            'zh-CN': '与随机匹配的玩家进行 1 对 1 对决，直到一方获胜。',
            'reuse': true
        },
        { 'en-US': 'Temporarily disabled', 'zh-CN': '暂时停用', 'reuse': true },
        { 'en-US': 'In Development', 'zh-CN': '开发中', 'reuse': true },
        { 'en-US': 'Your Rank', 'zh-CN': '您的排名', 'reuse': true },

        // 排行榜通用
        { 'en-US': 'Season:', 'zh-CN': '赛季：', 'reuse': true },
        { 'en-US': 'No results yet', 'zh-CN': '暂无结果', 'reuse': true },
        { 'en-US': 'Score', 'zh-CN': '得分', 'reuse': true },
        { 'en-US': 'View replay', 'zh-CN': '查看回放', 'reuse': true },
        { 'en-US': 'First page', 'zh-CN': '第一页', 'reuse': true },
        { 'en-US': 'Previous page', 'zh-CN': '上一页', 'reuse': true },
        { 'en-US': 'Next page', 'zh-CN': '下一页', 'reuse': true },
        { 'en-US': 'Last page', 'zh-CN': '最后一页', 'reuse': true },

        // 早期预览申请
        { 'en-US': 'Early Preview join request', 'zh-CN': '早期预览加入申请', 'reuse': true },
        {
            'en-US': 'We gradually invite new players into the Early Preview as the capacity grows. Please fill in the following form if you want to join too.',
            'zh-CN': '随着容量增加，我们会逐步邀请新玩家加入早期预览。如果您也想加入，请填写以下表单。',
            'reuse': true
        },
        { 'en-US': 'Your name', 'zh-CN': '您的姓名', 'reuse': true },
        { 'en-US': 'Birth date:', 'zh-CN': '出生日期：', 'reuse': true },
        { 'en-US': 'Date', 'zh-CN': '日', 'reuse': true },
        { 'en-US': 'Month', 'zh-CN': '月', 'reuse': true },
        { 'en-US': 'Year', 'zh-CN': '年', 'reuse': true },
        { 'en-US': 'You are:', 'zh-CN': '您的身份：', 'reuse': true },
        { 'en-US': 'Please Select', 'zh-CN': '请选择', 'reuse': true },
        { 'en-US': 'Student', 'zh-CN': '学生', 'reuse': true },
        { 'en-US': 'Tech geek', 'zh-CN': '技术爱好者', 'reuse': true },
        { 'en-US': 'Tech professional', 'zh-CN': '技术从业者', 'reuse': true },
        { 'en-US': 'None of the above', 'zh-CN': '以上都不是', 'reuse': true },
        {
            'en-US': 'Please explain why you would like to access the Early Preview:',
            'zh-CN': '请说明您希望访问早期预览的原因：',
            'reuse': true
        },
        { 'en-US': 'Submit', 'zh-CN': '提交', 'reuse': true },
        {
            'en-US': 'Thank you! Your request has been submitted. We will contact you when we have more capacity available.',
            'zh-CN': '谢谢！您的申请已提交。容量增加后我们会与您联系。',
            'reuse': true
        }
    ]
}

export default content
