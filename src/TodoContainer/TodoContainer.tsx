import React from 'react';
import { Instructions } from './Instructions';
import styles from './todo-container.scss';
import { TodoApp } from './TodoApp/TodoApp';

export function TodoContainer() {
  return (
    <section className={styles.container}>
      <Instructions />
      <TodoApp />
    </section>
  );
}
