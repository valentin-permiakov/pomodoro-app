import React from 'react';
import { PomodoroLogo } from './PomodoroLogo'

export enum EIcons {
  logo = 'PomodoroLogo',
}

interface IIconProps {
  name: EIcons,
  size?: number
}

export function Icon({ name, size = 16 }: IIconProps) {
  const icons = {
    'PomodoroLogo' : <PomodoroLogo width={size} height={size} />,
  }
  return (
    <span style={{ width: size, height: size }}>
      {icons[name]}
    </span>
  );
}
