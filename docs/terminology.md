# Screeps 中文术语表

本文档用于统一 `screeps-chinese-pack` 的中文翻译。新增或修改词条时，优先使用本表中的写法。

建筑、资源及资源 UI 的详细词表见：[建筑与资源术语表](./buildings-resources-terminology.md)。

## 使用原则

- **代码、API、常量和类名保留官方英文写法**，例如 `Creep`、`Spawn`、`Room`、`Memory`、`Game`、`CPU`、`tick`、`FIND_SOURCES`。
- **自然语言中的普通名词使用中文**，例如“房间”“控制器”“资源点”。
- Screeps 专有名词与代码术语混排时，中文与英文之间保留一个半角空格；代码标签内部不改写。
- 面向玩家的说明统一使用“您”，避免同一页面混用“你/您”。
- 中文 UI 标签使用全角标点：`：`、`？`、`！`、`。`；代码和英文原文中的标点不改动。

## 核心游戏对象

| 英文/术语 | 统一写法 | 使用说明 |
| --- | --- | --- |
| creep / Creep | creep | 普通说明中使用小写 `creep`；API 类名、代码和官方名称保留 `Creep`。不译为“爬虫”。 |
| power creep / Power Creep | 超能 creep | `Power Creep` 作为类名或代码文本保留原文；中文说明使用“超能 creep”。 |
| spawn / Spawn | Spawn | 建筑名称保留官方术语 `Spawn`；自然语言中可写“Spawn 建筑”，不译为“孵化器”。 |
| power spawn / Power Spawn | 超能 Spawn | 代码/API 名称保留 `PowerSpawn`；中文说明使用“超能 Spawn”。 |
| room / Room | 房间 | 普通 UI 和说明译为“房间”；`Room` 类名、API 和代码标签保留原文。 |
| room object / RoomObject | 房间对象 | `RoomObject` 作为 API 名称保留原文。 |
| controller / Controller | 控制器 | 普通说明译为“控制器”；`Controller` 类名或 API 保留原文。 |
| source / Source | 资源点 | `Source` 作为对象名、API 或代码标签保留原文；说明文本译为“资源点”。 |
| mineral | 矿物 | 矿物资源和矿藏统一使用“矿物”。 |
| deposit | 沉积物 | Deposit 面板中的资源沉积物使用“沉积物”。 |
| storage | 仓库 | `Storage` 结构名称可保留 `Storage`；普通 UI 说明译为“仓库”。 |
| terminal | 终端 | `Terminal` 结构名称可保留 `Terminal`；普通 UI 说明译为“终端”。 |
| container | 容器 | `Container` 结构名称可保留 `Container`；普通 UI 说明译为“容器”。 |
| link / Link | Link | 建筑名称保留 `Link`，避免与普通链接混淆。 |
| tower / Tower | 防御塔 | `Tower` 建筑名称在 UI 中文中译为“防御塔”；API 和代码保留 `Tower`。 |
| rampart / Rampart | Rampart | `Rampart` 结构和普通说明均保留官方术语。 |
| wall / Wall | 墙 | 普通说明和建筑名称统一使用“墙”；不要译为“墙壁”。 |
| road / Road | 道路 | 普通说明和 UI 统一译为“道路”。 |
| construction site | 建筑工地 | 统一使用“建筑工地”，不要在中文句子中保留 `construction site`。 |
| flag / Flag | 旗帜 | 普通说明译为“旗帜”；API 和代码保留 `Flag`。 |
| nuke | 核弹 | UI 和说明统一译为“核弹”。 |

## 资源、数值和机制

| 英文/术语 | 统一写法 | 使用说明 |
| --- | --- | --- |
| power | 超能量 | 作为资源或排行榜内容时译为“超能量”；API/代码中的 `power` 保留原文。 |
| Power Level | 超能等级 | 账户或 Power Creep 等级使用“超能等级”。 |
| Global Power Level | 全局超能等级 | 统一使用“全局超能等级”。 |
| Power points | 超能点数 | 排行榜中的统计项使用“超能点数”。 |
| Power Rank | 超能排行榜 | 排行榜名称使用“超能排行榜”。 |
| ops | ops | 游戏资源名保留 `ops`，可写“ops 资源”。 |
| CPU | CPU | 保留大写英文，不写成“处理器”。 |
| CPU limit | CPU 限制 | 不使用“CPU 上线”。 |
| tick / ticks | tick | 游戏时间单位统一保留 `tick`；例如“每 tick”“1500 tick”。不要译为“秒”。 |
| square | 格 | 移动距离中的 square 译为“格”。 |
| hits | 点生命值 | 属性或描述中使用“点生命值”；必要时保留 `hits` 作为代码字段。 |
| cooldown | 冷却 | UI 和说明统一译为“冷却”。 |
| safe mode | 安全模式 | 统一使用“安全模式”。 |
| safe mode activation | 安全模式激活次数 | “available”表示“可用”，不是“剩余”，除非原文明确表示剩余数量。 |
| RCL / room control level | 房间控制等级 | `RCL`、`room control level` 在代码中保留；普通说明使用“房间控制等级”。 |
| GCL / Global Control Level | 全局控制等级 | `GCL` 保留，完整 UI 文案使用“全局控制等级”。 |

## 世界、账户与页面

| 英文/术语 | 统一写法 | 使用说明 |
| --- | --- | --- |
| shard | 分片 | 不使用“位面”。 |
| portal / Portal | 传送门 | 连接房间或分片的特殊对象；`Portal` 作为代码/API 名称保留。 |
| inter-shard portal | 跨分片传送门 | 连接不同分片的传送门。 |
| intra-shard portal | 分片内传送门 | 连接同一分片内不同房间的传送门。 |
| sector | 分区 | 地图和入侵者说明统一使用“分区”。 |
| Novice Area | 新手区 | 首次出现可写“新手区（Novice Area）”。 |
| Persistent World | 永恒世界 | 与 `Seasonal World` 对应。 |
| Seasonal World | 赛季世界 | 不写“赛季服务器”，除非上下文明确指服务器。 |
| Arena | 竞技场 | 统一使用“竞技场”。 |
| Tutorial | 教程 | `Tutorial` 页面和按钮统一译为“教程”。 |
| Simulation / Simulator | 模拟器 | 模拟模式和模拟器 UI 统一使用“模拟器”。 |
| Market | 市场 | 统一使用“市场”。 |
| order | 订单 | `order/orders` 都译为“订单”，数量保留在原文位置。 |
| Target room | 目标房间 | 标签使用“目标房间：”。 |
| reservation | 预订 | 房间预订统一使用“预订”，不使用“预定”。 |
| owner | 所有者 | 标签使用“所有者：”。 |
| sign | 签名 | 标签使用“签名：”。 |
| density | 储量 | 地图资源信息使用“储量：”。 |
| Steam / GitHub | Steam / GitHub | 品牌大小写保持官方写法。 |
| account | 账户 | 统一使用“账户”，不混用“帐户”。 |
| auth token | 验证令牌 | 统一使用“验证令牌”。 |
| CAPTCHA | CAPTCHA / 验证码 | 技术说明可保留 `CAPTCHA`；面向玩家的普通文本使用“验证码”。 |

## 编辑器与教程

| 英文/术语 | 统一写法 | 使用说明 |
| --- | --- | --- |
| Script | 脚本 | Script 面板统一译为“脚本”。 |
| Console | 控制台 | Console 面板统一译为“控制台”，不要误译为“控制器”。 |
| Memory | 内存 | Memory 面板译为“内存”；`Memory` 对象和代码保留原文。 |
| Branch | 分支 | `Branch:` 使用“分支：”。 |
| Module | 模块 | 统一使用“模块”。 |
| View | 查看 | 操作按钮和教程目标统一使用“查看”。 |
| construction site | 建筑工地 | 与建筑面板保持一致。 |
| Next section | 下一节 | 教程导航不使用“下一关”。 |
| tip / Tip of the day | 提示 / 每日提示 | 不使用“TIP”或“下个 tip”。 |
| Not Responding | 无响应 | 脚本状态统一使用“无响应”。 |
| remote scripts | 远程脚本 | 远程脚本提示统一使用“远程脚本”。 |
| local file system | 本地文件系统 | 不省略为“本地文件”。 |

## 标点与语气

- 标签统一使用全角冒号：`所有者：`、`目标房间：`、`分支：`。
- 疑问句统一使用全角问号：`确定要继续吗？`。
- 确认/警告文案统一使用“吗”，不使用“么”。
- 叙述和按钮提示统一使用“您”；只有引用原文或代码时保留英文的 `you`。
- 中文与英文术语之间保留一个空格，例如“升级您的 controller”“消耗 10 点 ops”。
