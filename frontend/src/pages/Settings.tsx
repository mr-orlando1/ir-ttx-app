// frontend/src/pages/Settings.tsx
import React from 'react';

export default function Settings() {
  return (
    <div className="max-w-xl space-y-6">
      <h2 className="text-2xl font-semibold">User Settings</h2>
      <label className="flex items-center gap-3">
        <span className="w-40">Display name</span>
        <input className="flex-1 border rounded px-3 py-2" defaultValue="Analyst" />
      </label>
      <label className="flex items-center gap-3">
        <span className="w-40">Email</span>
        <input className="flex-1 border rounded px-3 py-2" defaultValue="analyst@example.com" />
      </label>
      <button className="bg-indigo-600 text-white px-4 py-2 rounded">Save</button>
    </div>
  );
}
