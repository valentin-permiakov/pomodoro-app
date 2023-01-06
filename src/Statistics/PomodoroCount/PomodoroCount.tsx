import React from 'react';
import { EIcons, Icon } from '../../icons';
import styles from './pomodoro-count.scss';

export const PomodoroCount = () => {
  return (
    <aside className={styles.countContainer}>
      <p className={styles.imgContainer}>
        <Icon name={EIcons.logo} size={81} /> x2
      </p>
      <p className={styles.countDescription}>2 помидора</p>
    </aside>
  );
};
