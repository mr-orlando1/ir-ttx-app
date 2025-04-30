import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ScenarioBuilder from './pages/ScenarioBuilder';
import ExerciseRunner from './pages/ExerciseRunner';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/scenario-builder" element={<ScenarioBuilder />} />
        <Route path="/exercise/:id" element={<ExerciseRunner />} />
      </Routes>
    </Router>
  );
}

export default App;