
import React from 'react';
import TestHuggingFaceToken from '../components/TestHuggingFaceToken';

function Settings() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">⚙️ Settings & Configuration</h1>
      <div className="p-4 border comic-panel mb-6">
        <p className="text-xl">🧠 <strong>Hugging Face Integration</strong></p>
        <span className="inline-block mt-2 px-3 py-1 bg-white text-black border-2 border-blue-500 rounded comic-shadow">
          🧠 Connected to Hugging Face (phi-2)
        </span>
        <TestHuggingFaceToken />
      </div>
    </div>
  );
}

export default Settings;
