import { translateNoRank } from './overview'

const content: PageContent = {
    hashs: ['#!/rank'],
    content: [
        { 'en-US': 'Search by name', 'zh-CN': '搜索玩家名' },
        { 'en-US': 'Rank', 'zh-CN': '排名' },
        { 'en-US': 'Player', 'zh-CN': '玩家' },
        { 'en-US': 'Control points', 'zh-CN': '控制点数' },
        { 'en-US': 'Power points', 'zh-CN': '超能点数' },
        { 'en-US': 'Expansion Rank', 'zh-CN': '扩张排行榜' },
        { 'en-US': 'Power Rank', 'zh-CN': '超能排行榜' },
        {
            'en-US': 'The leaderboard of players expansion during a month. You earn rating points for upgrading any of your Controllers.',
            'zh-CN': '本排行统计了玩家在本月的扩张程度。您可以通过升级任何属于您的控制器来获得排名积分。'
        },
        {
            'en-US': 'The leaderboard of power gained during a month. You earn rating points for processing power in your Power Spawns.',
            'zh-CN': '本排行统计了玩家本月获得的超能。您可以通过在超能母巢中处理超能来获得排名积分。'
        },
        {
            'en-US': 'In the end of the month, your rank is reset.',
            'zh-CN': '在月末时您的排名将会被重置。'
        },
        { 'en-US': 'YOUR RANK', 'zh-CN': '您的排名' },
        { 'en-US': 'Your Rank', 'zh-CN': '您的排名', 'reuse': true },
        { 'en-US': 'Leaderboards', 'zh-CN': '排行榜', 'reuse': true },
        { 'en-US': 'No rank', 'zh-CN': '暂无排名', 'reuse': true },
        {
            'en-US': /^No rank in .+$/,
            'zh-CN': (text: string) => translateNoRank(text),
            'reuse': true
        },
        { 'en-US': 'Learn more', 'zh-CN': '了解更多' }
    ]
}

export default content
