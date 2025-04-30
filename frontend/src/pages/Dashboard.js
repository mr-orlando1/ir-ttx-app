import React from 'react';
import RiskCalculator from '../components/RiskCalculator';
import ComicChart from '../components/ComicChart';
import LiveUpdates from '../components/LiveUpdates';

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">🦸 IR TTX Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white shadow-md rounded-2xl p-6">
          <RiskCalculator />
        </div>
        <div className="bg-white shadow-md rounded-2xl p-6">
          <ComicChart />
        </div>
        <div className="bg-white shadow-md rounded-2xl p-6 md:col-span-2">
          <LiveUpdates />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;