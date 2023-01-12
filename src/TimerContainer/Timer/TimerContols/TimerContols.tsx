import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { clearTimeout } from 'worker-timers';
import React from 'react';
import {
  changeBreakStatus,
  changeFirstStartStatus,
  changeMinutes,
  changePauseStamp,
  changePauseStatus,
  changePomodoroCount,
  changeSeconds,
  changeTimerStatus,
  initialState,
} from '../../../store/timerSlice';
import { ITodoItem, removeTodoItem } from '../../../store/todoSlice';
import styles from './timer-contols.scss';
import {
  changeFinishedTaskCount,
  changePauseMin,
  changeStopCount,
} from '../../../store/statisticSlice';

interface ITimerControlsProps {
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

export function TimerContols({
  timeOut,
  runTimer,
  isStarted,
  isBreak,
  isPaused,
  isFirstStart,
  minutes,
  seconds,
  pomodoroCount,
  breakCount,
  taskList,
  dispatch,
  pauseStamp,
}: ITimerControlsProps) {
  let startStamp: number;

  const startTimer = () => {
    if (timeOut !== undefined) clearTimeout(timeOut);
    dispatch(changeTimerStatus());
    runTimer(
      timeOut,
      dispatch,
      isBreak,
      minutes,
      seconds,
      pomodoroCount,
      breakCount,
      taskList
    );
    if (isPaused) {
      startStamp = Date.now();
      const pauseMin = (startStamp - pauseStamp) / 1000 / 60;
      if (!isBreak) dispatch(changePauseMin(Math.round(pauseMin)));
      dispatch(changePauseStatus());
    }
    if (isFirstStart) {
      dispatch(changeFirstStartStatus());
      const initialStartTime = Date.now();
      console.log(initialStartTime);
    }
  };

  const pauseTimer = () => {
    if (timeOut !== undefined) {
      clearTimeout(timeOut);
    }
    dispatch(changePauseStamp(Date.now()));
    dispatch(changeTimerStatus());
    dispatch(changePauseStatus());
  };

  const resetTimer = () => {
    if (timeOut !== undefined) clearTimeout(timeOut);
    setTimeout(() => {
      dispatch(changeMinutes(initialState.pomodoroMinutes));
      dispatch(changeSeconds(initialState.pomodoroSeconds));
      dispatch(changeStopCount());
    }, 900);
    dispatch(changeMinutes(initialState.pomodoroMinutes));
    dispatch(changeSeconds(initialState.pomodoroSeconds));
    if (isPaused) {
      // resets isPaused state to default
      dispatch(changePauseStatus());
      dispatch(changeFirstStartStatus());
      dispatch(changeMinutes(initialState.pomodoroMinutes));
      dispatch(changeSeconds(initialState.pomodoroSeconds));
    }
    if (!isStarted) return;
    dispatch(changeTimerStatus());
    dispatch(changeFirstStartStatus());
  };

  const skipBreak = () => {
    if (timeOut !== undefined) clearTimeout(timeOut);
    dispatch(changePomodoroCount(pomodoroCount + 1));
    dispatch(changeMinutes(initialState.pomodoroMinutes));
    dispatch(changeSeconds(initialState.pomodoroSeconds));
    dispatch(changeBreakStatus());
    if (isStarted) {
      dispatch(changeTimerStatus());
      dispatch(changeFirstStartStatus());
    }
    if (isPaused) {
      // resets isPaused state to default
      dispatch(changePauseStatus());
      dispatch(changeFirstStartStatus());
    }
  };

  const deleteTask = () => {
    resetTimer();
    dispatch(changePomodoroCount(1));
    dispatch(removeTodoItem());
    dispatch(changeFinishedTaskCount());
  };

  return (
    <div className={styles.controlsContainer}>
      <button
        className={styles.startBtn}
        onClick={!isStarted ? startTimer : pauseTimer}
      >
        {isStarted ? 'Пауза' : isPaused ? 'Продолжить' : 'Старт'}
      </button>
      <button
        className={`${styles.stopBtn} ${isPaused ? styles.endTaskBtn : ''}`}
        onClick={isBreak ? skipBreak : isPaused ? deleteTask : resetTimer}
      >
        {isBreak ? 'Пропустить' : isPaused ? 'Сделано' : 'Стоп'}
      </button>
    </div>
  );
}
