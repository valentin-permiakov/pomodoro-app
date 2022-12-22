import React, { ChangeEvent, FormEvent, useRef, useState } from 'react';
import { EIcons, Icon } from '../../../../icons';
import styles from './todoitem.scss';
import { TodoMenu } from './TodoMenu';
import { useDispatch } from 'react-redux';
import { changeTask } from '../../../../store/todoSlice';

interface ITodoItemProps {
  name: string;
  pomodoroNumber: number;
  timestamp: number;
}

export function TodoItem({
  name,
  pomodoroNumber = 1,
  timestamp,
}: ITodoItemProps) {
  const [isEdit, setIsEdit] = useState(false);
  const refText = useRef<HTMLInputElement>(null);
  const [taskNameValue, setTaskNameValue] = useState(name);
  const dispatch = useDispatch();

  const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskNameValue(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (taskNameValue.length > 0) {
      dispatch(changeTask({ timestamp: timestamp, text: taskNameValue }));
      setIsEdit(false);
    }
  };

  return (
    <li className={styles.todoItem}>
      <span className={styles.pomodoroNumber}>
        {pomodoroNumber < 10 ? `0${pomodoroNumber}` : pomodoroNumber}
      </span>
      {isEdit ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Название задачи"
            value={taskNameValue}
            ref={refText}
            onChange={handleTextChange}
            className={styles.taskInput}
          />
          <button type="submit" className={styles.changeBtn}>
            <Icon name={EIcons.checkIcon} />
          </button>
        </form>
      ) : (
        <span className={styles.taskName}>{name}</span>
      )}
      <TodoMenu timestamp={timestamp} openEdit={() => setIsEdit(!isEdit)} />
    </li>
  );
}
