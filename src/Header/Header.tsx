import React from 'react';
import styles from './header.scss';
import { Logo } from './Logo/Logo';
import { ThemeSwitch } from './ThemeSwitch';
export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <ThemeSwitch />
      </div>
    </header>
  );
};
