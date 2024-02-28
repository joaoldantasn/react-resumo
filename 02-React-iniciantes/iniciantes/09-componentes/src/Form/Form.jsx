import React from 'react';
import Button from './Button';
import Input from './Input';

const Form = () => {
  return (
    <form>
      <p>
        <Input id="email" label="Email" />
      </p>
      <p>
        <Input id="password" label="Password" />
      </p>
      <Button />
    </form>
  );
};

export default Form;
