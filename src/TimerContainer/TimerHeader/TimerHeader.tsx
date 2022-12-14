import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import styles from './timer-header.scss';

export function TimerHeader() {
  // const isStarted = useSelector((state: RootState) => state.timer.isStarted);
  const isBreak = useSelector((state: RootState) => state.timer.isBreak);
  return (
    <div className={styles.timerHeaderContainer}>
      <h2 className={styles.timerHeader}>Сверстать сайт</h2>
      <span className={styles.pomodoroCount}>
        {isBreak ? 'Перерыв' : 'Помидор'} 1
      </span>
    </div>
  );
}
