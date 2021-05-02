import React from 'react';
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
  
  //сюда я передаю значение через value в provider
  export const ThemeContext = React.createContext(
    themes.dark // значение по умолчанию
  );