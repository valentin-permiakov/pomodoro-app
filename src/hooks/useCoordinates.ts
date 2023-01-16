import { useRef } from 'react';

export const useCoordinates = (offsetY: number, offsetX: number) => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const coordinates = btnRef.current?.getBoundingClientRect();
  const top = coordinates
    ? coordinates.top + coordinates.height + window.pageYOffset + offsetY
    : 0;
  const left = coordinates ? coordinates.left - coordinates.width + offsetX : 0;

  return { btnRef, top, left };
};
