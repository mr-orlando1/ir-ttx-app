
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './MobileNavToggle.css';

const MobileNavToggle = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(!open)} className="hamburger">☰</button>
      {open && (
        <div className="mobile-nav">
          <NavLink to="/">🏠 Dashboard</NavLink>
          <NavLink to="/scenario-builder">🧪 Scenario Builder</NavLink>
          <NavLink to="/exercises">🎯 Exercises</NavLink>
          <NavLink to="/analytics">📊 Analytics</NavLink>
          <NavLink to="/resources">📚 Resources</NavLink>
          <NavLink to="/settings">⚙️ Settings</NavLink>
          <NavLink to="/admin">🛡️ Admin</NavLink>
        </div>
      )}
    </>
  );
};

export default MobileNavToggle;
