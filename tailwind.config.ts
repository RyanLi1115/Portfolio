import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // 1. 字体系统 (Typography System)
      // 使用 CSS 变量与 next/font 集成
      fontFamily: {
        sans: 'var(--font-inter)',
        display: 'var(--font-vt323)',
      },
      fontSize: {
        'caption': ['12px', { lineHeight: '1.5' }],
        'helper': ['14px', { lineHeight: '1.6' }],
        'body': ['16px', { lineHeight: '1.7' }],
        'sub': ['20px', { lineHeight: '1.4' }],
        'subsection': ['24px', { lineHeight: '1.4' }],
        'section': ['32px', { lineHeight: '1.3' }],
        'main': ['40px', { lineHeight: '1.2' }],
        'main-lg': ['48px', { lineHeight: '1.2' }],
      },
      
      // 2. 圆角系统 (Radius System)
      borderRadius: {
        'xs': '4px',
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
        'full': '9999px',
      },
      
      // 3. 间距系统 (Spacing System)
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
      },
      
      // 4. 色彩系统 (Color System)
      colors: {
        // 自定义颜色
        background: '#FFFFFF',
        'text-primary': '#111111',
        'text-secondary': '#111111',
        'text-disabled': '#999999',
        'text-hover': '#999999',
        
        interactive: '#999999',
        destructive: '#EE0000',
        success: '#007A2E',
        warning: '#F5A623',
        personal: '#0070F3',
      },
      // 将边框颜色统一到 borderColor 中
      borderColor: {
        DEFAULT: '#EAEAEA', // 默认边框颜色
        subtle: '#E5E5E5',
        default: '#9CA3AF',
        focus: '#0070F3',
        error: '#EE0000',
        disabled: '#F3F4F6',
      },
      
      // 5. 阴影系统 (Elevation System)
      boxShadow: {
        'elevation-1': '0 1px 2px rgba(0,0,0,0.05), 0 1px 3px rgba(0,0,0,0.1)',
        'elevation-2': '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)',
        'elevation-3': '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)',
        'elevation-4': '0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)',
      },
      
      // 6. 动效系统 (Motion System)
      transitionDuration: {
        'fast': '150ms',
        'standard': '250ms',
        'slow': '400ms',
      },
      transitionTimingFunction: {
        'out': 'ease-out',
        'in': 'ease-in',
        'in-out': 'ease-in-out',
      },
      
    
    },
  },
  plugins: [],
}

export default config
