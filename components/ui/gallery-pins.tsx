"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";

export function GalleryPins() {
  return (
    <div id="gallery-section" className="w-full pb-2xl">
      {/* 标题已移至 page.tsx */}
      
      {/* 【修改 1 & 2】增加了组件宽度和间距，解决了留白和压缩问题 */}
      <div className="flex flex-col items-center justify-center gap-y-16 md:flex-row md:items-start md:justify-center md:gap-x-16">
        
        {/* 第一个 Pin - 专业经历 */}
        <div className="flex h-[40rem] w-full max-w-lg items-center justify-center">
          <PinContainer
            // 【修改 3】更新了标题和链接
            title="https://sdg.unswzoo.com/"
            href="https://sdg.unswzoo.com/"
          >
            {/* 内部卡片尺寸和样式已调整 */}
            <div className="flex basis-full cursor-pointer flex-col p-md tracking-tight sm:basis-1/2 w-[34rem] h-[30rem]">
              <h3 className="font-sans text-lg font-bold text-text-primary">
                UNSW Business School
              </h3>
              <div className="mt-sm font-sans text-base text-text-secondary">
                <span>
                  Assistant Web Developer - SDG Comitee
                </span>
              </div>
              {/* 图片容器确保了正确的宽高比，防止压缩 */}
              <div className="mt-md flex flex-1 w-full rounded-lg border border-border bg-background aspect-video">
                <img
                  src="/sdg.jpg"
                  alt="Professional Experience Screenshot"
                  className="w-full h-full rounded-lg object-cover"
                />
              </div>
            </div>
          </PinContainer>
        </div>

        {/* 第二个 Pin - 个人项目 */}
        <div className="flex h-[40rem] w-full max-w-lg items-center justify-center">
          <PinContainer
            // 【修改 3】更新了标题和链接
            title="Coming Soon"
            href="#"
          >
            <div className="flex basis-full cursor-pointer flex-col p-md tracking-tight sm:basis-1/2 w-[34rem] h-[30rem]">
              <h3 className="font-sans text-lg font-bold text-text-primary">
                Accord
              </h3>
              <div className="mt-sm font-sans text-base text-text-secondary">
                <span>
                  Founder & Full-stack Developer
                </span>
              </div>
              <div className="mt-md flex flex-1 w-full items-center justify-center rounded-lg border border-border bg-border text-text-secondary aspect-video">
                <span>Coming Soon</span>
              </div>
            </div>
          </PinContainer>
        </div>
      </div>
    </div>
  );
}