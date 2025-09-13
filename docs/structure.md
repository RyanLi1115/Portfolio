```
.
├── app/
│   ├── layout.tsx                # 根布局：配置字体、全局导航栏和页脚
│   ├── globals.css               # 全局样式：引入Tailwind CSS指令
│   │
│   ├── page.tsx                  # 主页 (Home, /)
│   │
│   ├── experience/
│   │   └── page.tsx              # 工作经验页 (/experience)
│   │
│   ├── projects/
│   │   ├── page.tsx              # 项目列表页 (/projects)
│   │   └── [slug]/
│   │       └── page.tsx          # 单个项目详情页 (e.g., /projects/mern-app)
│   │
│   ├── education/
│   │   └── page.tsx              # 教育背景页 (/education)
│   │
│   └── contact/
│       └── page.tsx              # 联系我页面 (/contact)
│   │
│   ├── api/                      # (可选) 后端API路由
│   │   └── contact/
│   │       └── route.ts          # 联系表单的备用API路由
│   │
│   └── not-found.tsx             # 自定义 404 Not Found 页面
│
├── components/
│   ├── layout/                   # 页面级布局组件
│   │   ├── Navbar.tsx            # 包含 Home, Experience, Projects 等链接
│   │   └── Footer.tsx
│   │
│   ├── ui/                       # 基础UI原子组件
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Tag.tsx
│   │
│   └── specific/                 # 特定页面的组合组件
│       ├── ProjectCard.tsx       # 用于 /projects 页面
│       ├── ExperienceItem.tsx    # 用于 /experience 页面
│       ├── EducationCard.tsx     # 用于 /education 页面
│       └── ContactForm.tsx       # 用于 /contact 页面
│
├── content/
│   └── projects/                 # 仅存放项目介绍 .mdx 文件
│       ├── mern-project.mdx
│       └── ci-cd-project.mdx
│
├── data/                         # 存放结构化的数据，比 MDX 更合适
│   ├── experienceData.ts         # 您的工作经历数据
│   └── educationData.ts          # 您的教育背景数据
│
├── lib/
│   ├── fonts.ts                  # 统一定义并导出 next/font 实例
│   ├── contentParser.ts          # 解析 /content/projects 目录的函数
│   ├── actions.ts                # Next.js Server Actions (用于处理联系表单)
│   └── types.ts                  # 定义全局 TypeScript 类型
│
├── public/
│   ├── images/
│   └── favicon.ico
│
├── .gitignore
├── next.config.mjs
├── package.json
├── postcss.config.js
├── tailwind.config.ts            # 设计系统的核心配置文件
└── tsconfig.json
```