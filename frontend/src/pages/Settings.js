import React from 'react';

function Settings() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">⚙️ Settings</h2>
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md space-y-4">
        <div>
          <label className="block font-medium text-sm mb-1 text-gray-700">Organization Name</label>
          <input className="w-full border border-gray-300 rounded-md p-2" placeholder="e.g. Agio+" />
        </div>
        <div>
          <label className="block font-medium text-sm mb-1 text-gray-700">Notification Email</label>
          <input className="w-full border border-gray-300 rounded-md p-2" placeholder="security@example.com" />
        </div>
        <button className="bg-blue-600 text-white px-5 py-2 mt-4 rounded-md hover:bg-blue-700 transition">Save Changes</button>
      </div>
    </div>
  );
}

export default Settings;