
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import PageWrapper from './PageWrapper';
import Dashboard from './Dashboard';
import ScenarioForm from './ScenarioForm';
import ScenarioList from './ScenarioList';
import ScenarioEditor from './ScenarioEditor';
import ComplianceDocs from './ComplianceDocs';

const ScenarioBuilder = () => <div style={{ flex: 1, padding: '20px' }}><h2>Scenario Builder</h2></div>;
const Execution = () => <div style={{ flex: 1, padding: '20px' }}><h2>Execution Mode</h2></div>;

function App() {
  return (
    <Router>
      <Header />
      <PageWrapper>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/scenario-builder" element={<ScenarioBuilder />} />
          <Route path="/execution" element={<Execution />} />
          <Route path="/new-scenario" element={<ScenarioForm />} />
          <Route path="/scenarios" element={<ScenarioList />} />
          <Route path="/edit-scenario/:index" element={<ScenarioEditor />} />
          <Route path="/compliance" element={<ComplianceDocs />} />
        </Routes>
      </PageWrapper>
    </Router>
  );
}

export default App;
