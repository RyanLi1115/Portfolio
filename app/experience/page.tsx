/**
 * Experience Page - 工作经验页面
 * 
 * 页面结构：
 * 1. Hero Section - 页面标题和介绍
 * 2. Experience Timeline - 工作经验时间线展示
 * 
 * 技术特点：
 * - 使用客户端组件 ("use client")
 * - 响应式设计，适配不同屏幕尺寸
 * - 使用Tailwind CSS进行样式管理
 * - 集成ExperienceItem组件展示工作经验
 */

"use client";

import { experienceData } from "@/data/experienceData";
import ExperienceItem from "@/components/specific/ExperienceItem";

export default function ExperiencePage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-md py-2xl">
        <div className="text-center mb-2xl">
          <h1 className="text-main-lg font-display text-text-primary mb-lg">
            Experience
          </h1>
          {/* journay in blue */}
          <p className="font-bold text-subsection text-text-secondary max-w-3xl mx-auto">
            A <span className="text-blue-500">journey</span> through my career.
          </p>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="container mx-auto px-md pb-2xl">
        <div className="space-y-6">
          {experienceData.map((experience, index) => (
            <div key={experience.id} className="relative">
              {/* Experience item */}
              <div className="md:ml-12">
                <ExperienceItem experience={experience} />
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
