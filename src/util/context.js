import React from 'react'
// 抛出一个需要被共享的theme主题颜色
export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};


// React.createContext() 创建一个上下文对象
export const ThemeContext = React.createContext(
  themes.dark // 默认值
);
