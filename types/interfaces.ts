import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { ITodoItem } from '../src/store/todoSlice';

export interface ITimerControlsProps {
  timeOut: number;
  runTimer: (
    timeOut: number,
    dispatch: Dispatch<AnyAction>,
    isBreak: boolean,
    minutes: number,
    seconds: number,
    pomodoroCount: number,
    breakCount: number,
    taskList: ITodoItem[]
  ) => void;
  isStarted: boolean;
  isBreak: boolean;
  isPaused: boolean;
  isFirstStart: boolean;
  minutes: number;
  seconds: number;
  pomodoroCount: number;
  breakCount: number;
  taskList: ITodoItem[];
  dispatch: Dispatch<AnyAction>;
  pauseStamp: number;
}

export interface ITodoItemProps {
  name: string;
  pomodoroNumber: number;
  timestamp: number;
  index: number;
  isDragging: boolean;
  onDragStart: (_event: React.DragEvent<HTMLLIElement>, index: number) => void;
  onDragEnter: (_event: React.DragEvent<HTMLLIElement>, index: number) => void;
  onDragEnd: (_event: React.DragEvent<HTMLLIElement>) => void;
  getStyles: (index: number) => React.CSSProperties;
}
