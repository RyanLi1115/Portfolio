/**
 * HomePage 组件 - 个人作品集主页
 * 
 * 页面结构：
 * 1. Hero Section - 主要介绍区域，包含动态文字效果和个人头像
 * 2. Gallery Section - 作品展示区域，包含GalleryPins和WobbleCardDemo组件
 * 
 * 技术特点：
 * - 使用客户端组件 ("use client")
 * - 响应式设计，适配不同屏幕尺寸
 * - 使用Tailwind CSS进行样式管理
 * - 集成多个自定义UI组件
 * 
 * 组件依赖：
 * - MaskContainer: SVG遮罩效果组件，用于创建动态文字揭示效果
 * - GalleryPins: 3D画廊组件，展示作品集
 * - WobbleCardDemo: 3D卡片组件，展示项目信息
 */

"use client";

// 导入所需的UI组件
import { MaskContainer } from "@/components/ui/svg-mask-effect"; // SVG遮罩效果组件
import { GalleryPins } from "@/components/ui/gallery-pins"; // 3D画廊组件
import { WobbleCardDemo } from "@/components/ui/wobble-card-demo"; // 3D卡片组件

/**
 * HomePage 主组件
 * 渲染个人作品集的主页内容
 * @returns {JSX.Element} 主页组件
 */
export default function HomePage() {

  return (
    // 最外层容器：设置白色背景，确保整个页面背景一致
    <div className="bg-white">
      
      {/* ===== Hero Section - 主要介绍区域 ===== */}
      {/* 
        英雄区域：页面的主要展示区域
        - container mx-auto: 水平居中，最大宽度限制
        - flex min-h-[90vh]: 垂直布局，最小高度为视口高度的90%
        - flex-col items-center justify-center: 垂直排列，居中对齐
        - px-md: 水平内边距（自定义间距）
      */}
      <section className="container mx-auto flex min-h-[90vh] flex-col items-center justify-center px-md">
        
        {/* MaskContainer 容器：用于创建动态文字揭示效果 */}
        <div className="h-auto w-full">
          <MaskContainer
            size={12} // SVG遮罩的大小参数，控制动画效果
            revealText={
              // 揭示文字：当动画完成时显示的内容
              <div className="flex h-full w-full items-center justify-center rounded-md bg-text-primary">
                <p className="mx-auto max-w-4xl text-center text-4xl font-bold text-background">
                  Explore the intersection of <span className="text-blue-500">code</span> and design
                  <br />
                  Create expressive <span className="text-blue-500">user experience</span>
                </p>
              </div>
            }
            className="h-[28rem] rounded-md" // 容器高度和圆角
          >
            {/* 初始文字：动画开始前显示的内容 */}
            <p className="mx-auto max-w-4xl text-center text-4xl font-bold text-text-primary">
              I am a software developer.
              <br />
              I focus on bringing ideas to life.
            </p>
          </MaskContainer>
        </div>
        
        {/* 个人头像区域：位于MaskContainer下方 */}
        <div className="relative z-10 -mt-10">
          {/* 头像容器：固定尺寸的正方形 */}
          <div className="w-40 h-40">
            <img
              src="/homePage.jpg" // 头像图片路径
              alt="Ryan Yiran Li" // 可访问性：图片描述
              className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
              // 样式说明：
              // - w-full h-full: 填满容器
              // - object-cover: 保持比例，裁剪多余部分
              // - rounded-full: 圆形头像
              // - border-4 border-white: 白色边框
              // - shadow-lg: 阴影效果
            />
          </div>
        </div>
        
      </section>
      
      {/* ===== Gallery Section - 作品展示区域 ===== */}
      {/* 
        画廊区域：展示个人作品和项目
        - container mx-auto: 水平居中，最大宽度限制
      */}
      <div className="container mx-auto">
        {/* 画廊标题：使用自定义字体和样式 */}
        <h2 className="text-center font-display text-main-lg text-text-primary mt-10">
          Gallery
        </h2>
        
        {/* GalleryPins 组件：3D画廊效果，展示作品集 */}
        <GalleryPins />
        
        {/* WobbleCard Demo Section：3D卡片组件区域 */}
        <div className="mt-4">
          {/* WobbleCardDemo 组件：展示三个具有3D效果的卡片 */}
          <WobbleCardDemo />
        </div>
      </div>
      
    </div>
  )
}