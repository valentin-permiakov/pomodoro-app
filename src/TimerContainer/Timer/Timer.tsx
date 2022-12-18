/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import styles from './timer.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { DeleteTask } from '../../DeleteTask/DeleteTask';
import {
  changeBreakCount,
  changeBreakStatus,
  changeFirstStartStatus,
  changeMinutes,
  changePauseStatus,
  changePomodoroCount,
  changeSeconds,
  changeTimerStatus,
  initialState,
} from '../../store/timerSlice';
import { removeTodoItem } from '../../store/todoSlice';

interface ITimerProps {
  taskName?: string;
  taskLength?: number;
}

export function Timer({
  taskName = 'Добавьте задание',
  taskLength = 1,
}: ITimerProps) {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const isFirstStart = useSelector(
    (state: RootState) => state.timer.isFirstStart
  );
  const isStarted = useSelector((state: RootState) => state.timer.isStarted);
  const isBreak = useSelector((state: RootState) => state.timer.isBreak);
  const isPaused = useSelector((state: RootState) => state.timer.isPaused);
  const minutes = useSelector(
    (state: RootState) => state.timer.pomodoroMinutes
  );
  const seconds = useSelector(
    (state: RootState) => state.timer.pomodoroSeconds
  );
  const pomodoroCount = useSelector(
    (state: RootState) => state.timer.pomodoroCount
  );
  const breakCount = useSelector((state: RootState) => state.timer.breakCount);
  const taskList = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();
  let timeOut: NodeJS.Timeout;

  const runTimer = (minutes: number, seconds: number) => {
    timeOut = setTimeout(() => {
      if (seconds > 0) {
        dispatch(changeSeconds(seconds - 1));
      }
      if (seconds === 0) {
        if (minutes === 0) {
          if (pomodoroCount === taskLength && taskList.length !== 0) {
            console.log('Конец!');
            setIsModalOpened(true);
          }
          clearTimeout(timeOut);
          dispatch(changeBreakStatus());
          dispatch(changeTimerStatus());
          dispatch(changeFirstStartStatus());
          dispatch(
            changeMinutes(
              isBreak
                ? initialState.pomodoroMinutes
                : breakCount % 4 === 0 && breakCount !== 0 // Check if it's time for a big break
                ? initialState.bigBreakMinutes
                : initialState.breakMinutes
            )
          );
          dispatch(
            changeSeconds(
              isBreak
                ? initialState.pomodoroSeconds
                : breakCount % 4 === 0 && breakCount !== 0 // Check if it's time for a big break
                ? initialState.bigBreakSeconds
                : initialState.breakSeconds
            )
          );
          dispatch(
            !isBreak
              ? changeBreakCount(breakCount + 1)
              : changePomodoroCount(pomodoroCount + 1)
          );
        } else {
          dispatch(changeMinutes(minutes - 1));
          dispatch(changeSeconds(59));
        }
      }
    }, 1000);
  };

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

  useEffect(() => {
    if (isStarted) {
      runTimer(minutes, seconds);
    }
  }, [minutes, seconds]);

  return (
    <div className={styles.timer}>
      <p
        className={`${styles.countdown} ${
          isPaused ? styles.pausedCountdown : ''
        }`}
      >
        <span>{minutes < 10 ? '0' + minutes : minutes}:</span>
        <span>{seconds < 10 ? '0' + seconds : seconds}</span>
      </p>
      <h3 className={styles.task}>
        <span>Задача - </span>
        {taskName}
      </h3>
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

      {isModalOpened && (
        <DeleteTask
          onClose={() => {
            setIsModalOpened(false);
          }}
        />
      )}
    </div>
  );
}
