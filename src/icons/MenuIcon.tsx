import React from 'react';

interface IMenuIconProps {
  width?: number;
  height?: number;
}

export const MenuIcon = ({ width = 26, height = 6 }: IMenuIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 26 6"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="3" cy="3" r="3" />
      <circle cx="13" cy="3" r="3" />
      <circle cx="23" cy="3" r="3" />
    </svg>
  );
};
