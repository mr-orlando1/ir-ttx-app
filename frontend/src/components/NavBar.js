import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between shadow-sm">
      <h1 className="text-xl font-bold text-glacier">IR TTX App</h1>
      <ul className="flex gap-6 text-sm text-gray-600 font-medium">
        <li><NavLink to="/dashboard" className={({ isActive }) => isActive ? "text-blue-600" : ""}>Dashboard</NavLink></li>
        <li><NavLink to="/scenario-library" className={({ isActive }) => isActive ? "text-blue-600" : ""}>Scenario Library</NavLink></li>
        <li><NavLink to="/exercise-builder" className={({ isActive }) => isActive ? "text-blue-600" : ""}>Exercise Builder</NavLink></li>
        <li><NavLink to="/exercises" className={({ isActive }) => isActive ? "text-blue-600" : ""}>Exercises</NavLink></li>
        <li><NavLink to="/scenarios" className={({ isActive }) => isActive ? "text-blue-600" : ""}>Scenarios</NavLink></li>
        <li><NavLink to="/settings" className={({ isActive }) => isActive ? "text-blue-600" : ""}>Settings</NavLink></li>
      </ul>
    </nav>
  );
};

export default NavBar;