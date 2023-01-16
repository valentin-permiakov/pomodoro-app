import React from 'react';

interface IStatsIconProps {
  width: number;
  height: number;
}

export const StatsIcon = ({ width, height }: IStatsIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_8568_120)">
        <path d="M10 20H14V4H10V20ZM4 20H8V12H4V20ZM16 9V20H20V9H16Z" />
      </g>
      <defs>
        <clipPath id="clip0_8568_120">
          <rect width={width} height={height} />
        </clipPath>
      </defs>
    </svg>
  );
};
