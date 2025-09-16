/**
 * Tag 组件 - 标签展示组件
 * 
 * 职责：
 * - 展示技术栈标签
 * - 提供不同的变体样式
 * - 支持自定义样式
 */

import { ReactNode } from 'react';

interface TagProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'destructive';
  className?: string;
}

function Tag({ 
  children, 
  variant = 'secondary', 
  className = '' 
}: TagProps) {
  const baseClasses = 'inline-flex items-center px-2 py-1 rounded-md text-xs font-medium';
  
  const variantClasses = {
    primary: 'bg-blue-100 text-blue-800',
    secondary: 'bg-gray-100 text-gray-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    destructive: 'bg-red-100 text-red-800',
  };

  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
}

export default Tag;
