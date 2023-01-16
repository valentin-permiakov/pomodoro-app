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
        data-type="This week"
        onClick={handleClick}
      >
        This Week
      </li>
      <li
        className={styles.rangeItem}
        data-type="Last week"
        onClick={handleClick}
      >
        Last week
      </li>
      <li
        className={styles.rangeItem}
        data-type="2 weeks ago"
        onClick={handleClick}
      >
        2 weeks ago
      </li>
    </ul>
  );
};
