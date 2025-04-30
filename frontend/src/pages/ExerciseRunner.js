import React from 'react';

function ExerciseRunner() {
  const phases = [
    { name: "Preparation", status: "complete" },
    { name: "Execution", status: "in-progress" },
    { name: "Debrief", status: "pending" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">🚀 Exercise Execution</h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {phases.map((phase, idx) => (
          <div key={idx} className="p-6 bg-white rounded-xl shadow-md border-l-4
            ${
              phase.status === 'complete'
                ? 'border-green-500'
                : phase.status === 'in-progress'
                ? 'border-yellow-500'
                : 'border-gray-300'
            }">
            <h3 className="text-xl font-semibold text-gray-700">{phase.name}</h3>
            <p className="text-sm text-gray-500 capitalize">{phase.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExerciseRunner;