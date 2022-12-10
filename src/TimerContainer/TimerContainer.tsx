import React from 'react';
import { Timer } from './Timer';
import styles from './timer-container.scss';
import { TimerHeader } from './TimerHeader';

export function TimerContainer() {
  return (
    <section className={styles.container}>
      <TimerHeader />
      <Timer />
    </section>
  );
}
