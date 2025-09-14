/**
 * ScrollController 组件 - 全局滚动控制
 * 
 * 职责：
 * - 控制页脚揭示效果
 * - 当页脚完全展开时阻止继续向下滚动
 * - 允许向上滚动来遮蔽页脚
 * - 管理main元素的transform和margin
 */

"use client";

import { useEffect, useRef } from 'react';

const FOOTER_HEIGHT = 320;

export default function ScrollController() {
  const maxScrollPosition = useRef<number>(0);
  const isLocked = useRef<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const mainElement = document.querySelector('main');
      if (!mainElement) return;

      const mainBottom = mainElement.offsetTop + mainElement.offsetHeight;
      const revealStartScrollY = mainBottom - window.innerHeight;
      
      const scrollPast = window.scrollY - revealStartScrollY;
      const revealAmount = Math.max(0, Math.min(scrollPast, FOOTER_HEIGHT));

      // 动态调整底部边距 - 随着footer揭示程度减少边距
      const remainingMargin = Math.max(0, FOOTER_HEIGHT - revealAmount);
      mainElement.style.marginBottom = `${remainingMargin}px`;

      // 更新main的transform实现页脚揭示效果
      requestAnimationFrame(() => {
        mainElement.style.transform = `translateY(-${revealAmount}px)`;
      });

      // 页脚完全展开时的处理
      if (revealAmount >= FOOTER_HEIGHT) {
        // 记录最大滚动位置并锁定
        if (!isLocked.current) {
          maxScrollPosition.current = window.scrollY;
          isLocked.current = true;
        }
        
        // 如果滚动超过最大位置，强制回到最大位置
        if (window.scrollY > maxScrollPosition.current) {
          window.scrollTo({
            top: maxScrollPosition.current,
            behavior: 'instant'
          });
        }
      } else {
        // 页脚未完全展开时，重置锁定状态
        isLocked.current = false;
        maxScrollPosition.current = 0;
      }
    };

    const handleWheel = (event: WheelEvent) => {
      if (isLocked.current && event.deltaY > 0) {
        // 锁定状态下阻止向下滚动
        event.preventDefault();
        event.stopPropagation();
      }
      // 向上滚动时允许，会自动解锁
    };

    // 添加事件监听
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('wheel', handleWheel, { passive: false });

    // 清理函数
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel);
      
      const mainElement = document.querySelector('main');
      if (mainElement) {
        mainElement.style.transform = 'translateY(0px)';
        mainElement.style.marginBottom = '320px';
      }
      
      isLocked.current = false;
    };
  }, []);

  // 这个组件不渲染任何UI，只是控制滚动行为
  return null;
}
