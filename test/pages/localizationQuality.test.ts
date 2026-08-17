import inventory from '@/pages/inventory'
import map from '@/pages/map/map'
import power from '@/pages/power'
import room from '@/pages/room'
import shards from '@/pages/shards'
import tutorial1 from '@/pages/tutorial/tutorial1'
import tutorial2 from '@/pages/tutorial/tutorial2'
import getTips from '@/pages/tips'
import enter from '@/pages/enter'
import marketAll from '@/pages/market/marketAll'

type Entry = TranslationContent

const findTranslation = (entries: Entry[], source: string): string => {
    const entry = entries.find(content => content['en-US'] === source)
    if (!entry || typeof entry['zh-CN'] !== 'string') {
        throw new Error(`Missing string translation for: ${source}`)
    }
    return entry['zh-CN']
}

describe('历史汉化质量', () => {
    test('库存排序方向应与英文一致', () => {
        expect(findTranslation(inventory.content, 'New to old')).toBe('从新到旧')
        expect(findTranslation(inventory.content, 'Old to new')).toBe('从旧到新')
    })

    test('房间详情应使用完整中文标签', () => {
        expect(findTranslation(room.content, 'Position:')).toBe('位置：')
        expect(findTranslation(room.content, 'Decay in:')).toBe('剩余时间：')
        expect(findTranslation(room.content, 'Safe modes available:')).toBe('可用安全模式：')
        expect(findTranslation(room.content, 'Build an extractor here to mine this mineral deposit.'))
            .toBe('在此建造一座矿机，以开采该矿藏。')
    })

    test('地图与库存词条不应包含已知错译', () => {
        expect(findTranslation(map.content, 'Check out alpha version of the new world map with support of Decorations and Map Visuals (coming soon)'))
            .toBe('切换到支持装饰与地图视觉效果（即将推出）的新版世界地图')
        expect(findTranslation(inventory.content, 'Rooms')).toBe('房间')
        expect(findTranslation(inventory.content, 'after deactivation')).toBe('停用后')
    })

    test('提示与教程正文应保持语义正确', () => {
        expect(findTranslation(getTips(), 'Tip of the day:')).toBe('每日提示：')
        expect(findTranslation(tutorial1.content, 'Next section')).toBe('下一节')
    })

    test('Power Creep 实验期说明不应误译为创建单位', () => {
        expect(findTranslation(power.content, 'You can activate a 24-hour experimentation period to work on your Power Creeps builds without losing levels.                 During an experimentation period:'))
            .toBe('开启 24 小时实验期后，您可以测试超能 creep 的配置而不会损失等级。实验期间：')
    })

    test('镜面说明应语义完整且通顺', () => {
        expect(findTranslation(shards.content, 'Your creeps can travel between them using special portals.'))
            .toBe('您的 creep 可通过特殊传送门在不同镜面之间穿行。')
    })

    test('进入页 CPU 解锁弹窗词条完整', () => {
        expect(findTranslation(enter.content, 'CPU Unlock')).toBe('CPU 解锁')
        expect(findTranslation(enter.content, 'This item allows you to unlock full CPU in your account for 1 day.'))
            .toBe('此物品可让您的账户解锁完整 CPU，持续 1 天。')
        expect(findTranslation(enter.content, 'Lifetime CPU Unlock')).toBe('永久 CPU 解锁')
        expect(findTranslation(enter.content, 'Get full CPU permanently')).toBe('永久获得完整 CPU')
        expect(findTranslation(enter.content, 'with no time limit')).toBe('不受时间限制')
        expect(findTranslation(enter.content, 'In-game Market')).toBe('游戏内市场')
        expect(findTranslation(enter.content, 'Activate')).toBe('激活')
    })

    test('账户通知与市场漏译词条应已覆盖', () => {
        const entryPage = require('@/pages/account/entryPage').default
        expect(findTranslation(entryPage.content, 'Immediately')).toBe('立即')
        expect(findTranslation(entryPage.content, 'Send notifications when your script throws an error.'))
            .toBe('当您的脚本抛出错误时发送通知。')
        expect(findTranslation(marketAll.content, 'Back to resources list')).toBe('返回资源列表')
        expect(findTranslation(room.content, 'Clone branch')).toBe('克隆分支')
    })

    test('补充漏译词条应已覆盖', () => {
        const lobby = require('@/pages/lobby').default
        const cpu = require('@/pages/cpu').default
        const reportProblem = require('@/pages/reportProblem').default
        const register = require('@/pages/register').default
        expect(findTranslation(lobby.content, 'EARLY PREVIEW STARTS ON MAY 20')).toBe('早期预览将于 5 月 20 日开始')
        expect(findTranslation(lobby.content, 'Qualify')).toBe('资格')
        expect(findTranslation(cpu.content, 'Manage your CPU')).toBe('管理您的 CPU')
        expect(findTranslation(cpu.content, 'Days Left')).toBe('剩余天数')
        expect(findTranslation(reportProblem.content, 'Report a problem')).toBe('问题上报')
        expect(findTranslation(register.content, 'Your account has been activated!')).toBe('您的账户已激活！')
        expect(findTranslation(room.content, 'Create Creep')).toBe('创建 creep')
        expect(findTranslation(room.content, 'Body:')).toBe('身体：')
    })
})
