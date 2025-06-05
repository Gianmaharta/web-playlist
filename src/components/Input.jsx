import React from 'react';

const Input = ({ 
  type = 'text', 
  name,
  placeholder, 
  value, 
  onChange,
  className = '' 
}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`
        w-full 
        px-3 py-2 
        border 
        rounded 
        focus:outline-blue-500 
        ${className}
      `}
    />
  );
};

export default Input;
