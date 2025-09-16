# 数据设置说明 / Data Setup Instructions

## 概述 / Overview

此项目包含示例数据，用于GitHub展示。如果您想要使用真实数据，请按照以下步骤操作。

This project contains sample data for GitHub showcase. If you want to use real data, please follow the steps below.

## 恢复真实数据 / Restore Real Data

### 步骤 1: 恢复备份文件 / Step 1: Restore Backup Files

```bash
# 恢复工作经验数据 / Restore experience data
cp data/experienceData.backup.ts data/experienceData.ts

# 恢复项目数据 / Restore projects data  
cp data/projectsData.backup.ts data/projectsData.ts

# 恢复教育数据 / Restore education data
cp data/educationData.backup.ts data/educationData.ts

# 恢复联系页面 / Restore contact page
cp app/contact/page.backup.tsx app/contact/page.tsx
```

### 步骤 2: 更新个人信息 / Step 2: Update Personal Information

编辑以下文件，将示例信息替换为您的真实信息：

Edit the following files and replace sample information with your real information:

- `data/experienceData.ts` - 工作经验 / Work Experience
- `data/projectsData.ts` - 项目信息 / Project Information  
- `data/educationData.ts` - 教育背景 / Education Background
- `app/contact/page.tsx` - 联系信息 / Contact Information

### 步骤 3: 更新其他个人信息 / Step 3: Update Other Personal Information

还需要更新以下文件中的个人信息：

You also need to update personal information in the following files:

- `components/layout/Navbar.tsx` - 姓名 / Name
- `app/page.tsx` - 个人介绍 / Personal Introduction

## 注意事项 / Important Notes

1. **备份文件不会被提交到Git** - 备份文件已添加到 `.gitignore` 中
   **Backup files won't be committed to Git** - Backup files are added to `.gitignore`

2. **示例数据文件** - `.example.ts` 文件可以安全地提交到GitHub
   **Sample data files** - `.example.ts` files can be safely committed to GitHub

3. **敏感信息** - 确保不要将包含真实个人信息的文件提交到公共仓库
   **Sensitive information** - Make sure not to commit files containing real personal information to public repositories

## 文件结构 / File Structure

```
data/
├── experienceData.ts          # 当前使用的工作经验数据 / Current experience data
├── experienceData.example.ts   # 示例工作经验数据 / Sample experience data
├── experienceData.backup.ts    # 备份的真实数据 / Backup real data (ignored by git)
├── projectsData.ts             # 当前使用的项目数据 / Current projects data
├── projectsData.example.ts     # 示例项目数据 / Sample projects data
├── projectsData.backup.ts      # 备份的真实数据 / Backup real data (ignored by git)
├── educationData.ts            # 当前使用的教育数据 / Current education data
├── educationData.example.ts    # 示例教育数据 / Sample education data
└── educationData.backup.ts     # 备份的真实数据 / Backup real data (ignored by git)

app/contact/
├── page.tsx                    # 当前使用的联系页面 / Current contact page
├── page.example.tsx           # 示例联系页面 / Sample contact page
└── page.backup.tsx            # 备份的真实联系页面 / Backup real contact page (ignored by git)
```
