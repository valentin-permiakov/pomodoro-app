import React from 'react';

interface IDarkIconProps {
  width?: number;
  height?: number;
}

export const DarkIcon = ({ width = 24, height = 24 }: IDarkIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 256 256"
    >
      <defs></defs>
      <g
        style={{
          stroke: 'none',
          fillRule: 'nonzero',
          opacity: 1,
        }}
        transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
      >
        <path
          d="M 69.491 71.08 c -18.67 3.414 -36.573 -8.953 -39.988 -27.623 S 38.456 6.884 57.126 3.469 c 1.777 -0.325 3.541 -0.463 5.292 -0.511 C 54.979 0.112 46.69 -0.796 38.282 0.742 C 13.839 5.212 -2.353 28.651 2.117 53.094 s 27.909 40.634 52.352 36.164 c 16.252 -2.972 28.847 -14.334 34.155 -28.798 C 83.739 65.803 77.161 69.677 69.491 71.08 z"
          style={{
            stroke: 'none',
            strokeWidth: 1,
            fillRule: 'nonzero',
            opacity: 1,
          }}
          transform=" matrix(1 0 0 1 0 0) "
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};
