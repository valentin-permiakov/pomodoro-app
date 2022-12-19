import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import {
  changeBreakStatus,
  changeFirstStartStatus,
  changeMinutes,
  changePauseStatus,
  changePomodoroCount,
  changeSeconds,
  changeTimerStatus,
  initialState,
} from '../../../store/timerSlice';
import { removeTodoItem } from '../../../store/todoSlice';
import styles from './timer-contols.scss';

interface ITimerControlsProps {
  timeOut: NodeJS.Timeout;
  runTimer: (minutes: number, seconds: number) => void;
}

export function TimerContols({ timeOut, runTimer }: ITimerControlsProps) {
  const isStarted = useSelector((state: RootState) => state.timer.isStarted);
  const isBreak = useSelector((state: RootState) => state.timer.isBreak);
  const isPaused = useSelector((state: RootState) => state.timer.isPaused);
  const isFirstStart = useSelector(
    (state: RootState) => state.timer.isFirstStart
  );
  const minutes = useSelector(
    (state: RootState) => state.timer.pomodoroMinutes
  );
  const seconds = useSelector(
    (state: RootState) => state.timer.pomodoroSeconds
  );
  const pomodoroCount = useSelector(
    (state: RootState) => state.timer.pomodoroCount
  );
  const dispatch = useDispatch();

  const startTimer = () => {
    clearTimeout(timeOut);
    dispatch(changeTimerStatus());
    runTimer(minutes, seconds);
    if (isPaused) dispatch(changePauseStatus());
    if (isFirstStart) {
      dispatch(changeFirstStartStatus());
      const initialStartTime = Date.now();
      console.log(initialStartTime);
    }
  };

  const pauseTimer = () => {
    clearTimeout(timeOut);
    dispatch(changeTimerStatus());
    dispatch(changePauseStatus());
  };

  const resetTimer = () => {
    clearTimeout(timeOut);
    dispatch(changeMinutes(initialState.pomodoroMinutes));
    dispatch(changeSeconds(initialState.pomodoroSeconds));
    if (isPaused) {
      // resets isPaused state to default
      dispatch(changePauseStatus());
      dispatch(changeFirstStartStatus());
    }
    if (!isStarted) return;
    dispatch(changeTimerStatus());
    dispatch(changeFirstStartStatus());
  };

  const skipBreak = () => {
    clearTimeout(timeOut);
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
