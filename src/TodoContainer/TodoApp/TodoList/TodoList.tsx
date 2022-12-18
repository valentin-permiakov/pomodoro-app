import React from 'react';
import styles from './todolist.scss';
import { TodoItem } from './TodoItem/TodoItem';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

export function TodoList() {
  const todoList = useSelector((state: RootState) => state.todo);

  return (
    <ul className={styles.todoList}>
      {todoList.map((item) => (
        <TodoItem
          key={item.timeStamp}
          name={item.todoName}
          pomodoroNumber={item.pomodoroNumber}
        />
      ))}
    </ul>
  );
}
