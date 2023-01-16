import React, { useRef, useState } from 'react';
import styles from './todolist.scss';
import { TodoItem } from './TodoItem/TodoItem';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/store';
import { sortTodoList } from '../../../store/todoSlice';

export const TodoList = () => {
  const todoList = useSelector((state: RootState) => state.todo);
  const theme = useSelector((state: RootState) => state.colorTheme);
  const dragItemRef = useRef<unknown>(null);
  const dragOverItemRef = useRef<unknown>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dispatch = useDispatch();

  const onDragStart = (
    _event: React.DragEvent<HTMLLIElement>,
    index: number
  ) => {
    dragItemRef.current = index;
    setTimeout(() => {
      setIsDragging(true);
    }, 0);
  };

  function onDragEnter(_event: React.DragEvent<HTMLLIElement>, index: number) {
    dragOverItemRef.current = index;
    const todoListCopy = [...todoList];
    if (
      typeof dragItemRef.current === 'number' &&
      typeof dragOverItemRef.current === 'number'
    ) {
      const dragItemContent = todoListCopy.splice(dragItemRef.current, 1)[0];
      todoListCopy.splice(dragOverItemRef.current, 0, dragItemContent);
      dispatch(sortTodoList(todoListCopy));

      dragItemRef.current = dragOverItemRef.current;
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onDragEnd = (_event: React.DragEvent<HTMLLIElement>) => {
    const todoListCopy = [...todoList];
    if (
      typeof dragItemRef.current === 'number' &&
      typeof dragOverItemRef.current === 'number'
    ) {
      const dragItemContent = todoListCopy.splice(dragItemRef.current, 1)[0];
      todoListCopy.splice(dragOverItemRef.current, 0, dragItemContent);

      dragItemRef.current = null;
      dragOverItemRef.current = null;
      dispatch(sortTodoList(todoListCopy));
      setIsDragging(false);
    }
  };

  const getStyles = (index: number) => {
    const currentItem = dragItemRef.current;
    if (currentItem === index) {
      return { backgroundColor: `${theme === 'dark' ? '#363636' : '#c4c4c4'}` };
    }
    return {};
  };

  return (
    <ul className={styles.todoList}>
      {todoList.map((item, index) => (
        <TodoItem
          key={item.timeStamp}
          name={item.todoName}
          pomodoroNumber={item.pomodoroNumber}
          timestamp={item.timeStamp}
          onDragStart={onDragStart}
          onDragEnter={onDragEnter}
          onDragEnd={onDragEnd}
          getStyles={getStyles}
          index={index}
          isDragging={isDragging}
        />
      ))}
    </ul>
  );
};
