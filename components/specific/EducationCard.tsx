/**
 * EducationCard 组件 - 教育经历卡片展示
 * 
 * 职责：
 * - 展示单个教育经历的详细信息
 * - 包含学校、专业、时间
 * - 提供简洁的卡片设计
 */

import { EducationItem } from "@/data/educationData";

interface EducationCardProps {
  education: EducationItem;
}

export default function EducationCard({ education }: EducationCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-elevation-1 hover:shadow-elevation-2 transition-all duration-300">
      {/* 学校名称 */}
      <h3 className="text-xl font-semibold text-text-primary mb-2">
        {education.school}
      </h3>
      
      {/* 专业 */}
      <p className="text-lg text-text-secondary mb-2">
        {education.major}
      </p>
      
      {/* 时间 */}
      <p className="text-sm text-text-disabled">
        {education.duration}
      </p>
    </div>
  );
}
