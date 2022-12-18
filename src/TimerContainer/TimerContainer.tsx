import React from 'react';
import { Timer } from './Timer';
import { TimerHeader } from './TimerHeader';
import styles from './timer-container.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export function TimerContainer() {
  const taskName = useSelector((state: RootState) => state.todo[0]?.todoName);
  const taskLength = useSelector(
    (state: RootState) => state.todo[0]?.pomodoroNumber
  );
  return (
    <section className={styles.container}>
      <TimerHeader taskName={taskName} />
      <Timer taskName={taskName} taskLength={taskLength} />
    </section>
  );
}
