import React from 'react';

const Input = ({ label, id, value, onChange, ...props }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        {...props}
      />
    </>
  );
};

export default Input;
