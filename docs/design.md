# Personal Portfolio Brief

## Tech Stack

-   Next.js
-   Tailwind CSS
-   Markdown
-   Vercel

---

# Design System

## 核心库 (Core Libraries)

-   **UI Framework**: Geist UI
-   **Icon Library**: Lucide
-   **Color Palette**: Black & White Dominant

## 字体规范 (Typography)

| 用途 (Usage)      | 元素示例            | 字体 (Font Family) | 大小 (Size)       | 字重 (Weight)    | 行高 (Line Height)      |
| ----------------- | ------------------- | ------------------ | ----------------- | ---------------- | ----------------------- |
| **主标题** | `<h1>`              | `VT323`            | `40px - 48px`     | `Regular (400)`  | `1.2` (约 48px - 58px)  |
| **页面/章节标题** | `<h2>`              | `VT323`            | `32px`            | `Regular (400)`  | `1.3` (约 42px)         |
| **小节标题** | `<h3>`              | `Inter`            | `24px`            | `SemiBold (600)` | `1.4` (约 34px)         |
| **子标题** | `<h4>`              | `Inter`            | `20px`            | `SemiBold (600)` | `1.4` (约 28px)         |
| **正文段落** | `<p>`               | `Inter`            | `16px` (基准)     | `Regular (400)`  | `1.7` (约 27px)         |
| **强调文本** | `<strong>`, `<b>` | `Inter`            | `16px`            | `Bold (700)`     | `1.7` (约 27px)         |
| **辅助/说明文本** | `<small>`           | `Inter`            | `14px`            | `Regular (400)`  | `1.6` (约 22px)         |
| **图注/标签** | `<caption>`         | `Inter`            | `12px`            | `Regular (400)`  | `1.5` (约 18px)         |

## 设计规范 (Design Specification)

### 1. 统一圆角 (Unified Corner Radius)

圆角定义了界面的友好度和元素的聚合关系。我们将建立一个基于基数 `4px` 的圆角体系，确保所有圆角都成比例，视觉上和谐统一。

#### 圆角令牌 (Radius Tokens)

| 名称 (Token Name) | 尺寸 (Pixel) | 用途和场景                                                              |
| :---------------- | :----------- | :---------------------------------------------------------------------- |
| `radius-xs`       | `4px`        | **微小元素**: 标签 (Tags)、徽章 (Badges)、复选框 (Checkboxes)、小图标按钮。 |
| `radius-sm`       | `8px`        | **标准元素**: 按钮 (Buttons)、输入框 (Inputs)、工具提示 (Tooltips)。      |
| `radius-md`       | `12px`       | **中型容器**: 卡片 (Cards)、小弹窗 (Modals)、菜单 (Menus)。                 |
| `radius-lg`       | `16px`       | **大型容器**: 主要内容面板、页面级警告框。                                |
| `radius-xl`       | `24px`       | **特殊或大型面板**: 如侧边栏、背景面板、全屏模态框的内部容器。          |
| `radius-full`     | `9999px`     | **完全圆形**: 头像 (Avatars)、圆形按钮 (Floating Action Buttons)。       |

#### 应用规则

-   **外部大于内部**: 容器的圆角半径应该 **大于或等于** 其内部元素的圆角半径。例如，一个 `radius-md (12px)` 的卡片内部的图片或按钮，其圆角应小于等于 `12px`。
-   **关联性原则**: 当多个元素在视觉上需要被视为一个整体时，可以共享相同的圆角。
-   **全屏与边缘**: 紧贴屏幕边缘的元素（如底部操作栏 Bottom Sheet）的顶部圆角应使用 `radius-lg` 或 `radius-xl`，而贴边的部分则为 `0px`，以创造从屏幕外滑入的物理感觉。

### 2. 统一边框 (Unified Borders)

边框用于明确界定元素的范围和状态。我们将简化边框的使用，主要通过颜色和粗细来传达信息。

#### 边框令牌 (Border Tokens)

| 名称 (Token Name) | 粗细 (Width) | 颜色 (Color - 示例)                     | 用途和场景                                                                               |
| :---------------- | :----------- | :-------------------------------------- | :--------------------------------------------------------------------------------------- |
| `border-subtle`   | `1px`        | `grey-200` (非常浅的灰色)               | **默认/分隔线**: 用于卡片、列表项之间的分隔，或在白色背景上定义输入框的默认状态。          |
| `border-default`  | `1px`        | `grey-400` (中等灰色)                   | **强调边界**: 需要明确区分边界的元素，如次要按钮 (Secondary Button) 的边框。             |
| `border-focus`    | `2px`        | `blue-500` (品牌主色)                   | **交互聚焦**: 输入框、按钮等元素在被键盘 `Tab` 键选中时的状态，确保可访问性 (Accessibility)。 |
| `border-error`    | `1.5px`      | `red-500` (错误红色)                    | **错误状态**: 输入框校验失败时的状态。                                                     |
| `border-disabled` | `1px`        | `grey-100` (最浅的灰色，配合背景色)     | **禁用状态**: 用于禁用按钮、禁用输入框的边框，视觉上减弱其存在感。                         |

#### 应用规则

-   **减法设计**: 优先使用背景色和阴影来区分元素。**只有在确实需要明确边界时才使用边框**。例如，卡片可以使用阴影来代替边框。
-   **状态驱动**: 边框的主要作用是 **响应状态变化**。一个输入框的生命周期（默认 `border-subtle` -> 悬停时变深 -> 聚焦 `border-focus` -> 错误 `border-error`）是边框体系的最佳实践。
-   **粗细与重要性**: `1px` 是标准粗细。`2px` 的 `border-focus` 是为了满足 WCAG (Web Content Accessibility Guidelines) 的可访问性要求，让视觉障碍用户也能清晰地看到焦点位置。

### 3. 统一物理反馈 (Unified Physical Feedback)

物理反馈通过**动效 (Motion)** 和 **层高 (Elevation)** 来模拟现实世界的交互，让用户感觉到他们在“触摸”和“操作”界面。

#### 层高系统 (Elevation System)

使用阴影 (Box Shadow) 来模拟 Z 轴上的高度。元素离“地面”越高，阴影越大、越柔和。

| 层高 (Elevation) | Z轴高度 | 阴影效果 (示例 CSS)                                                    | 用途和场景                                                            |
| :--------------- | :------- | :--------------------------------------------------------------------- | :-------------------------------------------------------------------- |
| `elevation-0`    | 0        | `none`                                                                 | 页面背景、平面元素。                                                  |
| `elevation-1`    | 2dp      | `0 1px 2px rgba(0,0,0,0.05), 0 1px 3px rgba(0,0,0,0.1)`                | **静止状态**: 默认卡片、主要按钮。                                      |
| `elevation-2`    | 6dp      | `0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)`        | **悬停/拖拽状态**: 鼠标悬停在可交互卡片上，或开始拖拽一个元素。       |
| `elevation-3`    | 12dp     | `0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)`       | **弹出层**: 下拉菜单 (Dropdowns)、工具提示 (Tooltips)、小弹窗。        |
| `elevation-4`    | 24dp     | `0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)`      | **关键模态框**: 需要用户集中注意力的对话框 (Dialogs)、全屏模态框。 |

#### 动效系统 (Motion System)

动效应该快速、有意义，并遵循物理规律。

-   **时机 (Timing):**
    -   `100ms - 200ms` (快速): 用于响应用户直接操作的反馈，如按钮点击时的颜色和尺寸变化。感觉是即时的。
    -   `200ms - 300ms` (标准): 用于元素的入场和出场，如模态框的淡入淡出、面板的滑入滑出。平滑且不拖沓。
    -   `300ms - 500ms` (慢速): 用于大范围的场景切换或复杂的动画展示。
-   **缓动函数 (Easing):**
    -   `ease-out` (减速曲线): 用于元素的入场。模拟物体进入视野后平稳停止的过程。
    -   `ease-in` (加速曲线): 用于元素的出场。模拟物体被快速移出视野。
    -   `ease-in-out` (标准曲线): 用于元素在屏幕上的位置变化，过程平滑自然。
-   **交互反馈动效 (Interaction Feedback Motion):**
    -   **点击 (Press):**
        -   **元素下沉**: 按钮被点击时，层高从 `elevation-1` 降至 `elevation-0` 或轻微缩小 (`transform: scale(0.98)`)，模拟被按下去的感觉。
        -   **墨水涟漪 (Ripple Effect)**: 从点击点散开的圆形波纹，提供明确的位置反馈（常见于 Material Design）。
    -   **悬停 (Hover):**
        -   **元素上浮**: 可交互的卡片或按钮在鼠标悬停时，层高从 `elevation-1` 提升至 `elevation-2`，阴影变大，轻微上移 (`transform: translateY(-2px)`), 示意该元素可以被操作。

### 4. 间距与布局系统 (Spacing and Layout)

#### 定义间距令牌 (Spacing Tokens)

同样基于 `4px` 的基数，建立一套间距令牌。

-   `space-xs (4px)`: 元素内部的微小间距。
-   `space-sm (8px)`: 图标与文字之间、标签内部的 padding。
-   `space-md (16px)`: **标准间距单位**。用于卡片内部的 padding、输入框的高度等。
-   `space-lg (24px)`: 元素组之间的间距。
-   `space-xl (32px)`: 不同内容区域（Section）之间的间距。
-   `space-2xl (48px)`: 页面级的大间距。

#### 应用规则

-   **一致性原则**: 始终使用这些预设的令牌来定义 `margin` 和 `padding`，避免出现 `13px`, `19px` 这样的魔术数字。

### 5. 色彩系统 (Color System)

#### 灰阶与基础色 (Grayscale & Base Colors)

-   **背景色**: `color-background: #FFFFFF`
-   **主文字颜色**: `color-text-primary: #111111`
-   **次要文字颜色**: `color-text-secondary: #666666`
-   **禁用状态文字/图标**: `color-text-disabled: #999999`
-   **边框颜色**: `color-border: #EAEAEA` (`grey-200`)

#### 语义化颜色 (Semantic Colors)

-   **交互色**: `color-interactive: #0070F3` (用于链接、聚焦时的品牌主色)
-   **危险/错误色**: `color-destructive: #EE0000` (用于错误状态、删除按钮)
-   **成功色**: `color-success: #007A2E` (用于成功提示)
-   **警告色**: `color-warning: #F5A623` (用于警告提示)