"use client";
import { MaskContainer } from "@/components/ui/svg-mask-effect";
import { GalleryPins } from "@/components/ui/gallery-pins";

export default function HomePage() {

  return (
    <div className="bg-white">
      
      {/* ===== Hero Section - 主要介绍区域 ===== */}
      <section className="container mx-auto flex min-h-[90vh] flex-col items-center justify-center px-md">
        
        {/* MaskContainer and Image code remains the same... */}
        <div className="h-auto w-full">
          <MaskContainer
            size={12} 
            revealText={
              <div className="flex h-full w-full items-center justify-center rounded-md bg-text-primary">
                <p className="mx-auto max-w-4xl text-center text-4xl font-bold text-background">
                  Explore the intersection of <span className="text-blue-500">code</span> and design
                  <br />
                  Create expressive <span className="text-blue-500">user experience</span>
                </p>
              </div>
            }
            className="h-[28rem] rounded-md"
          >
            <p className="mx-auto max-w-4xl text-center text-4xl font-bold text-text-primary">
              I am a software developer.
              <br />
              I focus on bringing ideas to life.
            </p>
          </MaskContainer>
        </div>
        
        <div className="relative z-10 -mt-10">
          <div className="w-40 h-40">
            <img
              src="/homePage.jpg"
              alt="Ryan Yiran Li"
              className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
            />
          </div>
        </div>
        
      </section>
      
      {/* ===== Gallery Section - 作品展示区域 ===== */}
      <div className="container mx-auto">
        {/* 【修改 3】将标题移到这里，并修改样式和增加与上方照片的间距 */}
        <h2 className="text-center font-display text-main-lg text-text-primary mt-10">
          Gallery
        </h2>
        <GalleryPins />
      </div>
      
    </div>
  )
}