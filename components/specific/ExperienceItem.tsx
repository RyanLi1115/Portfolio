/**
 * ExperienceItem 组件 - 工作经验项目展示
 * 
 * 职责：
 * - 展示单个工作经验的详细信息
 * - 包含公司、职位、时间、技术栈等
 * - 提供响应式设计和悬停效果
 */

import { ExperienceItem as ExperienceItemType } from "@/data/experienceData";
import Tag from "@/components/ui/Tag";

interface ExperienceItemProps {
  experience: ExperienceItemType;
}

export default function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-elevation-1 hover:shadow-elevation-2 transition-all duration-300">
      {/* 头部信息 */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-text-primary mb-1">
            {experience.position}
          </h3>
          <div className="flex items-center gap-2 mb-1">
            <p className="text-lg text-text-secondary">
              {experience.company}
            </p>
            {experience.url && (
              <a
                href={experience.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors text-sm font-medium"
              >
                Visit Site
              </a>
            )}
          </div>
          <p className="text-sm text-text-disabled mb-2">
            {experience.location} • {experience.duration}
          </p>
        </div>
      </div>

      {/* 工作描述 */}
      <p className="text-body text-text-primary mb-4">
        {experience.description}
      </p>

      {/* 主要成就 */}
      <div className="mb-4">
        <h4 className="text-sub font-semibold text-text-primary mb-2">
          Key Achievements:
        </h4>
        <ul className="list-disc list-inside space-y-1">
          {experience.achievements.map((achievement, index) => (
            <li key={index} className="text-body text-text-secondary">
              {achievement}
            </li>
          ))}
        </ul>
      </div>

      {/* 技术栈标签 */}
      <div>
        <h4 className="text-sub font-semibold text-text-primary mb-2">
          Technologies:
        </h4>
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <Tag key={tech} variant="secondary">
              {tech}
            </Tag>
          ))}
        </div>
      </div>
    </div>
  );
}
