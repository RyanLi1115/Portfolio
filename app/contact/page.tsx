/**
 * Contact Page - 联系页面
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
                href="mailto:ryanlii1115@gmail.com"
                className="text-lg text-blue-600 hover:text-blue-800 transition-colors font-medium"
              >
                ryanlii1115@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="container mx-auto px-md pb-2xl">
        <div className="text-center mb-lg">
          <p className="font-bold text-body text-text-secondary max-w-2xl mx-auto">
            Currently living in Epping, NSW, Australia
          </p>
        </div>
        
        {/* Map Container */}
        <div className="bg-gray-100 rounded-lg p-4 max-w-4xl mx-auto">
          <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
            {/* Google Maps Embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.8!2d151.081!3d-33.772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a7c8c8c8c8c8%3A0x8c8c8c8c8c8c8c8c!2sEpping%20Station!5e0!3m2!1sen!2sau!4v1234567890123!5m2!1sen!2sau"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
              title="Epping Station Location"
            ></iframe>
          </div>
          
          {/* Location Info */}
          <div className="mt-4 text-center">
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              Epping Station
            </h3>
            <p className="text-body text-text-secondary">
              Epping, NSW 2121, Australia
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
