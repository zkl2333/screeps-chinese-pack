# Screeps 建筑与资源术语表

本文档专门统一建筑、资源、资源类型和相关 UI 文案。代码、API、常量和资源常量保留官方英文名称；普通中文说明使用“统一写法”。

## 使用规则

- 建筑名称在代码/API 中保留官方名称，例如 `StructureSpawn`、`StructureStorage`、`PowerSpawn`。
- 面向玩家的 UI 文案使用表中的中文名称；首次出现时可以写成“中文名（英文名）”。
- `energy`、`power`、`ops` 等资源常量保留英文代码名；普通说明分别译为“能量”“超能量”“ops”。
- `creep`、`Spawn`、`Room`、`Controller` 等官方游戏对象名称遵循主术语表，不在本表另行改写。
- 资源数量、容量和价格与单位之间保留一个空格，例如“1,000 点能量”“5,000 CPU”。

## 建筑总表

| 英文名称 / API | 统一中文名 | 说明 |
| --- | --- | --- |
| Spawn / `StructureSpawn` | Spawn | 生产 creep 的核心建筑；不译为“孵化器”。 |
| Extension / `StructureExtension` | Extension | 为 Spawn 提供额外能量容量；普通说明可写“扩展建筑”。 |
| Road / `StructureRoad` | 道路 | 降低 creep 在其上的移动消耗。 |
| Wall / `StructureWall` | 墙 | 阻挡移动的建筑；与 Rampart 区分。 |
| Rampart / `StructureRampart` | Rampart | 可保护同位置的 creep 和建筑；普通说明也保留官方术语。 |
| Container / `StructureContainer` | 容器 | 临时存储资源的建筑。 |
| Storage / `StructureStorage` | 仓库 | 房间内的大容量资源存储建筑；API 名称保留 `Storage`。 |
| Terminal / `StructureTerminal` | 终端 | 跨房间发送资源的建筑；API 名称保留 `Terminal`。 |
| Tower / `StructureTower` | 防御塔 | 攻击、治疗和维修建筑；不在普通中文中写作 `tower`。 |
| Link / `StructureLink` | Link | 在同一房间内传输能量的建筑；为避免与普通“链接”混淆，保留 `Link`。 |
| Extractor / `StructureExtractor` | 提取器 | 从矿物沉积物中提取矿物的建筑。 |
| Lab / `StructureLab` | 实验室 | 生产化合物、反应资源并强化 creep 的建筑。 |
| Observer / `StructureObserver` | 观察器 | 获取远处房间视野的建筑。 |
| Power Spawn / `StructurePowerSpawn` | 超能 Spawn | 处理超能量并生成 GPL 的建筑；API 名称为 `PowerSpawn`。 |
| Nuker / `StructureNuker` | 核弹发射器 | 向远处房间发射核弹的建筑。 |
| Factory / `StructureFactory` | 工厂 | 生产可交易商品的建筑。 |
| Invader Core / `StructureInvaderCore` | 入侵核心 | 入侵者使用的特殊建筑。 |
| Keeper Lair / `StructureKeeperLair` | 源守卫巢穴 | 生成 Source Keeper 的特殊建筑。 |
| Construction Site | 建筑工地 | 建筑尚未完成时的临时对象；不要保留英文 `construction site`。 |
| Power Bank | 超能量仓 | 地图中可开采超能量的特殊中立对象。 |
| Portal | 传送门 | 连接不同房间或分片的特殊对象。 |
| Inter-shard Portal | 跨分片传送门 | 连接不同分片的传送门；不译为“跨位面传送门”。 |
| Intra-shard Portal | 分片内传送门 | 连接同一分片内不同房间的传送门。 |
| Tombstone | 墓碑 | creep 死亡后留下的资源存储对象。 |
| Ruin | 废墟 | 建筑被摧毁后短时间保留的资源对象。 |
| Resource | 资源对象 | 地面上的资源掉落对象；不要泛称为“物品”。 |

## 建筑相关 UI 词条

| 英文 | 统一中文 | 备注 |
| --- | --- | --- |
| Build | 建造 | 建造操作。 |
| Construct | 建造 | 按钮或建筑操作统一使用“建造”，不使用“建筑”代替动作。 |
| Construction Site | 建筑工地 | 建筑面板和提示统一使用“建筑工地”。 |
| Structure | 建筑 | 泛指建筑对象。 |
| Available | 可用 | 数量或容量标签使用“可用”。 |
| Required | 需要 | 建造需求使用“需要”。 |
| Progress | 进度 | 建筑工地进度。 |
| Remove construction site | 移除建筑工地 | 不使用“删除建筑”。 |
| Destroy this structure | 摧毁该建筑 | 破坏已完成建筑的操作。 |
| Repair | 维修 | 建筑维修操作；代码方法 `repair` 保留原文。 |
| Hits | 生命值 | UI 属性使用“生命值”；代码字段 `hits` 保留。 |
| Capacity | 容量 | 建筑或资源存储容量。 |
| Energy cost | 能量消耗 | 不写成“能量花费”。 |
| Decay | 衰减 | 道路、墙等随时间减少耐久度。 |
| Decays over time | 会随时间衰减 | 建筑描述中的固定表达。 |
| Requires repair | 需要维修 | 建筑描述中的固定表达。 |
| Destroyed | 已摧毁 | 建筑状态。 |
| Owner | 所有者 | 建筑面板标签使用“所有者：”。 |
| Public | 公开 | 旗帜、终端等对象的公开状态。 |
| Make public | 设为公开 | 操作按钮。 |
| Destination | 目的地 | 传送门面板中的目标位置标签，使用“目的地：”。 |
| Portal decay | 传送门衰减 | 传送门剩余可用时间的机制。 |
| Decay in | 剩余时间 | 传送门或建筑的剩余时间标签。 |
| Inter-shard | 跨分片 | 描述不同分片之间的连接或移动。 |
| Intra-shard | 分片内 | 描述同一分片内的连接或移动。 |

## 基础资源

| 常量 / 英文 | 统一中文名 | 说明 |
| --- | --- | --- |
| `RESOURCE_ENERGY` / energy | 能量 | 生产 creep、升级控制器和运行建筑的基础资源。 |
| `RESOURCE_POWER` / power | 超能量 | Power Spawn 和 Power Creep 使用的资源；普通说明不写作“power”。 |
| `RESOURCE_OPS` / ops | ops | Power Creep 技能消耗的资源；代码名保持 `ops`。 |
| `RESOURCE_HYDROGEN` / H | 氢 | 基础矿物资源。 |
| `RESOURCE_OXYGEN` / O | 氧 | 基础矿物资源。 |
| `RESOURCE_UTRIUM` / U | 铀 | 基础矿物资源。 |
| `RESOURCE_LEMERGIUM` / L | 铼 | 基础矿物资源。 |
| `RESOURCE_KEANIUM` / K | 钾 | 基础矿物资源。 |
| `RESOURCE_ZYNTHIUM` / Z | 锌 | 基础矿物资源。 |
| `RESOURCE_CATALYST` / X | 催化剂 | 用于生产高级化合物的基础资源。 |
| `RESOURCE_GHODIUM` / G | 钆 | 由多种基础资源合成的资源。 |

> 游戏代码中优先使用 `H`、`O`、`U`、`L`、`K`、`Z`、`X`、`G` 等官方常量；中文 UI 中可使用完整中文名称。

## 化合物与强化资源

| 英文类别 | 统一中文名 | 说明 |
| --- | --- | --- |
| Mineral | 矿物 | 地图中的基础矿藏类别。 |
| Compound | 化合物 | 由实验室合成的资源总称。 |
| Boost | 强化资源 | 用于强化 creep 身体部件的化合物。 |
| Tier 1 compound | 一级化合物 | 由两种基础矿物合成。 |
| Tier 2 compound | 二级化合物 | 由一级化合物继续合成。 |
| Tier 3 compound | 三级化合物 | 由二级化合物与催化剂合成。 |
| Ghodium | 钆 | `G` 资源；不要与 `Ghodium Melt` 混写。 |
| Ghodium Melt | 熔融钆 | 工厂商品资源。 |
| Purifier | 纯化剂 | 用于资源加工的商品。 |
| Reductant | 还原剂 | 用于资源加工的商品。 |
| Oxidant | 氧化剂 | 用于资源加工的商品。 |

## 工厂商品

| 英文 / 常量类别 | 统一中文名 | 说明 |
| --- | --- | --- |
| Commodity | 商品 | 工厂生产的可交易资源总称。 |
| Metal | 金属 | 基础商品资源。 |
| Biomass | 生物质 | 基础商品资源。 |
| Silicon | 硅 | 基础商品资源。 |
| Mist | 迷雾 | 基础商品资源。 |
| Bar | 金属锭 / 资源锭 | 例如 `UTRIUM_BAR` 译为“铀锭”；具体资源名优先保留元素中文名。 |
| Battery | 电池 | 工厂商品。 |
| Wire | 电线 | 工厂商品。 |
| Cell | 电池单元 | 工厂商品。 |
| Switch | 开关 | 工厂商品。 |
| Transistor | 晶体管 | 工厂商品。 |
| Microchip | 微芯片 | 工厂商品。 |
| Circuit | 电路 | 工厂商品。 |
| Device | 设备 | 工厂商品。 |
| Composite | 复合材料 | 工厂商品。 |
| Crystal | 晶体 | 工厂商品。 |
| Liquid | 液体 | 工厂商品。 |
| Tissue | 组织 | 生物类商品。 |
| Muscle | 肌肉 | 生物类商品。 |
| Organoid | 类器官 | 生物类商品。 |
| Organism | 生物体 | 生物类商品。 |
| Fixture | 固定件 | 高级商品。 |
| Tube | 管件 | 高级商品。 |
| Phlegm | 黏液 | 生物类商品。 |
| Condensate | 凝结物 | 工厂商品资源。 |

## 资源相关 UI 词条

| 英文 | 统一中文 | 备注 |
| --- | --- | --- |
| Resource | 资源 | 泛称。 |
| Resources | 资源 | 复数不额外翻译。 |
| Energy | 能量 | 基础资源。 |
| Power | 超能量 | 资源、排行榜和处理量语境。 |
| Mineral | 矿物 | 矿藏类型。 |
| Deposit | 沉积物 | 地图上的可采集资源沉积物。 |
| Amount | 数量 / 剩余量 | 资源面板中优先使用“剩余量”。 |
| Density | 储量 | 地图矿物信息使用“储量”。 |
| Regeneration in | 再生倒计时 | 资源点或矿物再生时间。 |
| Last cooldown | 上一次采集冷却 | Deposit 面板中的标签。 |
| Transfer | 转移 | 资源转移操作；代码方法 `transfer` 保留原文。 |
| Withdraw | 取出 | 从仓库、终端等建筑取出资源。 |
| Send | 发送 | 终端跨房间发送资源。 |
| Sell | 出售 | 市场订单操作。 |
| Buy | 购买 | 市场订单操作。 |
| Price | 单价 | 市场资源价格。 |
| Total | 总量 | 市场资源数量。 |
| Remaining | 剩余 | 市场订单剩余数量。 |
| Available | 可用 | 市场或建筑中的可用数量。 |
| Power processed | 超能量处理量 | 总览、地图和统计图表统一使用。 |
| Energy harvested | 能量采集量 | 统计图表统一使用。 |
| Energy spent | 能量消耗量 | 统计图表统一使用。 |
| Resource units | 点资源 | 数值说明中可按具体资源替换，例如“点能量”。 |

## 不建议使用的写法

| 不建议 | 建议改为 |
| --- | --- |
| 孵化器 | Spawn |
| 建筑（作为 Construct 动词） | 建造 |
| construction site | 建筑工地 |
| power（普通中文说明） | 超能量 |
| Power Creep（普通中文说明） | 超能 creep |
| source（普通中文说明） | 资源点 |
| storage（普通中文说明） | 仓库 |
| terminal（普通中文说明） | 终端 |
| tower（普通中文说明） | 防御塔 |
| rampart（普通中文说明） | Rampart |
| wall（普通中文说明） | 墙 |
| 资源物品 | 资源 |
| 预定 | 预订 |
| CPU 上线 | CPU 限制 |
| 1 格/秒 | 1 格/tick |
