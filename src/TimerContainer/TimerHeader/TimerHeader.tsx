import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import styles from './timer-header.scss';

interface ITimerHeaderProps {
  taskName?: string;
}

export const TimerHeader = ({ taskName = 'Add a task' }: ITimerHeaderProps) => {
  const isPaused = useSelector((state: RootState) => state.timer.isPaused);
  const isBreak = useSelector((state: RootState) => state.timer.isBreak);
  const pomodoroCount = useSelector(
    (state: RootState) => state.timer.pomodoroCount
  );
  const breakCount = useSelector((state: RootState) => state.timer.breakCount);
  return (
    <div
      className={`${styles.timerHeaderContainer} ${
        isPaused ? styles.headerContainerPause : ''
      }`}
    >
      <h2 className={styles.timerHeader}>{taskName}</h2>
      <span className={styles.pomodoroCount}>
        {isBreak ? `Break ${breakCount - 1}` : `Pomodoro ${pomodoroCount}`}
      </span>
    </div>
  );
};
