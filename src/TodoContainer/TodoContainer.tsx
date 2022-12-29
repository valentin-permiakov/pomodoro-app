import React, { useEffect, useState } from 'react';
import { Instructions } from './Instructions';
import styles from './todo-container.scss';
import { TodoApp } from './TodoApp/TodoApp';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export function TodoContainer() {
  const todoList = useSelector((state: RootState) => state.todo);
  const [isInstructions, setIsInstructions] = useState(true);
  useEffect(() => {
    if (!todoList.length) setIsInstructions(false);
  }, [todoList]);
  return (
    <section className={styles.container}>
      {!isInstructions && <Instructions />}
      <TodoApp />
    </section>
  );
}
