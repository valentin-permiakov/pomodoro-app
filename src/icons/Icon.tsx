import React from 'react';
import { PomodoroLogo } from './PomodoroLogo'

export enum EIcons {
  logo = 'PomodoroLogo',
}

interface IIconProps {
  name: EIcons,
  size?: 40 | 16 | 14 | 12
}

export function Icon({ name, size = 16 }: IIconProps) {
  const icons = {
    'PomodoroLogo' : <PomodoroLogo />,
  }
  return (
    <span style={{ width: size, height: size }}>
      {icons[name]}
    </span>
  );
}
