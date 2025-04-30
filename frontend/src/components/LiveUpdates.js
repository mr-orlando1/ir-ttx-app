import React from 'react';

function LiveUpdates() {
  const updates = [
    "Scenario Inject A deployed",
    "Participant X responded",
    "Action logged at 12:42 PM"
  ];

  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold text-gray-800">📡 Live Updates</h3>
      <ul className="list-disc pl-6 text-gray-600 text-sm">
        {updates.map((update, idx) => (
          <li key={idx}>{update}</li>
        ))}
      </ul>
    </div>
  );
}

export default LiveUpdates;