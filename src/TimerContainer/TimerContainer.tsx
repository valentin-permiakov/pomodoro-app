import React from 'react';
import { Timer } from './Timer';
import { TimerHeader } from './TimerHeader';
import styles from './timer-container.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export const TimerContainer = () => {
  const taskName = useSelector((state: RootState) => state.todo[0]?.todoName);
  return (
    <section className={styles.container}>
      <TimerHeader taskName={taskName} />
      <Timer taskName={taskName} />
    </section>
  );
};
