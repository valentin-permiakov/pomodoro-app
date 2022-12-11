import React from 'react';
// import { Timer } from './Timer';
import { TimerCopy } from './Timer/TimerCopy';
import { TimerHeader } from './TimerHeader';
import styles from './timer-container.scss';

export function TimerContainer() {
  return (
    <section className={styles.container}>
      <TimerHeader />
      <TimerCopy />
    </section>
  );
}
