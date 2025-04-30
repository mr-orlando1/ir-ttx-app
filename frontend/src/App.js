import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";

import Dashboard from "./pages/Dashboard";
import ScenarioLibrary from "./pages/ScenarioLibrary";
import ExerciseBuilder from "./pages/ExerciseBuilder";
import ExercisesPage from "./pages/ExercisesPage";
import ScenariosPage from "./pages/ScenariosPage";
import Settings from "./pages/Settings";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/scenario-library" element={<ScenarioLibrary />} />
          <Route path="/exercise-builder" element={<ExerciseBuilder />} />
          <Route path="/exercises" element={<ExercisesPage />} />
          <Route path="/scenarios" element={<ScenariosPage />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;