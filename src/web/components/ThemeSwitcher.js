import React from 'react';
import { useTheme } from '../context/ThemeContext';

/**
 * Theme switcher component that allows selecting between different themes
 * @returns {JSX.Element}
 */
const ThemeSwitcher = () => {
  const { theme, setTheme, availableThemes } = useTheme();

  // Theme display names for better UI experience
  const themeNames = {
    'light': 'Light Mode',
    'dark': 'Dark Mode',
    'custom1': 'Blue Theme',
    'custom2': 'High Contrast'
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-2">
      <span className="text-sm font-medium">Theme:</span>
      <div className="flex items-center gap-1 bg-gray-100 dark:bg-dark-bg-lighter p-1 rounded-md">
        {availableThemes.map(themeOption => (
          <button
            key={themeOption}
            onClick={() => setTheme(themeOption)}
            className={`px-3 py-1.5 text-sm rounded transition-colors ${
              theme === themeOption 
                ? 'bg-primary text-black font-medium' 
                : 'hover:bg-gray-200 dark:hover:bg-dark hover:text-black'
            }`}
            aria-label={`Switch to ${themeNames[themeOption]} theme`}
          >
            {themeNames[themeOption]}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThemeSwitcher; 