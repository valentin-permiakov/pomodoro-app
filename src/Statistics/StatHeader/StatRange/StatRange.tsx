import React, { MouseEvent, useState } from 'react';
import styles from './stat-range.scss';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/store';
import { changeRange } from '../../../store/rangeChoiceSlice';
import { useCoordinates } from '../../../hooks/useCoordinates';
import { Dropdown } from '../../../Dropdown';
import { EIcons, Icon } from '../../../icons';
import { RangeList } from './RangeList/RangeList';

export const StatRange = () => {
  const range = useSelector((state: RootState) => state.rangeChoice.text);
  const { btnRef, top, left } = useCoordinates(0, 370);
  const [isOpened, setIsOpened] = useState(false);
  const dispatch = useDispatch();

  const handleClick = (e: MouseEvent<HTMLLIElement>) => {
    if (e.currentTarget.dataset.type) {
      const weekIndex =
        e.currentTarget.dataset.type === 'This week'
          ? 0
          : e.currentTarget.dataset.type === 'Last week'
          ? 7
          : 14;
      dispatch(
        changeRange({
          text: e.currentTarget.dataset.type,
          weekIndex,
          dayIndex: 0,
        })
      );
    }
    setIsOpened(false);
  };

  const handleHover = () => {
    setIsOpened(false);
  };
  return (
    <div className={`${styles.choiceBox} ${isOpened ? styles.reversed : ''}`}>
      <button
        className={styles.rangeBtn}
        onClick={() => setIsOpened(!isOpened)}
        ref={btnRef}
      >
        {range}
        <Icon name={EIcons.dropdownIcon} />
      </button>
      {isOpened && (
        <Dropdown top={top} left={left}>
          <RangeList handleClick={handleClick} handleHover={handleHover} />
        </Dropdown>
      )}
    </div>
  );
};
