import React, { useState } from 'react';

function MobileNavToggle({ onToggle }) {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
    onToggle(!open);
  };

  return (
    <button
      onClick={toggle}
      className="md:hidden text-gray-600 focus:outline-none"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {open ? (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        )}
      </svg>
    </button>
  );
}

export default MobileNavToggle;