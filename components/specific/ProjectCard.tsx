/**
 * ProjectCard 组件 - 项目卡片展示
 * 
 * 职责：
 * - 展示单个项目的详细信息
 * - 支持可玩游戏的直接嵌入
 * - 提供项目链接和技术栈展示
 */

import { Project } from "@/data/projectsData";
import Tag from "@/components/ui/Tag";
import dynamic from "next/dynamic";

// Dynamically import game components with SSR disabled
const SnakeGame = dynamic(
  () => import("@/components/games/SnakeGame"),
  { ssr: false }
);

const BouncingBallGame = dynamic(
  () => import("@/components/games/BouncingBallGame"),
  { ssr: false }
);

const TetrisGame = dynamic(
  () => import("@/components/games/TetrisGame"),
  { ssr: false }
);

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const renderGameComponent = () => {
    if (!project.isPlayable || !project.gameComponent) return null;
    
    switch (project.gameComponent) {
      case 'SnakeGame':
        return <SnakeGame />;
      case 'BouncingBallGame':
        return <BouncingBallGame />;
      case 'TetrisGame':
        return <TetrisGame />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-elevation-1 hover:shadow-elevation-2 transition-all duration-300">
      {/* 项目头部信息 */}
      <div className="p-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-semibold text-text-primary">
                {project.title}
              </h3>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                project.type === 'game' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-blue-100 text-blue-800'
              }`}>
                {project.type === 'game' ? 'Playable' : ' Web App'}
              </span>
            </div>
            <p className="text-body text-text-secondary mb-4">
              {project.description}
            </p>
          </div>
        </div>

        {/* 项目特性 */}
        <div className="mb-4">
          <h4 className="text-sub font-semibold text-text-primary mb-2">
            Key Features:
          </h4>
          <ul className="list-disc list-inside space-y-1">
            {project.features.map((feature, index) => (
              <li key={index} className="text-body text-text-secondary">
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* 技术栈标签 */}
        <div className="mb-4">
          <h4 className="text-sub font-semibold text-text-primary mb-2">
            Technologies:
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Tag key={tech} variant="secondary">
                {tech}
              </Tag>
            ))}
          </div>
        </div>

        {/* 项目链接 */}
        <div className="flex flex-wrap gap-2">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors text-sm font-medium"
            >
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors text-sm font-medium"
            >
              GitHub
            </a>
          )}
        </div>
      </div>

      {/* 游戏展示区域 */}
      {project.isPlayable && (
        <div className="bg-gray-900 p-6">
          <div className="text-center mb-4">
            <h4 className="text-lg font-semibold text-white mb-2">
              🎮
            </h4>
      
          </div>
          <div className="flex justify-center">
            {renderGameComponent()}
          </div>
        </div>
      )}

      {/* 项目截图（非游戏项目） */}
      {!project.isPlayable && project.imageUrl && (
        <div className="border-t border-gray-200">
          <img
            src={project.imageUrl}
            alt={`${project.title} screenshot`}
            className="w-full h-48 object-cover"
          />
        </div>
      )}
    </div>
  );
}
