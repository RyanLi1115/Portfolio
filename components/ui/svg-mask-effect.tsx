"use client";

import { useEffect, useRef } from "react";

interface MaskContainerProps {
  children: React.ReactNode;
  revealText: React.ReactNode;
  size?: number;
  className?: string;
}

export function MaskContainer({
  children,
  revealText,
  size = 10,
  className = "",
}: MaskContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      container.style.setProperty("--mouse-x", `${x}px`);
      container.style.setProperty("--mouse-y", `${y}px`);
    };

    const handleMouseEnter = () => {
      container.style.setProperty("--mask-opacity", "1");
    };

    const handleMouseLeave = () => {
      container.style.setProperty("--mask-opacity", "0");
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);
    
    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        "--mask-size": `${size}rem`,
        "--mask-opacity": "0",
      } as React.CSSProperties}
    >
      {/* 背景层 - 显示 children (默认可见) */}
      <div className="absolute inset-0 flex items-center justify-center">
        {children}
      </div>
      
      {/* 前景层 - 显示 revealText，使用 SVG 蒙版 */}
      <div 
        className="absolute inset-0 flex items-center justify-center"
        style={{
          maskImage: `radial-gradient(circle at var(--mouse-x, -100px) var(--mouse-y, -100px), black var(--mask-size), transparent calc(var(--mask-size) + 1px))`,
          WebkitMaskImage: `radial-gradient(circle at var(--mouse-x, -100px) var(--mouse-y, -100px), black var(--mask-size), transparent calc(var(--mask-size) + 1px))`,
          opacity: `var(--mask-opacity)`,
        }}
      >
        {revealText}
      </div>
    </div>
  );
}
