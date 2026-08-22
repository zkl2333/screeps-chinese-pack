import { dontTranslate, translateMultiple } from 'utils'
import getTips from './tips'

const CONSTRUCT_NOTICE: MultipleMap = {
    'Choose location': '选择位置',
    'Place your spawn': '放置您的母巢'
}

const TOOLTIP_LABEL: MultipleMap = {
    'World': '世界',
    'Room overview': '房间总览',
    'Replay room history': '回放房间录像',
    'View / Pan': '查看 / 拖动',
    'Create Flag': '创建旗帜',
    'Construct': '建造',
    'Customize': '自定义房间设置',
    'Pause&nbsp;tracking': '停止追踪',
    'Clear': '清空日志',
    'Main&nbsp;memory': '主内存',
    'Segments': '分段内存',
    'Hide side panel': '隐藏侧边栏',
    'Display options': '显示设置',
    'Place spawn': '放置母巢'
}

const content: PageContent = {
    hashs: ['#!/room', '#!/sim/custom', '#!/sim/survival', '#!/sim/tutorial/', '#!/history'],
    content: [
        // 禁止翻译代码、控制台、内存字段
        dontTranslate('.ace_editor'),
        dontTranslate('.console-messages-list'),
        dontTranslate('.memory-content'),
        dontTranslate('.memory-segment-content'),
        dontTranslate('form.console-input'),

        {
            'selector': 'div.tooltip.ng-scope.ng-isolate-scope > div.tooltip-inner.ng-binding',
            'zh-CN': (el: HTMLElement) => {
                const newContent = TOOLTIP_LABEL[el.innerHTML]
                if (newContent) {
                    el.innerHTML = newContent
                    // 某些中文的 tooltip 会每个字都换行，非常难看，所以指定一个宽度将其撑开
                    el.style.minWidth = `${18 * newContent.length}px`
                }
            },
            'reuse': true
        },

        {
            'en-US': 'The Controller in this room is already captured by another player. It seems that somebody has come here ahead of you. Please choose another room.',
            'zh-CN': '该房间的控制器已被另一位玩家占领。看起来有人比您先到了这里。请选择另一个房间。',
            'reuse': true
        },

        // 下方 Script 面板
        { 'en-US': 'Script', 'zh-CN': '脚本' },
        { 'en-US': 'Branch:', 'zh-CN': '分支：', 'reuse': true },
        { 'en-US': 'Modules', 'zh-CN': '模块', 'reuse': true },
        { 'en-US': 'Choose active branch:', 'zh-CN': '选择活动分支', 'reuse': true },
        { 'en-US': 'Add normal module', 'zh-CN': '添加普通模块', 'reuse': true },
        { 'en-US': 'Add binary module', 'zh-CN': '添加二进制模块', 'reuse': true },
        {
            'selector': 'section > section > div:nth-child(2) > div.modules-list > form > input',
            'zh-CN': (el: HTMLInputElement) => {
                el.placeholder = '输入新模块名称...'
            },
            'reuse': true
        },
        // // 下方 Console 面板
        { 'en-US': 'Console', 'zh-CN': '控制台' },
        // // 下方 Memory 面板
        { 'en-US': 'Memory', 'zh-CN': '内存' },
        // 为了放置内存字段被错误翻译，内存面板被整个禁止翻译了，所以这个也就用不到了
        // {
        //     'selector': 'div.tab-pane > .ng-scope > section > div:nth-child(2) > div > form > input',
        //     'zh-CN': (el: HTMLInputElement) => {
        //         el.placeholder = '添加新的内存监视路径，例如：creeps.John'
        //     }
        // },
        { 'en-US': 'SEGMENT #:', 'zh-CN': '片段 #:', 'reuse': true },

        { 'en-US': 'Sign:', 'zh-CN': '签名:', 'reuse': true },

        // 右侧 panel 名
        // 装扮面板
        { 'en-US': 'Decorations', 'zh-CN': '装饰' },
        { 'en-US': 'View in inventory', 'zh-CN': '在库存中查看' },

        { 'en-US': 'World Map', 'zh-CN': '世界地图' },
        // 入侵者面板
        { 'en-US': 'Invasion', 'zh-CN': '入侵' },
        { 'en-US': 'Type', 'zh-CN': '类型' },
        { 'en-US': 'Melee', 'zh-CN': '近战' },
        { 'en-US': 'Ranged', 'zh-CN': '远程' },
        { 'en-US': 'Healer', 'zh-CN': '治疗' },
        { 'en-US': 'Size', 'zh-CN': '大小' },
        { 'en-US': 'Small', 'zh-CN': '小型' },
        { 'en-US': 'Big', 'zh-CN': '大型' },
        { 'en-US': 'Boosted', 'zh-CN': '强化' },
        { 'en-US': 'Create an invader', 'zh-CN': '生成入侵者' },
        // 坐标面板
        { 'en-US': 'Cursor', 'zh-CN': '坐标' },
        { 'en-US': 'Terrain:', 'zh-CN': '地形：' },
        {
            'selector': '.cursor.ng-isolate-scope > div > div > div > span',
            'zh-CN': translateMultiple({
                'plain': '平原（plain）',
                'swamp': '沼泽（swamp）',
                'wall': '墙（wall）'
            }),
            'protect': true,
            'reuse': true
        },
        // RoomObject 面板
        { 'en-US': 'Position:', 'zh-CN': '位置：', 'reuse': true },
        { 'en-US': 'Hits:', 'zh-CN': '生命值：', 'reuse': true },
        { 'en-US': 'Owner:', 'zh-CN': '所有者：', 'reuse': true },
        { 'en-US': 'Energy:', 'zh-CN': '能量：', 'reuse': true },
        { 'en-US': 'Cooldown:', 'zh-CN': '冷却：', 'reuse': true },
        { 'en-US': 'Decay in:', 'zh-CN': '剩余时间：', 'reuse': true },
        { 'en-US': 'Public:', 'zh-CN': '公开：', 'reuse': true },
        { 'en-US': 'Name:', 'zh-CN': '名称：', 'reuse': true },
        { 'en-US': 'Fatigue:', 'zh-CN': '疲劳：', 'reuse': true },
        { 'en-US': 'Time to live:', 'zh-CN': '剩余存活时间：', 'reuse': true },
        { 'en-US': 'Make public', 'zh-CN': '设为公开', 'reuse': true },
        { 'en-US': 'Make non-public', 'zh-CN': '设为不公开', 'reuse': true },
        { 'en-US': 'Notify me when attacked', 'zh-CN': '被攻击时通知我', 'reuse': true },
        { 'en-US': 'Destroy this structure', 'zh-CN': '摧毁该建筑', 'reuse': true },
        { 'en-US': 'Click again to confirm', 'zh-CN': '再次点击以确认', 'reuse': true },

        { 'en-US': 'Mineral:', 'zh-CN': '矿物：', 'reuse': true },
        { 'en-US': 'Density:', 'zh-CN': '储量：', 'reuse': true },
        { 'en-US': 'Amount:', 'zh-CN': '剩余量：', 'reuse': true },
        { 'en-US': 'Regeneration in:', 'zh-CN': '再生倒计时：', 'reuse': true },
        { 'en-US': 'Learn more', 'zh-CN': '了解更多', 'reuse': true },
        { 'en-US': 'Build an extractor here to mine this mineral deposit.', 'zh-CN': '在此建造一座矿机，以开采该矿藏。', 'reuse': true },
        { 'en-US': 'Amount:', 'zh-CN': '剩余量：', 'reuse': true },

        { 'en-US': 'Level:', 'zh-CN': '等级：', 'reuse': true },
        { 'en-US': 'Safe modes available:', 'zh-CN': '可用安全模式：', 'reuse': true },
        { 'en-US': 'Downgrade in:', 'zh-CN': '降级倒计时：', 'reuse': true },
        { 'en-US': 'Power enabled:', 'zh-CN': '已启用超能：', 'reuse': true },
        { 'en-US': 'Activate safe mode', 'zh-CN': '激活安全模式', 'reuse': true },
        { 'en-US': 'This action will consume 1 available safe mode activation. Proceed?', 'zh-CN': '这将会消耗掉一次安全模式激活次数，确定继续？', 'reuse': true },
        { 'en-US': 'Unclaim', 'zh-CN': '取消占领', 'reuse': true },

        // 建筑面板
        // 建筑
        { 'en-US': 'Construct', 'zh-CN': '建造', 'reuse': true },
        // 建筑过多弹窗
        {
            'en-US': 'You have too many construction sites. The maximum number of construction sites per player is 100.',
            'zh-CN': '您创建的建筑工地过多。每个玩家能够创建的建筑工地上限为 100。',
            'reuse': true
        },
        // 下方提示
        {
            'selector': 'g > text',
            'zh-CN': translateMultiple(CONSTRUCT_NOTICE),
            'reuse': true
        },
        { 'en-US': 'Available:', 'zh-CN': '可用：', 'reuse': true },
        { 'en-US': 'required', 'zh-CN': '需要', 'reuse': true },
        { 'en-US': 'No controller', 'zh-CN': '无控制器', 'reuse': true },
        { 'en-US': 'Ticks remaining', 'zh-CN': '剩余 tick', 'reuse': true },
        { 'en-US': 'ago', 'zh-CN': '前', 'reuse': true },
        // {
        //     'selector': 'div > div > div > button > .ng-scope > div',
        //     'zh-CN': (el: HTMLElement) => {
        //         el.innerHTML = el.innerHTML.replace('Available:', '可建造数:')
        //         el.innerHTML = el.innerHTML.replace('required', '')
        //         el.innerHTML = el.innerHTML.replace('RCL ', '要求RCL')
        //         el.innerHTML = el.innerHTML.replace('Available', '可建造')
        //         el.innerHTML = el.innerHTML.replace('No controller', '控制器无效')
        //     },
        //     'reuse': true
        // },
        // Spawn 建造弹窗
        { 'en-US': 'Create', 'zh-CN': '建造', 'reuse': true },
        { 'en-US': 'Enter name:', 'zh-CN': '输入名称', 'reuse': true },
        { 'en-US': 'Cancel', 'zh-CN': '取消', 'reuse': true },
        { 'en-US': 'OK', 'zh-CN': '确认', 'reuse': true },
        // 建筑描述
        { 'en-US': 'Contains additional energy which can be used by spawns for spawning bigger creeps.', 'zh-CN': '为母巢提供生产更大体型 creep 所需的额外储能空间。', 'reuse': true },
        { 'en-US': 'Decreases movement cost. Decays over time and requires repair.', 'zh-CN': '降低移动消耗。会随时间衰减，需要维修。', 'reuse': true },
        { 'en-US': 'Blocks movement of all creeps. Requires repair after construction.', 'zh-CN': '能够阻挡所有 creep。建造之后需要维护。', 'reuse': true },
        {
            'en-US': 'Defends creeps and structures on the same tile and blocks enemy movement. Decays over time and requires repair.',
            'zh-CN': '保护位于同一位置的 creep 及建筑，并阻挡敌人移动。会随时间衰减，需要维修。',
            'reuse': true
        },
        {
            'en-US': 'Remotely attacks or heals any creep in a room, or repairs a structure.',
            'zh-CN': '能够对同房间的任意 creep 进行远距离攻击或治疗，也可对建筑进行维护。',
            'reuse': true
        },
        { 'en-US': 'Stores up to 2,000 resource units. Decays over time and requires repair.', 'zh-CN': '能够存储 2,000 点资源。会随时间衰减，需要维修。', 'reuse': true },
        { 'en-US': 'Stores up to 1,000,000 resource units.', 'zh-CN': '能够存储 1,000,000 点资源。', 'reuse': true },
        { 'en-US': 'Remotely transfers energy to another Link in the same room.', 'zh-CN': '能够向同房间的 Link 远距离传送能量。', 'reuse': true },
        { 'en-US': 'Allows to mine a mineral deposit.', 'zh-CN': '允许玩家采集矿物。', 'reuse': true },
        { 'en-US': 'Produces mineral compounds and boosts creeps.', 'zh-CN': '能够制造矿物化合物并强化 creep。', 'reuse': true },
        { 'en-US': 'Sends any resources to a\u00A0Terminal in another room.', 'zh-CN': '能够向另一房间的终端发送任意资源。', 'reuse': true },
        { 'en-US': 'Produces trade commodities.', 'zh-CN': '能够生产可交易商品。', 'reuse': true },
        { 'en-US': 'Spawns creeps using energy contained in the room spawns and extensions.', 'zh-CN': '使用房间内母巢与扩展储备的能量生产 creep。', 'reuse': true },
        { 'en-US': 'Provides visibility into a distant room from your script.', 'zh-CN': '能够使您的脚本获取远处一房间的视野。', 'reuse': true },
        { 'en-US': 'Spawns power creeps with special unique powers.', 'zh-CN': '能够生产拥有特殊技能的超能 creep。', 'reuse': true },
        { 'en-US': 'Launches a nuke to a distant room dealing huge damage to the landing area.', 'zh-CN': '能够向远处一房间发射核弹，对命中区域造成巨大伤害。', 'reuse': true },

        // 右侧面板相关提示
        {
            'selector': 'a.help.ng-scope',
            'zh-CN': (el: HTMLElement) => {
                el.setAttribute('title', '该控制器仅在降级倒计时达到最大值后才可升级（点击了解详情）')
            },
            'reuse': true
        },
        {
            'selector': 'div.damaged.ng-binding.ng-scope > a',
            'zh-CN': (el: HTMLElement) => {
                el.setAttribute('title', '通过升级控制器避免降级（点击了解详情）')
            },
            'reuse': true
        },
        // 建筑工地面板
        { 'en-US': 'Construction Site', 'zh-CN': '建筑工地', 'reuse': true },
        { 'en-US': 'Structure:', 'zh-CN': '建筑：', 'reuse': true },
        { 'en-US': 'Progress:', 'zh-CN': '进度：', 'reuse': true },
        { 'en-US': 'Remove construction site', 'zh-CN': '移除建筑工地', 'reuse': true },

        // creep 面板
        { 'en-US': 'Suicide', 'zh-CN': '自毁' },
        { 'en-US': 'View memory', 'zh-CN': '查看内存' },
        { 'en-US': 'Body', 'zh-CN': '部件' },

        // powercreep
        { 'en-US': 'Class:', 'zh-CN': '种类：', 'reuse': true },

        // 房间显示设置 
        { 'en-US': 'Show my names', 'zh-CN': '显示己方名称', 'reuse': true },
        { 'en-US': 'Show hostile names', 'zh-CN': '显示敌方名称', 'reuse': true },
        { 'en-US': 'Show flags', 'zh-CN': '显示旗帜（flag）', 'reuse': true },
        { 'en-US': 'Show flags names', 'zh-CN': '显示旗帜（flag）名称', 'reuse': true },
        { 'en-US': 'Show creeps speech', 'zh-CN': '显示 creep 的对话气泡', 'reuse': true },
        { 'en-US': 'Show visuals', 'zh-CN': '显示房间视觉效果（RoomVisual）。', 'reuse': true },
        { 'en-US': 'Lighting:', 'zh-CN': '光照：', 'reuse': true },
        { 'en-US': 'Swamp texture:', 'zh-CN': '沼泽纹理:', 'reuse': true },
        { 'en-US': 'Hardware acceleration (WebGL)', 'zh-CN': '硬件加速（WebGL）', 'reuse': true },
        { 'en-US': 'Show metrics', 'zh-CN': '显示相关参数', 'reuse': true },
        { 'en-US': 'HD resolution:', 'zh-CN': '高清显示设置:', 'reuse': true },
        { 'en-US': 'Upscaling (performance)', 'zh-CN': '升采样（性能优先）', 'reuse': true },
        { 'en-US': 'Native (quality)', 'zh-CN': '原生分辨率（画质优先）', 'reuse': true },
        { 'en-US': 'Normal', 'zh-CN': '正常', 'reuse': true },
        { 'en-US': 'Low', 'zh-CN': '低', 'reuse': true },
        { 'en-US': 'Disabled', 'zh-CN': '关闭', 'reuse': true },
        { 'en-US': 'Animated', 'zh-CN': '动态', 'reuse': true },
        { 'en-US': 'Static', 'zh-CN': '静态', 'reuse': true },

        // effect面板
        { 'en-US': 'Effects', 'zh-CN': '效果', 'reuse': true },
        // {
        //     'selector': 'div.effect-icon',
        //     'zh-CN': (el: HTMLElement) => {
        //         let text = el.getAttribute('title')
        //         text = text.replace('Ticks remaining', '剩余时长')
        //         el.setAttribute('title', text)
        //     },
        //     'reuse': true
        // },
        {
            'en-US': 'While this structure is alive, it will send invader creeps to all rooms in this sector. It also seems there are some valuable resources inside.',
            'zh-CN': '该建筑存在期间，会向本分区的所有房间派出入侵 creep。其内部似乎藏有珍贵资源。',
            'reuse': true
        },

        // 传送门面板
        { 'en-US': 'Portal', 'zh-CN': '传送门', 'reuse': true },
        { 'en-US': 'portal', 'zh-CN': '传送门', 'reuse': true },
        { 'en-US': 'Inter-shard Portal', 'zh-CN': '跨镜面传送门', 'reuse': true },
        { 'en-US': 'Intra-shard Portal', 'zh-CN': '镜面内传送门', 'reuse': true },
        { 'en-US': 'Destination:', 'zh-CN': '目的地：', 'reuse': true },


        // controller
        { 'en-US': 'Reserved:', 'zh-CN': '预订：', 'reuse': true },

        // invader core
        { 'en-US': 'This structure is spawned by its parent nearby.', 'zh-CN': '该建筑由位于附近的父建筑生成', 'reuse': true },
        { 'en-US': 'Deploying in:', 'zh-CN': '剩余部署时间：', 'reuse': true },

        // invader core creep
        {
            'en-US': 'This creep is angry with your harvesting activity here. Its home is located somewhere in this sector.',
            'zh-CN': '您的采集行为激怒了这个 creep。它的出生点位于本分区的某个位置。',
            'reuse': true
        },

        // source keeper lair
        { 'en-US': 'Spawning in:', 'zh-CN': '生成倒计时：', 'reuse': true },

        // deposite
        { 'en-US': 'Deposit:', 'zh-CN': '沉积物：', 'reuse': true },
        { 'en-US': 'Last cooldown:', 'zh-CN': '上一次采集冷却：', 'reuse': true },

        // powerbank
        { 'en-US': 'Power:', 'zh-CN': '超能：', 'reuse': true },
        { 'en-US': 'This structure emits bright light and splashes of sparks.', 'zh-CN': '这个建筑散发着亮光，飞溅出火星。', 'reuse': true },

        // tombstone
        { 'en-US': 'Tombstone', 'zh-CN': '墓碑', 'reuse': true },
        { 'en-US': 'tombstone', 'zh-CN': '墓碑', 'reuse': true },
        { 'en-US': 'Death time:', 'zh-CN': '死亡时间：', 'reuse': true },
        // {
        //     'selector': 'div.ng-scope > div.ng-binding.ng-scope',
        //     'zh-CN': (el: HTMLElement) => {
        //         el.innerHTML = el.innerHTML.replace('ago', '之前')
        //     },
        //     'reuse': true
        // }

        // 旗帜放置面板
        { 'en-US': 'Change position', 'zh-CN': '修改位置', 'reuse': true },
        { 'en-US': 'Change color', 'zh-CN': '修改颜色', 'reuse': true },
        { 'en-US': 'Remove flag', 'zh-CN': '移除旗帜', 'reuse': true },
        { 'en-US': 'Color:', 'zh-CN': '主颜色：', 'reuse': true },
        { 'en-US': 'Secondary color:', 'zh-CN': '次颜色：', 'reuse': true },
        {
            'en-US': 'Flag with the same name already exists and will be overwritten!',
            'zh-CN': '相同名称的旗帜已存在，继续创建将覆盖原旗帜！',
            'reuse': true
        },

        { 'en-US': 'Rampart', 'zh-CN': '城墙', 'reuse': true },
        { 'en-US': 'Tower', 'zh-CN': '塔', 'reuse': true },
        { 'en-US': 'Terminal', 'zh-CN': '终端', 'reuse': true },
        { 'en-US': 'Store', 'zh-CN': '存储', 'reuse': true },
        { 'en-US': 'Storage', 'zh-CN': '仓库', 'reuse': true },
        { 'en-US': 'Empty', 'zh-CN': '空', 'reuse': true },
        { 'en-US': 'rampart', 'zh-CN': '城墙', 'reuse': true },
        { 'en-US': 'road', 'zh-CN': '道路', 'reuse': true },
        { 'en-US': 'Road', 'zh-CN': '道路', 'reuse': true },
        { 'en-US': 'resource', 'zh-CN': '资源', 'reuse': true },
        { 'en-US': 'mineral', 'zh-CN': '矿物', 'reuse': true },
        { 'en-US': 'Mineral', 'zh-CN': '矿物', 'reuse': true },
        { 'en-US': 'extractor', 'zh-CN': '矿机', 'reuse': true },
        { 'en-US': 'Extractor', 'zh-CN': '矿机', 'reuse': true },
        { 'en-US': 'Source', 'zh-CN': '能量源', 'reuse': true },
        { 'en-US': 'Constructed Wall', 'zh-CN': '建筑墙壁', 'reuse': true },

        // ===== 2026-08 从 build.min.js 补充 =====

        // 新手引导 / 放置 spawn
        { 'en-US': 'Go to Novice Area', 'zh-CN': '前往新手区', 'reuse': true },
        { 'en-US': 'Go to Tutorial', 'zh-CN': '前往教程', 'reuse': true },
        { 'en-US': 'Place first spawn', 'zh-CN': '放置第一个母巢', 'reuse': true },
        { 'en-US': 'Before you start in the real World, we recommend you to take the Tutorial that explains the game basics and everything you are going to face step by step. Have you already taken the tutorial? ', 'zh-CN': '在正式开始之前，我们建议您先通过教程了解游戏基础与将要面对的种种挑战。您是否已经完成了教程？', 'reuse': true },
        { 'en-US': 'Yes, I have', 'zh-CN': '是的，已完成', 'reuse': true },
        { 'en-US': 'Source Keeper', 'zh-CN': 'Source Keeper', 'reuse': true },

        // 房间 / 建筑限制提示
        { 'en-US': 'It is not allowed to destroy a structure when hostile creeps are in the room.', 'zh-CN': '当房间中存在敌对 creep 时，不允许拆除建筑。', 'reuse': true },
        { 'en-US': 'There is a room in safe mode already. You can activate safe mode in only one room at the same time.', 'zh-CN': '已有房间处于安全模式中，同一时间只能在一个房间内激活安全模式。', 'reuse': true },
        { 'en-US': 'There is no Controller in this room. Controllers allow players capture rooms and build facilities in them. A room with no Controller cannot be captured. Please choose another room.', 'zh-CN': '该房间中没有控制器。控制器允许玩家占领房间并建造设施，没有控制器的房间无法被占领。请选择其他房间。', 'reuse': true },
        { 'en-US': 'There is no Controller in this room. Controllers allow players capture rooms and build facilities in them. Construction is impossible in this room.', 'zh-CN': '该房间中没有控制器。控制器允许玩家占领房间并建造设施。此房间中无法进行建造。', 'reuse': true },
        { 'en-US': 'This room is not available for settlement yet. Please choose another room.', 'zh-CN': '该房间暂不开放定居，请选择其他房间。', 'reuse': true },
        { 'en-US': 'You cannot create more than 10,000 flags.', 'zh-CN': '旗帜数量不能超过 10,000 个。', 'reuse': true },
        { 'en-US': 'RCL not enough', 'zh-CN': '房间控制等级不足', 'reuse': true },
        { 'en-US': "You don't have access to claim rooms on this shard.", 'zh-CN': '您没有权限在该镜面上占领房间。', 'reuse': true },
        { 'en-US': 'You must own or reserve this room to generate invaders.', 'zh-CN': '您必须拥有或预订该房间，才能生成入侵者。', 'reuse': true },

        // 脚本编辑器
        { 'en-US': 'Clone branch', 'zh-CN': '克隆分支', 'reuse': true },
        {
            'en-US': 'This branch will be cloned to the new branch. Please enter a new branch name:',
            'zh-CN': '该分支将被克隆到新分支，请输入新分支名称：',
            'reuse': true
        },
        {
            'selector': 'input[placeholder="Branch name"]',
            'zh-CN': (el: HTMLElement) => el.setAttribute('placeholder', '分支名称'),
            'reuse': true
        },
        {
            'en-US': 'This pop-up editor is out of sync. Please re-open the editor.',
            'zh-CN': '此弹出式编辑器已不同步，请重新打开编辑器。',
            'reuse': true
        },
        {
            'selector': '.modal-body, md-dialog-content',
            'zh-CN': (el: HTMLElement) => {
                if (!el.innerHTML.includes('only 1 energy source')) return
                el.innerHTML = el.innerHTML.replace(
                    'There is only 1 energy source in this room. It may create a resource deficit when developing your new colony. We recommend to choose a room with 2 energy sources for your first start in the game.<br><br>Do you really want to place your spawn in this room?',
                    '该房间只有 1 个能量源。在发展新殖民地时可能会造成资源短缺。我们建议首次开局选择拥有 2 个能量源的房间。<br><br>您确定要在此房间放置母巢吗？'
                )
            },
            'reuse': true,
            'ingnoreRepeatedCheck': true
        },
        { 'en-US': 'A branch with this name already exists and will be overwritten!', 'zh-CN': '同名分支已存在，将被覆盖！', 'reuse': true },
        { 'en-US': 'You cannot create more than 30 branches. Please remove some existing branches to clone this branch.', 'zh-CN': '分支数量不能超过 30 个，请先删除部分分支再克隆。', 'reuse': true },
        { 'en-US': 'You have unsaved changes in your current branch! It will be lost if you switch to another branch. Proceed?', 'zh-CN': '当前分支有未保存的修改！切换分支将丢失这些修改，确定继续吗？', 'reuse': true },
        { 'en-US': 'Your remote scripts have been changed. Do you want to replace scripts on your local file system with the remote scripts?', 'zh-CN': '远程脚本已变更，是否用远程脚本替换本地文件系统中的脚本？', 'reuse': true },
        { 'en-US': 'Your remote scripts have been changed. Do you want to replace scripts on your local file system with the remote scripts? Your local changes will be LOST!', 'zh-CN': '远程脚本已变更，是否用远程脚本替换本地文件系统中的脚本？您的本地修改将丢失！', 'reuse': true },
        { 'en-US': 'Your script is not responding. Do you want to terminate it?', 'zh-CN': '您的脚本无响应，是否终止它？', 'reuse': true },
        { 'en-US': 'Not Responding', 'zh-CN': '无响应', 'reuse': true },
        { 'en-US': 'Incorrect memory path', 'zh-CN': '内存路径不正确', 'reuse': true },
        { 'en-US': 'Data length has exceeded 100 KB limit.', 'zh-CN': '数据长度超过 100 KB 限制。', 'reuse': true },
        { 'en-US': 'Always replace without asking', 'zh-CN': '总是直接替换，不再询问', 'reuse': true },
        { 'en-US': 'This action cannot be undone! Are you sure?', 'zh-CN': '该操作无法撤销！确定要继续吗？', 'reuse': true },

        // 创建 creep 对话框
        { 'en-US': 'Create Creep', 'zh-CN': '创建 creep', 'reuse': true },
        { 'en-US': 'Body:', 'zh-CN': '身体：', 'reuse': true },
        {
            'selector': 'input[placeholder="Name"]',
            'zh-CN': (el: HTMLElement) => el.setAttribute('placeholder', '名称'),
            'reuse': true
        },
        {
            'selector': '[title="Hide/show (Alt+Enter)"]',
            'zh-CN': (el: HTMLElement) => el.setAttribute('title', '隐藏/显示（Alt+Enter）'),
            'reuse': true
        },
        {
            'selector': '[title="New window"]',
            'zh-CN': (el: HTMLElement) => el.setAttribute('title', '新窗口'),
            'reuse': true
        },

        // 竞技场激活
        { 'en-US': 'The Arena Mode activation', 'zh-CN': '竞技场模式激活', 'reuse': true },
        {
            'en-US': 'For testing purposes, we have temporary limited access only to the',
            'zh-CN': '出于测试目的，目前仅对 ',
            'reuse': true
        },
        { 'en-US': 'Indiegogo campaign', 'zh-CN': 'Indiegogo 众筹', 'reuse': true },
        {
            'en-US': 'backers. Please enter your activation code sent at your email here:',
            'zh-CN': ' 的支持者开放。请在此输入发送到您邮箱的激活码：',
            'reuse': true
        },
        {
            'en-US': 'If you did not fund the campaign, but feel that you still have to access the Arena, please email us at',
            'zh-CN': '如果您并未参与众筹，但仍认为自己应获得竞技场访问权限，请发邮件至',
            'reuse': true
        },

        ...getTips()
    ]
}

export default content
