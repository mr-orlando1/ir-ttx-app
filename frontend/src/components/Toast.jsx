import React from 'react';

function Toast({ message, type = 'info' }) {
  const baseStyle = "fixed bottom-5 right-5 z-50 px-4 py-3 rounded-lg shadow-lg transition-all duration-300";
  const typeStyle = {
    info: "bg-blue-100 text-blue-800 border border-blue-300",
    success: "bg-green-100 text-green-800 border border-green-300",
    warning: "bg-yellow-100 text-yellow-800 border border-yellow-300",
    error: "bg-red-100 text-red-800 border border-red-300"
  };

  return (
    <div className={`${baseStyle} ${typeStyle[type] || typeStyle.info}`}>
      {message}
    </div>
  );
}

export default Toast;