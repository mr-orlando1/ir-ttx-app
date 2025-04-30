import React from 'react';
import RiskCalculator from '../components/RiskCalculator';
import ComicChart from '../components/ComicChart';
import LiveUpdates from '../components/LiveUpdates';
import '../styles/comic.css';

function Dashboard() {
  return (
    <div className="comic-background min-h-screen p-8">
      <h1 className="comic-title text-5xl text-center mb-8">🦸 IR TTX Comic Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="comic-panel">
          <RiskCalculator />
        </div>
        <div className="comic-panel">
          <ComicChart />
        </div>
        <div className="comic-panel md:col-span-2">
          <LiveUpdates />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
