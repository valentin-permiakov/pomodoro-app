import React, { useState } from 'react';
import { Dropdown } from '../../../../../Dropdown';
import { EIcons, Icon } from '../../../../../icons';
import styles from './todomenu.scss';
import { MenuItemsList } from './MenuItemsList/MenuItemsList';
import { useCoordinates } from '../../../../../hooks/useCoordinates';

interface ITodoMenuProps {
  timestamp: number;
  openEdit: () => void;
}

export function TodoMenu({ timestamp, openEdit }: ITodoMenuProps) {
  const { btnRef, top, left } = useCoordinates(10, -35);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
