import inventory from '@/pages/inventory'
import map from '@/pages/map/map'
import power from '@/pages/power'
import room from '@/pages/room'
import shards from '@/pages/shards'
import tutorial1 from '@/pages/tutorial/tutorial1'
import tutorial2 from '@/pages/tutorial/tutorial2'
import getTips from '@/pages/tips'

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
            .toBe('在此建造一座提取器，以开采该矿藏。')
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

    test('分片说明应语义完整且通顺', () => {
        expect(findTranslation(shards.content, 'Your creeps can travel between them using special portals.'))
            .toBe('您的 creep 可通过特殊传送门在不同分片之间穿行。')
    })
})
