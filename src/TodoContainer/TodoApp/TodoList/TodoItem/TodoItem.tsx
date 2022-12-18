import React from 'react';
import styles from './todoitem.scss';
import { TodoMenu } from './TodoMenu';

interface ITodoItemProps {
  name: string;
  pomodoroNumber: number;
}

export function TodoItem({ name, pomodoroNumber = 1 }: ITodoItemProps) {
  return (
    <li className={styles.todoItem}>
      <span className={styles.pomodoroNumber}>
        {pomodoroNumber < 10 ? `0${pomodoroNumber}` : pomodoroNumber}
      </span>
      <span className={styles.taskName}>{name}</span>
      <TodoMenu />
    </li>
  );
}
