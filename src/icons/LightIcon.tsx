import React from 'react';

interface ILightIconProps {
  width?: number;
  height?: number;
}

export const LightIcon = ({ width = 24, height = 24 }: ILightIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 256 256"
    >
      <g
        style={{ stroke: 'none', opacity: 1 }}
        transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
      >
        <circle
          cx="45.001000000000005"
          cy="45.001000000000005"
          r="23.111"
          style={{
            stroke: 'none',
            strokeWidth: 1,
            fillRule: 'nonzero',
            opacity: 1,
          }}
          transform="  matrix(1 0 0 1 0 0) "
        />
        <path
          d="M 45 14.105 c -0.552 0 -1 -0.448 -1 -1 V 1 c 0 -0.552 0.448 -1 1 -1 s 1 0.448 1 1 v 12.105 C 46 13.658 45.552 14.105 45 14.105 z"
          style={{
            stroke: 'none',
            strokeWidth: 1,
            fillRule: 'nonzero',
            opacity: 1,
          }}
          transform=" matrix(1 0 0 1 0 0) "
          strokeLinecap="round"
        />
        <path
          d="M 45 90 c -0.552 0 -1 -0.447 -1 -1 V 76.895 c 0 -0.553 0.448 -1 1 -1 s 1 0.447 1 1 V 89 C 46 89.553 45.552 90 45 90 z"
          style={{
            stroke: 'none',
            strokeWidth: 1,
            fillRule: 'nonzero',
            opacity: 1,
          }}
          transform=" matrix(1 0 0 1 0 0) "
          strokeLinecap="round"
        />
        <path
          d="M 13.105 46 H 1 c -0.552 0 -1 -0.448 -1 -1 s 0.448 -1 1 -1 h 12.105 c 0.552 0 1 0.448 1 1 S 13.658 46 13.105 46 z"
          style={{
            stroke: 'none',
            strokeWidth: 1,
            fillRule: 'nonzero',
            opacity: 1,
          }}
          transform=" matrix(1 0 0 1 0 0) "
          strokeLinecap="round"
        />
        <path
          d="M 89 46 H 76.895 c -0.553 0 -1 -0.448 -1 -1 s 0.447 -1 1 -1 H 89 c 0.553 0 1 0.448 1 1 S 89.553 46 89 46 z"
          style={{
            stroke: 'none',
            strokeWidth: 1,
            fillRule: 'nonzero',
            opacity: 1,
          }}
          transform=" matrix(1 0 0 1 0 0) "
          strokeLinecap="round"
        />
        <path
          d="M 67.553 23.447 c -0.256 0 -0.512 -0.098 -0.707 -0.293 c -0.391 -0.391 -0.391 -1.023 0 -1.414 l 8.56 -8.56 c 0.391 -0.391 1.023 -0.391 1.414 0 s 0.391 1.023 0 1.414 l -8.56 8.56 C 68.064 23.35 67.809 23.447 67.553 23.447 z"
          style={{
            stroke: 'none',
            strokeWidth: 1,
            fillRule: 'nonzero',
            opacity: 1,
          }}
          transform=" matrix(1 0 0 1 0 0) "
          strokeLinecap="round"
        />
        <path
          d="M 13.887 77.112 c -0.256 0 -0.512 -0.098 -0.707 -0.293 c -0.391 -0.391 -0.391 -1.023 0 -1.414 l 8.56 -8.56 c 0.391 -0.391 1.023 -0.391 1.414 0 s 0.391 1.023 0 1.414 l -8.56 8.56 C 14.399 77.015 14.143 77.112 13.887 77.112 z"
          style={{
            stroke: 'none',
            strokeWidth: 1,
            fillRule: 'nonzero',
            opacity: 1,
          }}
          transform=" matrix(1 0 0 1 0 0) "
          strokeLinecap="round"
        />
        <path
          d="M 22.447 23.447 c -0.256 0 -0.512 -0.098 -0.707 -0.293 l -8.56 -8.56 c -0.391 -0.391 -0.391 -1.023 0 -1.414 s 1.023 -0.391 1.414 0 l 8.56 8.56 c 0.391 0.391 0.391 1.023 0 1.414 C 22.959 23.35 22.703 23.447 22.447 23.447 z"
          style={{
            stroke: 'none',
            strokeWidth: 1,
            fillRule: 'nonzero',
            opacity: 1,
          }}
          transform=" matrix(1 0 0 1 0 0) "
          strokeLinecap="round"
        />
        <path
          d="M 76.112 77.112 c -0.256 0 -0.512 -0.098 -0.707 -0.293 l -8.56 -8.56 c -0.391 -0.391 -0.391 -1.023 0 -1.414 s 1.023 -0.391 1.414 0 l 8.56 8.56 c 0.391 0.391 0.391 1.023 0 1.414 C 76.624 77.015 76.368 77.112 76.112 77.112 z"
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
