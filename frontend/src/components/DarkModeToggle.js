import React, { useState } from 'react';

function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm text-gray-700">{dark ? 'Dark' : 'Light'} Mode</span>
      <button
        onClick={() => setDark(!dark)}
        className={`w-10 h-6 flex items-center bg-gray-300 rounded-full p-1 duration-300 ease-in-out ${dark ? 'justify-end' : 'justify-start'}`}
      >
        <div className="bg-white w-4 h-4 rounded-full shadow-md"></div>
      </button>
    </div>
  );
}

export default DarkModeToggle;