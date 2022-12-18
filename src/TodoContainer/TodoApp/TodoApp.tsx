import React from 'react';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import styles from './todoapp.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { formatWorkTime } from '../../utils/formatWorkTime';

export function TodoApp() {
  const todoList = useSelector((state: RootState) => state.todo);
  const pomorodoMinutes =
    useSelector((state: RootState) => state.timer.pomodoroMinutes) * 60;
  const pomorodoSeconds = useSelector(
    (state: RootState) => state.timer.pomodoroSeconds
  );
  const workAmount =
    todoList.reduce((acc, value) => acc + value.pomodoroNumber, 0) *
    (pomorodoMinutes + pomorodoSeconds);

  return (
    <div>
      <TodoForm />
      <TodoList />
      {todoList.length !== 0 && (
        <span className={styles.workTime}>{formatWorkTime(workAmount)}</span>
      )}
    </div>
  );
}
