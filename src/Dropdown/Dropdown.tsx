/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styles from './dropdown.scss';

interface IDropdownProps {
  children: React.ReactNode;
  onClose: () => void;
  top: number;
  left: number;
}

export function Dropdown({ children, onClose, top, left }: IDropdownProps) {
  const node = document.getElementById('dropdown-root');
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (event.target instanceof Node) {
        onClose();
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  if (!node) return null;

  return ReactDOM.createPortal(
    <div
      className={styles.container}
      style={{
        top: top,
        left: left,
      }}
      ref={ref}
    >
      {children}
    </div>,
    node
  );
}
