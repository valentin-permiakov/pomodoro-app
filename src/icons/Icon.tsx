import React from 'react';
import { CloseIcon } from './CloseIcon';
import { MenuIcon } from './MenuIcon';
import { PomodoroLogo } from './PomodoroLogo';

export enum EIcons {
  logo = 'PomodoroLogo',
  menuIcon = 'MenuIcon',
  closeIcon = 'CloseIcon',
}

interface IIconProps {
  name: EIcons;
  size?: number;
}

export const Icon = ({ name, size = 16 }: IIconProps) => {
  const icons = {
    PomodoroLogo: <PomodoroLogo width={size} height={size} />,
    MenuIcon: <MenuIcon width={size} />,
    CloseIcon: <CloseIcon width={size} />,
  };
  return <span style={{ width: size, height: size }}>{icons[name]}</span>;
};
