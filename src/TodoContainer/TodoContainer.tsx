import React from 'react';
import { Instructions } from './Instructions';
import styles from './todo-container.scss';

export function TodoContainer() {
  return (
    <section className={styles.container}>
      <Instructions />
    </section>
  );
}
