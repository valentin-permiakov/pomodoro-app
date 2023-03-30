import React from 'react';
import { clearTimeout } from 'worker-timers';
import { ITimerControlsProps } from '../../../../types/interfaces';
import {
  changeFinishedTaskCount,
  changePauseMin,
  changeStopCount,
} from '../../../store/statisticSlice';
import {
  changeMinutes,
  changePauseStamp,
  changePomodoroCount,
  changeSeconds,
  changeTimerState,
  initialState,
} from '../../../store/timerSlice';
import { removeTodoItem } from '../../../store/todoSlice';
import styles from './timer-contols.scss';

export const TimerContols = ({
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
}: ITimerControlsProps) => {
  let startStamp: number;

  const startTimer = () => {
    if (timeOut !== undefined) clearTimeout(timeOut);
    dispatch(changeTimerState('isStarted'));
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
      dispatch(changeTimerState('isPaused'));
    }
    if (isFirstStart) {
      dispatch(changeTimerState('isFirstStart'));
    }
  };

  const pauseTimer = () => {
    if (timeOut !== undefined) {
      clearTimeout(timeOut);
    }
    dispatch(changePauseStamp(Date.now()));
    dispatch(changeTimerState('isStarted'));
    dispatch(changeTimerState('isPaused'));
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
      dispatch(changeTimerState('isPaused'));
      dispatch(changeTimerState('isFirstStart'));
      dispatch(changeMinutes(initialState.pomodoroMinutes));
      dispatch(changeSeconds(initialState.pomodoroSeconds));
    }
    if (!isStarted) return;
    dispatch(changeTimerState('isStarted'));
    dispatch(changeTimerState('isFirstStart'));
  };

  const skipBreak = () => {
    if (timeOut !== undefined) clearTimeout(timeOut);
    dispatch(changePomodoroCount(pomodoroCount + 1));
    dispatch(changeMinutes(initialState.pomodoroMinutes));
    dispatch(changeSeconds(initialState.pomodoroSeconds));
    dispatch(changeTimerState('isBreak'));
    if (isStarted) {
      dispatch(changeTimerState('isStarted'));
      dispatch(changeTimerState('isFirstStart'));
    }
    if (isPaused) {
      // resets isPaused state to default
      dispatch(changeTimerState('isPaused'));
      dispatch(changeTimerState('isFirstStart'));
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
        {isStarted ? 'Pause' : isPaused ? 'Continue' : 'Start'}
      </button>
      <button
        className={`${styles.stopBtn} ${isPaused ? styles.endTaskBtn : ''}`}
        onClick={isBreak ? skipBreak : isPaused ? deleteTask : resetTimer}
      >
        {isBreak ? 'Skip Break' : isPaused ? 'Done' : 'Stop'}
      </button>
    </div>
  );
};
