import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';


// Apply persisted theme on first load
const persistedTheme = JSON.parse(localStorage.getItem('ir-ttx-store'))?.state?.theme;
if (persistedTheme === 'dark') {
  document.documentElement.classList.add('dark');
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);