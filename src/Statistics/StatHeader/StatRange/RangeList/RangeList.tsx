import React, { MouseEvent } from 'react';
import styles from './range-list.scss';

interface IRangeListProps {
  handleClick: (e: MouseEvent<HTMLLIElement>) => void;
  handleHover: () => void;
}

export const RangeList = ({ handleClick, handleHover }: IRangeListProps) => {
  return (
    <ul className={styles.rangeList} onMouseLeave={handleHover}>
      <li
        className={styles.rangeItem}
        data-type="Эта неделя"
        onClick={handleClick}
      >
        Эта неделя
      </li>
      <li
        className={styles.rangeItem}
        data-type="Прошлая неделя"
        onClick={handleClick}
      >
        Прошлая неделя
      </li>
      <li
        className={styles.rangeItem}
        data-type="2 недели назад"
        onClick={handleClick}
      >
        2 недели назад
      </li>
    </ul>
  );
};
