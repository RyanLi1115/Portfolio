/**
 * Projects Page - 项目展示页面
 * 
 * 页面结构：
 * 1. Hero Section - 页面标题和介绍
 * 2. Projects Grid - 项目网格展示
 * 3. Call to Action - 联系区域
 * 
 * 技术特点：
 * - 使用客户端组件 ("use client")
 * - 响应式设计，适配不同屏幕尺寸
 * - 使用Tailwind CSS进行样式管理
 * - 集成ProjectCard组件展示项目
 * - 支持可玩游戏直接嵌入
 */

"use client";

import { projectsData } from "@/data/projectsData";
import ProjectCard from "@/components/specific/ProjectCard";

export default function ProjectsPage() {
  // 分离游戏项目和普通项目
  const gameProjects = projectsData.filter(project => project.isPlayable);
  const webProjects = projectsData.filter(project => !project.isPlayable);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-md py-2xl">
        <div className="text-center mb-2xl">
          <h1 className="text-main-lg font-display text-text-primary mb-lg">
            My Projects
          </h1>
          <p className="font-bold text-subsection text-text-secondary max-w-3xl mx-auto">
            Explore my portfolio of web applications and interactive games. 
          </p>
        </div>
      </section>

      {/* Web Applications Section */}
      <section className="container mx-auto px-md pb-2xl">
        <div className="mb-2xl">
          <h2 className="text-section font-display text-text-primary mb-lg text-center">
            Web Applications
          </h2>
          
          <div className="space-y-8">
            {webProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Games Section */}
      <section className="container mx-auto px-md pb-2xl">
        <div className="mb-2xl">
          <h2 className="text-section font-display text-text-primary mb-lg text-center">
            Interactive Games
          </h2>
          
          <div className="space-y-8">
            {gameProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
