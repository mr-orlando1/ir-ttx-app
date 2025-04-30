
import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="comic-navbar">
      <h1 className="logo-title">🦸 IR TTX</h1>
      <ul>
        <li><NavLink to="/" end>🏠 Dashboard</NavLink></li>
        <li><NavLink to="/scenario-builder">🧪 Scenario Builder</NavLink></li>
        <li><NavLink to="/exercises">🎯 Exercises</NavLink></li>
        <li><NavLink to="/analytics">📊 Analytics</NavLink></li>
        <li><NavLink to="/resources">📚 Resources</NavLink></li>
        <li><NavLink to="/settings">⚙️ Settings</NavLink></li>
        <li><NavLink to="/admin">🛡️ Admin</NavLink></li>
      </ul>
    </nav>
  );
};

export default NavBar;
