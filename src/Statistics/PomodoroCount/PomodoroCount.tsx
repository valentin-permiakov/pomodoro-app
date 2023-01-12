import React from 'react';
import { useSelector } from 'react-redux';
import { EIcons, Icon } from '../../icons';
import { RootState } from '../../store/store';
import styles from './pomodoro-count.scss';

export const PomodoroCount = () => {
  const stats = useSelector((state: RootState) => state.statistic);
  const weekIndex = useSelector(
    (state: RootState) => state.rangeChoice.weekIndex
  );
  const dayIndex = useSelector(
    (state: RootState) => state.rangeChoice.dayIndex
  );

  const count = stats[weekIndex + dayIndex].pomodoroMin / 25;
  return (
    <aside className={styles.countContainer}>
      <p className={styles.imgContainer}>
        <Icon name={EIcons.logo} size={81} /> {count > 0 ? `x${count}` : ''}
      </p>
      <p className={styles.countDescription}>{count} помидор</p>
    </aside>
  );
};
