import { translateMultiple } from 'utils'
import { getOverviewHeaderContent } from './overview'

const PROFILE_SEASON_TITLE: MultipleMap = {
    'POWER<br>POINTS': '超能点数',
    'POWER<br>RANK': '超能排名',
    'CONTROL<br>POINTS': '控制点数',
    'EXPANSION<br>RANK': '扩张排名'
}

const content: PageContent = {
    hashs: ['#!/profile'],
    content: [
        { 'en-US': 'View Steam profile', 'zh-CN': '查看 Steam 个人资料' },
        { 'en-US': 'Send message', 'zh-CN': '发送信息' },
        { 'en-US': 'My overview', 'zh-CN': '我的总览' },
        { 'en-US': 'Current month', 'zh-CN': '本月统计' },
        { 'en-US': 'Last season', 'zh-CN': '上一赛季', 'reuse': true },
        { 'en-US': 'EXPANSION', 'zh-CN': '扩张' },
        { 'en-US': 'CONTROL', 'zh-CN': '控制' },
        { 'en-US': 'POINTS', 'zh-CN': '点数', 'reuse': true },
        { 'en-US': 'RANK', 'zh-CN': '排名', 'reuse': true },
        { 'en-US': 'Show all', 'zh-CN': '显示全部', 'reuse': true },
        { 'en-US': 'Hide', 'zh-CN': '收起', 'reuse': true },
        { 'en-US': 'User not found', 'zh-CN': '未找到该用户', 'reuse': true },
        {
            'selector': '.profile-season .title',
            'zh-CN': translateMultiple(PROFILE_SEASON_TITLE),
            'reuse': true
        },

        getOverviewHeaderContent()
    ]
}

export default content
