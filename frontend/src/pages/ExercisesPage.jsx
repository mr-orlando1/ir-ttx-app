import React from 'react';

function ExercisesPage() {
  const exercises = [
    { title: "Phishing Incident", status: "Completed" },
    { title: "Data Exfiltration", status: "In Progress" },
    { title: "Ransomware Simulation", status: "Planned" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">🎯 Exercises</h2>
      <div className="max-w-4xl mx-auto space-y-4">
        {exercises.map((exercise, idx) => (
          <div key={idx} className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-gray-700">{exercise.title}</h3>
              <span className={`px-3 py-1 text-sm rounded-full ${
                exercise.status === 'Completed' ? 'bg-green-100 text-green-700' :
                exercise.status === 'In Progress' ? 'bg-yellow-100 text-yellow-700' :
                'bg-blue-100 text-blue-700'
              }`}>
                {exercise.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExercisesPage;