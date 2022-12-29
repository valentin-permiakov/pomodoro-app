import React from 'react';
import styles from './theme-switch.scss';
import { EIcons, Icon } from '../../icons/Icon';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { changeTheme } from '../../store/colorThemeSlice';

export const ThemeSwitch = () => {
  const isDark = useSelector((state: RootState) => state.colorTheme) === 'dark';
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(changeTheme(isDark ? 'light' : 'dark'));
  };
  return (
    <button className={styles.themeButton} onClick={clickHandler}>
      <Icon name={isDark ? EIcons.darkIcon : EIcons.lightIcon} size={26} />
    </button>
  );
};
