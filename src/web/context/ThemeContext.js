"use client";

import React, { createContext, useState, useEffect, useContext, useCallback } from 'react';

/**
 * @typedef {'light' | 'dark' | 'custom1' | 'custom2'} ThemeType
 */

/**
 * @typedef {Object} ThemeContextType
 * @property {ThemeType} theme - Current theme
 * @property {function(ThemeType): void} setTheme - Function to set theme
 * @property {function(): void} toggleTheme - Function to toggle through themes
 * @property {ThemeType[]} availableThemes - List of available themes
 */

/** @type {React.Context<ThemeContextType|undefined>} */
const ThemeContext = createContext(undefined);

/**
 * Theme provider component
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {ThemeType} [props.defaultTheme='dark']
 * @param {string} [props.storageKey='ui-theme']
 */
const ThemeProvider = ({
  children,
  defaultTheme = 'dark',
  storageKey = 'ui-theme',
}) => {
  // Define available themes
  /** @type {ThemeType[]} */
  const availableThemes = ['dark', 'custom1'];

  const [theme, setThemeState] = useState(() => {
    if (typeof window === 'undefined') {
      return defaultTheme; // Default theme for SSR
    }
    try {
      const storedTheme = window.localStorage.getItem(storageKey);
      return availableThemes.includes(storedTheme) ? storedTheme : defaultTheme;
    } catch (error) {
      console.error("Error reading localStorage key \"", storageKey, "\":", error);
      return defaultTheme;
    }
  });

  useEffect(() => {
    const root = window.document.documentElement; // Use <html> tag
    // Remove all possible theme classes
    availableThemes.forEach(t => root.classList.remove(t));

    if (theme) {
      root.classList.add(theme); // Add current theme class (used by Tailwind config if needed)
      root.setAttribute('data-theme', theme); // Add data-theme attribute (used by globals.css)
      try {
        window.localStorage.setItem(storageKey, theme);
      } catch (error) {
        console.error("Error setting localStorage key \"", storageKey, "\":", error);
      }
    }
  }, [theme, storageKey, availableThemes]);

  const setTheme = useCallback((newTheme) => {
    if (availableThemes.includes(newTheme)) {
      setThemeState(newTheme);
    } else {
      console.warn(`Theme "${newTheme}" is not available`);
    }
  }, [availableThemes]);

  const toggleTheme = useCallback(() => {
    setThemeState((prevTheme) => {
      // Find current theme index
      const currentIndex = availableThemes.indexOf(prevTheme);
      // Get next theme (or go back to first)
      const nextIndex = (currentIndex + 1) % availableThemes.length;
      return availableThemes[nextIndex];
    });
  }, [availableThemes]);

  /** @type {ThemeContextType} */
  const value = {
    theme,
    setTheme,
    toggleTheme,
    availableThemes,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

/**
 * Custom hook to use theme context
 * @returns {ThemeContextType}
 */
const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export { ThemeProvider, useTheme }; 