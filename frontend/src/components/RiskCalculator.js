import React from 'react';

function RiskCalculator() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-800">Risk Calculator</h3>
      <p className="text-gray-600 text-sm">Estimate risk scores based on impact and likelihood.</p>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Likelihood</label>
          <select className="w-full p-2 border rounded-md">
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Impact</label>
          <select className="w-full p-2 border rounded-md">
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>
      </div>
      <div className="text-center mt-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Calculate</button>
      </div>
    </div>
  );
}

export default RiskCalculator;