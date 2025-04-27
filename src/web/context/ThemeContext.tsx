"use client";

import React, { createContext, useState, useEffect, useContext, useCallback } from 'react';

const ThemeContext = createContext(undefined);

const ThemeProvider = ({
  children,
  defaultTheme = 'dark',
  storageKey = 'ui-theme',
}) => {
  const [theme, setThemeState] = useState(() => {
    if (typeof window === 'undefined') {
      return defaultTheme; // Default theme for SSR
    }
    try {
      const storedTheme = window.localStorage.getItem(storageKey);
      return storedTheme ?? defaultTheme;
    } catch (error) {
      console.error("Error reading localStorage key \"", storageKey, "\":", error);
      return defaultTheme;
    }
  });

  useEffect(() => {
    const root = window.document.documentElement; // Use <html> tag
    root.classList.remove('light', 'dark'); // Remove previous theme classes

    if (theme) {
      root.classList.add(theme); // Add current theme class (used by Tailwind config if needed)
      root.setAttribute('data-theme', theme); // Add data-theme attribute (used by globals.css)
      try {
        window.localStorage.setItem(storageKey, theme);
      } catch (error) {
        console.error("Error setting localStorage key \"", storageKey, "\":", error);
      }
    }
  }, [theme, storageKey]);

  const setTheme = useCallback((newTheme) => {
    setThemeState(newTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }, []);

  const value = {
    theme,
    setTheme,
    toggleTheme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export { ThemeProvider, useTheme }; 