/**
 * WobbleCardDemo 组件 - 展示三个具有3D效果的卡片
 * 
 * 设计规范：
 * - 遵循 3d-pin 组件的设计规范，包括圆角、阴影和边框样式
 * - 使用统一的视觉风格和交互效果
 * 
 * 布局结构：
 * - 第一行：左侧大卡片（占2/3）+ 右侧小卡片（占1/3）
 * - 第二行：单个横跨全宽的卡片
 * - 响应式设计：移动端自动堆叠为单列布局
 * 
 * 图片处理：
 * - 图片作为卡片底部背景，占据下半部分空间
 * - 使用 object-cover 保持图片比例并完全填充
 * - 图片层级高于文字内容，无透明度蒙板
 * 
 * 样式特点：
 * - 圆角：rounded-2xl (16px)
 * - 阴影：shadow-[0_8px_16px_rgb(0_0_0/0.4)] (与3d-pin一致)
 * - 边框：border-white/[0.1] 半透明白色边框
 * - 悬停效果：边框透明度增加到 border-white/[0.2]
 */

"use client";

import React from "react";

export function WobbleCardDemo() {
  return (
    // 最外层容器：垂直排列两行卡片，居中对齐，统一间距
    <div className="w-full flex flex-col items-center gap-8">
      
      {/* 第一行容器：CSS Grid 布局，实现左大右小的效果 */}
      <div className="w-full max-w-[70rem] grid grid-cols-1 md:grid-cols-[7fr_3fr] gap-8">
        
        {/* 第一个卡片：左侧大卡片，占据3/5宽度 */}
        <div className="md:col-span-1">
          <div className="relative w-full h-[30rem] rounded-2xl border border-white/[0.1] bg-gradient-to-br from-slate-800 to-slate-900 p-6 transition-all duration-300 hover:border-white/[0.2] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0_0_0/0.6)] shadow-[0_8px_16px_rgb(0_0_0/0.4)]">
            {/* 文字内容区域：相对定位，确保在图片之上 */}
            <div className="relative z-10">
              <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Seeking Developer Position
              </h2>
              <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
                Looking for opportunities to contribute to innovative software projects.
              </p>
            </div>
            {/* 背景图片：绝对定位在卡片底部，占据下半部分 */}
            <img
              src="/galleryDemo1.jpg"
              width={500}
              height={500}
              alt="" // 装饰性图片，无需替代文本
              aria-hidden="true" // 对屏幕阅读器隐藏
              className="absolute bottom-0 left-0 right-0 h-1/2 w-full object-cover rounded-b-2xl z-20"
            />
          </div>
        </div>
        
        {/* 第二个卡片：右侧小卡片，占据2/5宽度 */}
        <div className="md:col-span-1">
          <div className="relative w-full h-[30rem] rounded-2xl border border-white/[0.1] bg-pink-800 p-6 transition-all duration-300 hover:border-white/[0.2] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0_0_0/0.6)] shadow-[0_8px_16px_rgb(0_0_0/0.4)]">
            {/* 文字内容区域 */}
            <div className="relative z-10">
              <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Fast Learning Ability
              </h2>
              <p className="mt-4 text-left text-base/6 text-neutral-200">
                Quick to adapt to new technologies and frameworks.
              </p>
            </div>
            {/* 背景图片 */}
            <img
              src="/galleryDemo2.jpg"
              width={500}
              height={500}
              alt="" // 装饰性图片，无需替代文本
              aria-hidden="true" // 对屏幕阅读器隐藏
              className="absolute bottom-0 left-0 right-0 h-1/2 w-full object-cover rounded-b-2xl z-20"
            />
          </div>
        </div>
      </div>

      {/* 第二行容器：单个大卡片，横跨全宽 */}
      <div className="w-full max-w-[70rem]">
        <div className="relative w-full h-[30rem] rounded-2xl border border-white/[0.1] bg-blue-900 p-6 transition-all duration-300 hover:border-white/[0.2] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0_0_0/0.6)] shadow-[0_8px_16px_rgb(0_0_0/0.4)]">
          {/* 文字内容区域 */}
          <div className="relative z-10">
            <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Passion, Teamwork & More
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
              Dedicated to collaboration and delivering quality results with enthusiasm.
            </p>
          </div>
          {/* 背景图片 */}
          <img
            src="/galleryDemo3.jpg"
            width={500}
            height={500}
            alt="" // 装饰性图片，无需替代文本
            aria-hidden="true" // 对屏幕阅读器隐藏
            className="absolute bottom-0 left-0 right-0 h-1/2 w-full object-cover rounded-b-2xl z-20"
          />
        </div>
      </div>

    </div>
  );
}