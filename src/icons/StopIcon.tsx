import React from 'react';

interface IStopIconProps {
  width: number;
  height: number;
  color?: string;
}

export const StopIcon = ({ width, height, color }: IStopIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 115 115"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M57.3158 111.632C87.3136 111.632 111.632 87.3136 111.632 57.3158C111.632 27.318 87.3136 3 57.3158 3C27.318 3 3 27.318 3 57.3158C3 87.3136 27.318 111.632 57.3158 111.632Z"
        stroke={color} //"#7FC2D7"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 20L95 94"
        stroke={color} //"#7FC2D7"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
