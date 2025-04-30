import React, { useState } from 'react';

function ScenarioBuilder() {
  const [scenario, setScenario] = useState('');
  const [injects, setInjects] = useState([]);

  const addInject = () => {
    if (scenario.trim() !== '') {
      setInjects([...injects, scenario]);
      setScenario('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">🧪 Build a Scenario</h2>
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md space-y-4">
        <textarea
          value={scenario}
          onChange={(e) => setScenario(e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="5"
          placeholder="Describe your scenario inject..."
        />
        <div className="flex justify-end">
          <button
            onClick={addInject}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            ➕ Add Inject
          </button>
        </div>
        <div className="mt-6 space-y-2">
          {injects.map((inj, index) => (
            <div
              key={index}
              className="bg-blue-50 border border-blue-200 text-blue-800 p-4 rounded-md shadow-sm"
            >
              {inj}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ScenarioBuilder;