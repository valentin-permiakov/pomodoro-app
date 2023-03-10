import React from 'react';
import styles from './stat-header.scss';
import { StatRange } from './StatRange';

export const StatHeader = () => {
  return (
    <div className={styles.container}>
      <h2>Your activity</h2>
      <StatRange />
    </div>
  );
};
