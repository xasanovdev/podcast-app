import React from 'react';
import { buttonPropsType } from '../../types/buttonType';

export const Button: React.FC<buttonPropsType> = ({ text, classes }) => {
  return (
    <>
      <button
        className={`${classes} text-[14px] uppercase py-[12px] whitespace-nowrap px-[24px] active:opacity-75 font-bold border border-black duration-100 rounded-lg`}
      >
        {text}
      </button>
    </>
  );
};
