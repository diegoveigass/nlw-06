import { createContext, ReactNode, useEffect, useState } from 'react';
import { lightTheme } from '../styles/themes/lightTheme';
import { darkTheme } from '../styles/themes/darkTheme';
import { DefaultTheme } from 'styled-components';

type ThemeContextProps = {
  theme: DefaultTheme;
  toggleTheme: () => void;
};

export const ThemeContext = createContext({} as ThemeContextProps);

type ThemeContextProviderProps = {
  children: ReactNode;
};

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<DefaultTheme>(() => {
    const storageTheme = localStorage.getItem('@letmeask/theme');

    if (storageTheme) {
      return JSON.parse(storageTheme);
    } else {
      return lightTheme;
    }
  });

  useEffect(() => {
    localStorage.setItem('@letmeask/theme', JSON.stringify(theme));
  }, [theme]);

  function toggleTheme() {
    setTheme(theme.title === 'light' ? darkTheme : lightTheme);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
