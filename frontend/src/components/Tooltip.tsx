import React, { ReactNode, useState, useRef, useEffect } from 'react';

interface TooltipProps {
  text: string;
  children: ReactNode;
}

const Tooltip = ({ text, children }: TooltipProps) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ top: 0, left: 0 });

  const show = (e) => {
    const rect = ref.current.getBoundingClientRect();
    setCoords({ top: rect.top - 30, left: rect.left + rect.width / 2 });
    setVisible(true);
  };
  const hide = () => setVisible(false);

  return (
    <div className="relative inline-block" ref={ref} onMouseEnter={show} onMouseLeave={hide}>
      {children}
      {visible && (
        <div
          style={{ top: coords.top, left: coords.left }}
          className="fixed px-2 py-1 bg-neutral-700 text-white text-sm rounded -translate-x-1/2"
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
