import React from 'react';

function ScenariosPage() {
  const scenarios = [
    "Credential stuffing attack on finance portal",
    "Insider threat from contractor account",
    "Phishing attack that bypassed MFA"
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">📚 Scenarios</h2>
      <div className="max-w-3xl mx-auto space-y-3">
        {scenarios.map((scenario, idx) => (
          <div key={idx} className="p-5 bg-white border rounded-xl shadow-sm hover:shadow-md transition">
            <p className="text-gray-700">{scenario}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ScenariosPage;