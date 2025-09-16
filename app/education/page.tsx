/**
 * Education Page - 教育经历页面
 * 
 * 页面结构：
 * 1. Hero Section - 页面标题和介绍
 * 2. Education Timeline - 教育经历展示
 * 
 * 技术特点：
 * - 使用客户端组件 ("use client")
 * - 响应式设计，适配不同屏幕尺寸
 * - 使用Tailwind CSS进行样式管理
 * - 集成EducationCard组件展示教育经历
 */

"use client";

import { educationData } from "@/data/educationData";
import EducationCard from "@/components/specific/EducationCard";

export default function EducationPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-md py-2xl">
        <div className="text-center mb-2xl">
          <h1 className="text-main-lg font-display text-text-primary mb-lg">
            Education
          </h1>
          <p className="font-bold text-subsection text-text-secondary max-w-3xl mx-auto">
            My academic journey in computer science.
          </p>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="container mx-auto px-md pb-2xl">
        <div className="space-y-6">
          {educationData.map((education, index) => (
            <div key={education.id} className="relative">
              
              {/* Education item */}
              <div className="md:ml-12">
                <EducationCard education={education} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
