'use client';

import React, { FC } from 'react';

export type TButton = {
  label: string;
}


const Button: FC<TButton> = ({ label }) => {
  const handleClick = () => {
    alert(label);
  };

  return <button onClick={handleClick}>{label}</button>;
};

export default Button;
