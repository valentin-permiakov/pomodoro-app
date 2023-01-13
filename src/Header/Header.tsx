import React from 'react';
import styles from './header.scss';
import { Logo } from './Logo/Logo';
import { ThemeSwitch } from './ThemeSwitch';
import { EIcons, Icon } from '../icons/Icon';
import { Link } from 'react-router-dom';
export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <div className={styles.containerRight}>
          <ThemeSwitch />
          <Link to="pomodoro-app/statistscs" className={styles.statsLink}>
            <Icon name={EIcons.statsIcon} size={24} />
            Статистика
          </Link>
        </div>
      </div>
    </header>
  );
};
