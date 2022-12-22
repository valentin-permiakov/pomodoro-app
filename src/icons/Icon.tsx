import React from 'react';
import { CloseIcon } from './CloseIcon';
import { MenuIcon } from './MenuIcon';
import { PomodoroLogo } from './PomodoroLogo';
import { IncreaseIcon } from './IncreaseIcon';
import { DecreaseIcon } from './DecreaseIcon';
import { EditIcon } from './EditIcon';
import { DeleteIcon } from './DeleteIcon';
import { CheckIcon } from './CheckIcon';

export enum EIcons {
  logo = 'PomodoroLogo',
  menuIcon = 'MenuIcon',
  closeIcon = 'CloseIcon',
  increaseIcon = 'IncreaseIcon',
  decreaseIcon = 'DecreaseIcon',
  editIcon = 'EditIcon',
  deleteIcon = 'DeleteIcon',
  checkIcon = 'CheckIcon',
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
    IncreaseIcon: <IncreaseIcon width={size} height={size} />,
    DecreaseIcon: <DecreaseIcon width={size} height={size} />,
    EditIcon: <EditIcon width={size} height={size} />,
    DeleteIcon: <DeleteIcon width={size} height={size} />,
    CheckIcon: <CheckIcon width={size} height={size} />,
  };
  return <span style={{ width: size, height: size }}>{icons[name]}</span>;
};
