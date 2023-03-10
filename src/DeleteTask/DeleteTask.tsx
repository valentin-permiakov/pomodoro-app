/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styles from './delete-task.scss';
import { EIcons, Icon } from '../icons/Icon';
import { useDispatch } from 'react-redux';
import { changePomodoroCount } from '../store/timerSlice';
import { increasePomorodo, removeTodoItem } from '../store/todoSlice';
import { changeFinishedTaskCount } from '../store/statisticSlice';

interface IDeleteTaskProps {
  onClose: () => void;
  timestamp: number;
}

export const DeleteTask = ({ onClose, timestamp }: IDeleteTaskProps) => {
  const refModal = useRef<HTMLDivElement>(null);
  const refContent = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  const handleDelete = () => {
    onClose();
    dispatch(changePomodoroCount(0));
    dispatch(removeTodoItem());
    dispatch(changeFinishedTaskCount());
  };

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (
        event.target instanceof Node &&
        !refContent.current?.contains(event.target)
      ) {
        onClose();
        dispatch(increasePomorodo(timestamp));
      }
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const node = document.getElementById('modal-root');
  if (!node) return null;
  return ReactDOM.createPortal(
    <div className={styles.modal} ref={refModal}>
      <div className={styles.content} ref={refContent}>
        <h3 className={styles.heading}>Do you want to delete the task?</h3>
        <button className={styles.deleteBtn} onClick={handleDelete}>
          Delete
        </button>
        <button className={styles.cancelBtn} onClick={onClose}>
          Cancel
        </button>
        <button className={styles.closeBtn} onClick={onClose}>
          <Icon name={EIcons.closeIcon} size={24} />
        </button>
      </div>
    </div>,
    node
  );
};
