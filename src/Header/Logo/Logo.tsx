import React from 'react';
import { EIcons, Icon } from '../../icons';
import styles from './logo.scss';
import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <div className={styles.container}>
      <Link to="/" className={styles.logoContainer}>
        <Icon name={EIcons.logo} size={40} />
        <h1 className={styles.logoHeader}>pomodoro_box</h1>
      </Link>
    </div>
  );
};
