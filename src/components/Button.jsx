import React from 'react';

// Komponen Fungsional Modern
const Button = ({ 
  children, 
  onClick, 
  type = 'button', 
  className = '' 
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        bg-blue-500 
        text-white 
        px-4 py-2 
        rounded 
        hover:bg-blue-600 
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
