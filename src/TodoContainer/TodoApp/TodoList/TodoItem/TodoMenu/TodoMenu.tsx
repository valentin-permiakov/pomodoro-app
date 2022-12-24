import React, { useRef, useState } from 'react';
import { Dropdown } from '../../../../../Dropdown';
import { EIcons, Icon } from '../../../../../icons';
import styles from './todomenu.scss';
import { MenuItemsList } from './MenuItemsList/MenuItemsList';

interface ITodoMenuProps {
  timestamp: number;
  openEdit: () => void;
}

export function TodoMenu({ timestamp, openEdit }: ITodoMenuProps) {
  const btnRef = useRef<HTMLButtonElement>(null);
  const coordinates = btnRef.current?.getBoundingClientRect();
  const top = coordinates
    ? coordinates.top + coordinates.height + window.pageYOffset + 10
    : 0;
  const left = coordinates ? coordinates.left - coordinates.width - 35 : 0;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  console.log(isDropdownOpen);

  return (
    <div className={styles.menu}>
      <button
        className={`${styles.menuBtn} ${
          isDropdownOpen ? styles.activeBtn : ''
        }`}
        ref={btnRef}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <Icon name={EIcons.menuIcon} size={26} />
      </button>
      {isDropdownOpen && (
        <Dropdown top={top} left={left}>
          <MenuItemsList
            timestamp={timestamp}
            openEdit={openEdit}
            closeList={() => {
              setIsDropdownOpen(false);
            }}
          />
        </Dropdown>
      )}
    </div>
  );
}
