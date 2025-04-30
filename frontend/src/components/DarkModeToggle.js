
import React, { useEffect, useState } from 'react';
import './DarkModeToggle.css';

function DarkModeToggle() {
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
    root.classList.add('theme-transition');
    setTimeout(() => root.classList.remove('theme-transition'), 500);
  }, [dark]);

  return (
    <button className="comic-button flip-toggle" onClick={() => setDark(!dark)}>
      {dark ? "🌞 Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}

export default DarkModeToggle;
