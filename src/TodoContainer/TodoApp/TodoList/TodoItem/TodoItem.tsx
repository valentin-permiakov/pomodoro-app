import React, { ChangeEvent, FormEvent, useRef, useState } from 'react';
import { EIcons, Icon } from '../../../../icons';
import styles from './todoitem.scss';
import { TodoMenu } from './TodoMenu';
import { useDispatch } from 'react-redux';
import { changeTask } from '../../../../store/todoSlice';
import { ITodoItemProps } from '../../../../../types/interfaces';

export const TodoItem = ({
  name,
  pomodoroNumber = 1,
  timestamp,
  index,
  isDragging,
  onDragStart,
  onDragEnter,
  onDragEnd,
  getStyles,
}: ITodoItemProps) => {
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
    <li
      className={styles.todoItem}
      draggable={isEdit ? false : true}
      style={isDragging ? getStyles(index) : {}}
      onDragStart={(e: React.DragEvent<HTMLLIElement>) => onDragStart(e, index)}
      onDragEnter={(e: React.DragEvent<HTMLLIElement>) => onDragEnter(e, index)}
      onDragEnd={(e: React.DragEvent<HTMLLIElement>) => onDragEnd(e)}
      onDragOver={(e: React.DragEvent<HTMLLIElement>) => e.preventDefault()}
    >
      <span className={styles.pomodoroNumber}>
        {pomodoroNumber < 10 ? `0${pomodoroNumber}` : pomodoroNumber}
      </span>
      {isEdit ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Task name"
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
};
