import React from 'react';
import styles from './day-work.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { DAYS } from '../../globalConst';

export const DayWork = () => {
  const stats = useSelector((state: RootState) => state.statistic);
  const weekIndex = useSelector(
    (state: RootState) => state.rangeChoice.weekIndex
  );
  const dayIndex = useSelector(
    (state: RootState) => state.rangeChoice.dayIndex
  );

  const day = DAYS[new Date(stats[weekIndex + dayIndex].date).getDay()];
  return (
    <aside className={styles.workContainer}>
      <h3 className={styles.workHeader}>{day}</h3>
      <p className={styles.workDescription}>
        You worked for{' '}
        <span className={styles.workTime}>
          {stats[weekIndex + dayIndex].pomodoroMin} minutes
        </span>
      </p>
    </aside>
  );
};
