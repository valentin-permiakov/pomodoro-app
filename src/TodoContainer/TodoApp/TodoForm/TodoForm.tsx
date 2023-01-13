import React, { ChangeEvent, FormEvent, useRef, useState } from 'react';
import styles from './todoform.scss';
import { useDispatch } from 'react-redux';
import { addTodoItem } from '../../../store/todoSlice';
import { changePomodoroCount } from '../../../store/timerSlice';

export const TodoForm = () => {
  const refText = useRef<HTMLInputElement>(null);
  const refNum = useRef<HTMLInputElement>(null);
  const [taskNameValue, setTaskNameValue] = useState('');
  const [taskPomodoroNumber, setTaskPomodoroNumber] = useState(1);
  const dispatch = useDispatch();

  const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskNameValue(event.target.value);
  };

  const handleNumChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskPomodoroNumber(Number(event.target.value));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    dispatch(
      addTodoItem({
        todoName: taskNameValue,
        pomodoroNumber: taskPomodoroNumber,
        timeStamp: Date.now(),
      })
    );
    dispatch(changePomodoroCount(1));
    setTaskNameValue('');
    setTaskPomodoroNumber(1);
  };

  return (
    <form action="" className={styles.todoForm} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <label className={styles.formLabel} htmlFor="todo-name">
          Название задачи
        </label>
        <input
          type="text"
          className={`${styles.todoInput} ${styles.todoName}`}
          ref={refText}
          placeholder="Название задачи"
          value={taskNameValue}
          onChange={handleTextChange}
          id="todo-name"
        />
      </div>

      <div className={styles.inputContainer}>
        <label className={styles.formLabel} htmlFor="todo-number">
          Количество помидор
        </label>
        <input
          type="number"
          className={`${styles.todoInput} ${styles.todoNumber}`}
          ref={refNum}
          placeholder="Количество помидор"
          value={taskPomodoroNumber}
          onChange={handleNumChange}
          id="todo-number"
        />
      </div>
      <button
        type="submit"
        className={styles.submitBtn}
        disabled={
          taskNameValue.length > 0 && taskPomodoroNumber > 0 ? false : true
        }
      >
        Добавить
      </button>
    </form>
  );
};
