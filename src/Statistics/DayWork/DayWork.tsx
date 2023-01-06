import React from 'react';
import styles from './day-work.scss';

export const DayWork = () => {
  return (
    <aside className={styles.workContainer}>
      <h3 className={styles.workHeader}>Понедельник</h3>
      <p className={styles.workDescription}>
        Вы работали над задачами в течение{' '}
        <span className={styles.workTime}>51 минуты</span>
      </p>
    </aside>
  );
};
