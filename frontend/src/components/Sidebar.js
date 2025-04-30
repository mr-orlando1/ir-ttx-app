
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <div style={{ width: '200px', backgroundColor: '#f0f0f0', padding: '20px', height: '100vh' }}>
    <h3>IR TTX</h3>
    <ul style={{ listStyle: 'none', padding: 0 }}>
      <li><Link to="/">Dashboard</Link></li>
      <li><Link to="/scenario-builder">Scenario Builder</Link></li>
      <li><Link to="/execution">Execution</Link></li>
      <li><Link to="/new-scenario">New Scenario</Link></li>
      <li><Link to="/scenarios">View Scenarios</Link></li>
      <li><Link to="/compliance">Compliance</Link></li>
    </ul>
  </div>
);

export default Sidebar;
