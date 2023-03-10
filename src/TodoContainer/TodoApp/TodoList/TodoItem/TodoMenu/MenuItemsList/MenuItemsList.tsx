import React from 'react';
import styles from './menu-items-list.scss';
import { EIcons, Icon } from '../../../../../../icons/Icon';
import { useDispatch } from 'react-redux';
import {
  decreasePomorodo,
  filterTodo,
  increasePomorodo,
} from '../../../../../../store/todoSlice';

interface IMenuItemListProps {
  timestamp: number;
  openEdit: () => void;
  closeList: () => void;
}

export const MenuItemsList = ({
  timestamp,
  openEdit,
  closeList,
}: IMenuItemListProps) => {
  const dispatch = useDispatch();
  return (
    <ul className={styles.menuList} onMouseLeave={closeList}>
      <li className={styles.menuItem}>
        <button
          className={styles.menuBtn}
          onClick={() => dispatch(increasePomorodo(timestamp))}
        >
          <Icon name={EIcons.increaseIcon} size={18} />
          Add pomodoro
        </button>
      </li>
      <li className={styles.menuItem}>
        <button
          className={styles.menuBtn}
          onClick={() => dispatch(decreasePomorodo(timestamp))}
        >
          <Icon name={EIcons.decreaseIcon} size={18} />
          Remove pomodoro
        </button>
      </li>
      <li className={styles.menuItem}>
        <button
          className={styles.menuBtn}
          onClick={() => {
            openEdit();
            closeList();
          }}
        >
          <Icon name={EIcons.editIcon} size={18} />
          Edit task
        </button>
      </li>
      <li className={styles.menuItem}>
        <button
          className={styles.menuBtn}
          onClick={() => dispatch(filterTodo(timestamp))}
        >
          <Icon name={EIcons.deleteIcon} size={18} />
          Delete task
        </button>
      </li>
    </ul>
  );
};
