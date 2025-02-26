import React, { createContext, useState, useEffect } from 'react';

export const Theme = createContext(null);

const ThemeContext = ({ children }) => {
  const defaultTheme = localStorage.getItem('theme') || 'dark';
  const [theme, setTheme] = useState(defaultTheme);

  // Save theme to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <Theme.Provider value={{ theme, setTheme }}>
      <div
        className={
          theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
        }
      >
        {children}
      </div>
    </Theme.Provider>
  );
};

export default ThemeContext;
