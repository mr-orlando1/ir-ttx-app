import { useEffect } from 'react';
import { useAppStore } from '../store/useAppStore';
import React from 'react';

const ToggleTheme = () => {
  const theme = useAppStore((s) => s.theme);
  const setTheme = useAppStore((s) => s.setTheme);

  // ensure html tag carries class
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  return (
    <button
      aria-label="Toggle theme"
      className="p-2 rounded-xl bg-gray-200 dark:bg-gray-700 hover:shadow-xl transition"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
};

export default ToggleTheme;
