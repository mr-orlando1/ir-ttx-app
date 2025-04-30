import React from 'react';

function ReportBuilder() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-800">📄 Report Builder</h3>
      <textarea
        className="w-full p-3 border border-gray-300 rounded-md"
        rows="5"
        placeholder="Write your incident summary here..."
      />
      <div className="text-right">
        <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">Generate PDF</button>
      </div>
    </div>
  );
}

export default ReportBuilder;