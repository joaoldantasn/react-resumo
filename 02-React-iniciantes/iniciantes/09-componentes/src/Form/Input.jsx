import React from 'react';

const Input = ({ label, id }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" />
    </div>
  );
};

export default Input;
