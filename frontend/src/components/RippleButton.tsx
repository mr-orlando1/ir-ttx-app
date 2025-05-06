import React from 'react';

const RippleButton = ({ children, className = '', ...rest }) => {
  const handleClick = e => {
    const button = e.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${e.clientY - button.offsetTop - radius}px`;
    circle.classList.add('ripple');
    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) ripple.remove();
    button.appendChild(circle);
    if (rest.onClick) rest.onClick(e);
  };

  return (
    <button
      {...rest}
      onClick={handleClick}
      className={
        'relative overflow-hidden bg-blue-600 text-white px-4 py-2 rounded focus:outline-none ' +
        className
      }
    >
      {children}
    </button>
  );
};

export default RippleButton;
