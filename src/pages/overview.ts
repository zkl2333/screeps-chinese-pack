import { translateMultiple } from 'utils'

const MONTH_NAMES: Record<string, string> = {
    January: '1 月',
    February: '2 月',
    March: '3 月',
    April: '4 月',
    May: '5 月',
    June: '6 月',
    July: '7 月',
    August: '8 月',
    September: '9 月',
    October: '10 月',
    November: '11 月',
    December: '12 月'
}

/**
 * 将 "No rank in August 2026" 译为 "2026 年 8 月暂无排名"
 */
export const translateNoRank = function (text: string): string {
    const matched = text.match(/^No rank in ([A-Za-z]+) (\d{4})$/)
    if (!matched) return text.replace('No rank in ', '暂无排名：')
    const month = MONTH_NAMES[matched[1]] || matched[1]
    return `${matched[2]} 年 ${month}暂无排名`
}

/**
 * 中间横排的信息一览
 */
const OVERVIEW_HEADER: MultipleMap = {
    'Control<br>points': '控制点数',
    'Energy<br>harvested': '能量采集量',
    'Energy<br>on construct': '建造消耗的能量',
    'Energy<br>on creeps': '生产 creep 消耗的能量',
    'Creeps<br>produced': '生产的 creep 数',
    'Creeps<br>lost': '损失的 creep 数',
    'Power<br>processed': '超能处理量'
}

/**
 * 图表右上角的下拉框选项
 */
const GRAPH_SELECT_LIST: MultipleMap = {
    'Power processed': '超能处理量',
    'Control points': '控制点数',
    'Energy harvested': '能量采集量',
    'Energy spent on construction': '建造消耗的能量',
    'Energy spent on creeps': '生产 creep 消耗的能量',
    'Creeps produced': '生产的 creep 数',
    'Creeps lost': '损失的 creep 数'
}

/**
 * 获取翻译总览数据统计
 */
export const getOverviewHeaderContent = function (): TranslationContent {
    return {
        'selector': '.profile-stat-title',
        'zh-CN': translateMultiple(OVERVIEW_HEADER),
        'reuse': true
    }
}

const content: PageContent = {
    hashs: ['#!/overview'],
    content: [
        { 'en-US': 'Overview', 'zh-CN': '总览' },

        { 'en-US': 'Global Control Level', 'zh-CN': '全局控制等级' },
        { 'en-US': 'Global Power Level', 'zh-CN': '全局超能等级' },
        { 'en-US': 'Manage Power Creeps', 'zh-CN': '管理超能 creep' },
        { 'en-US': 'Stats Period', 'zh-CN': '统计时长', 'reuse': true },
        { 'en-US': 'Room', 'zh-CN': '房间', 'reuse': true },
        { 'en-US': /Rooms: \d+/, 'zh-CN': (text: string) => text.replace('Rooms:', '房间数：'), 'reuse': true },
        { 'en-US': 'Rooms:', 'zh-CN': '房间数：', 'reuse': true },
        {
            'en-US': /^No rank in .+$/,
            'zh-CN': (text: string) => translateNoRank(text),
            'reuse': true
        },
        {
            'en-US': /\d+ room on shard\d+/,
            'zh-CN': (text: string) => text.replace(/(\d+) room on (shard\d+)/, '$1 个房间，位于 $2'),
            'reuse': true
        },

        { 'en-US': /Graph(:|)/, 'zh-CN': '图表', 'reuse': true },
        { 'en-US': 'Owner:', 'zh-CN': '所有者：' },
        { 'en-US': 'View leaderboard', 'zh-CN': '查看排行榜', 'reuse': true },
        { 'en-US': 'Construction points', 'zh-CN': '建造点数', 'reuse': true },
        { 'en-US': 'Normalize by tick duration', 'zh-CN': '按 tick 时长归一化', 'reuse': true },
        { 'en-US': 'Loading replay...', 'zh-CN': '正在加载回放……', 'reuse': true },
        { 'en-US': 'Replay not found', 'zh-CN': '未找到回放', 'reuse': true },

        getOverviewHeaderContent(),

        // 翻译下拉框当前选中值
        {
            'selector': 'button > span.toggle-text.ng-scope > span',
            'zh-CN': translateMultiple(GRAPH_SELECT_LIST),
            'reuse': true
        },
        // 翻译下拉框选项
        {
            'selector': 'a.ng-binding.ng-scope',
            'zh-CN': translateMultiple(GRAPH_SELECT_LIST),
            'reuse': true
        },
        // 点开房间后的图表
        {
            'selector': 'div.graph-item label',
            'zh-CN': translateMultiple(GRAPH_SELECT_LIST),
            'reuse': true
        }
    ]
}

export default content
