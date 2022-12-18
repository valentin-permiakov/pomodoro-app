import React from 'react';
import { EIcons, Icon } from '../../../../../icons';
import styles from './todomenu.scss';

export function TodoMenu() {
  return (
    <div className={styles.menu}>
      <button className={styles.menuBtn}>
        <Icon name={EIcons.menuIcon} size={26} />
      </button>
    </div>
  );
}
