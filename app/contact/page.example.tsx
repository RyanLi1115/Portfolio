/**
 * Contact Page - 联系页面 (示例版本)
 * 
 * 页面结构：
 * 1. Hero Section - 页面标题和邮箱信息
 * 2. Location Section - 地图和位置信息
 * 
 * 技术特点：
 * - 使用客户端组件 ("use client")
 * - 响应式设计，适配不同屏幕尺寸
 * - 使用Tailwind CSS进行样式管理
 * - 集成地图组件显示位置
 */

"use client";

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-md py-2xl">
        <div className="text-center mb-2xl">
          <h1 className="text-main-lg font-display text-text-primary mb-lg">
            Contact Me
          </h1>
        
          
          {/* Email Section */}
          <div className="bg-gray-50 rounded-lg p-2xl max-w-md mx-auto">
            <div className="text-center">
              <a 
                href="mailto:example@email.com"
                className="text-lg text-blue-600 hover:text-blue-800 transition-colors font-medium"
              >
                example@email.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="container mx-auto px-md pb-2xl">
        <div className="text-center mb-lg">
          <p className="font-bold text-body text-text-secondary max-w-2xl mx-auto">
            Currently living in City, State, Country
          </p>
        </div>
        
        {/* Map Container */}
        <div className="bg-gray-100 rounded-lg p-4 max-w-4xl mx-auto">
          <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
            {/* Placeholder for map */}
            <div className="text-center text-gray-500">
              <div className="text-4xl mb-4">📍</div>
              <p className="text-lg font-medium">Map Location</p>
              <p className="text-sm">Replace with your actual location</p>
            </div>
          </div>
          
          {/* Location Info */}
          <div className="mt-4 text-center">
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              Your Location
            </h3>
            <p className="text-body text-text-secondary">
              City, State, Country
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
