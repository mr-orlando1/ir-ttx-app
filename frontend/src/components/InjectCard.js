import React from 'react';

function InjectCard({ title, description, severity }) {
  const severityColors = {
    Low: 'bg-green-100 text-green-700 border-green-300',
    Medium: 'bg-yellow-100 text-yellow-700 border-yellow-300',
    High: 'bg-red-100 text-red-700 border-red-300',
    Critical: 'bg-purple-100 text-purple-700 border-purple-300'
  };

  return (
    <div className={`p-4 border rounded-xl shadow-sm ${severityColors[severity] || 'bg-gray-100 text-gray-800 border-gray-300'}`}>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm">{description}</p>
      <span className="inline-block mt-3 text-xs font-medium uppercase">{severity}</span>
    </div>
  );
}

export default InjectCard;