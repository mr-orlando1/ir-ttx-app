
import React from 'react';

function Toast({ message }) {
  if (!message) return null;

  return (
    <div className="fixed top-4 right-4 bg-green-100 text-green-800 p-3 rounded shadow-md animate-bounce z-50">
      {message}
    </div>
  );
}

export default Toast;
