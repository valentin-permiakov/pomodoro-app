/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import styles from './timer.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import {
  changeBreakStatus,
  changeMinutes,
  changeSeconds,
  changeTimerStatus,
  initialState,
} from '../../store/timerSlice';

export function Timer() {
  const isStarted = useSelector((state: RootState) => state.timer.isStarted);
  const isBreak = useSelector((state: RootState) => state.timer.isBreak);
  const minutes = useSelector((state: RootState) => state.timer.minutes);
  const seconds = useSelector((state: RootState) => state.timer.seconds);
  const dispatch = useDispatch();
  let timeOut: NodeJS.Timeout;

  const runTimer = (minutes: number, seconds: number) => {
    timeOut = setTimeout(() => {
      if (seconds > 0) {
        dispatch(changeSeconds(seconds - 1));
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearTimeout(timeOut);
          dispatch(changeBreakStatus());
          dispatch(changeTimerStatus());
          dispatch(changeMinutes(!isBreak ? 0 : initialState.minutes));
          dispatch(changeSeconds(!isBreak ? 2 : initialState.seconds));
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
  };

  const stopTimer = () => {
    clearTimeout(timeOut);
    dispatch(changeTimerStatus());
  };

  const resetTimer = () => {
    clearTimeout(timeOut);
    dispatch(changeTimerStatus());
    dispatch(changeMinutes(initialState.minutes));
    dispatch(changeSeconds(initialState.seconds));
  };

  useEffect(() => {
    if (isStarted) {
      runTimer(minutes, seconds);
    }
  }, [minutes, seconds]);

  return (
    <div className={styles.timer}>
      <p className={styles.countdown}>
        <span>{minutes < 10 ? '0' + minutes : minutes}:</span>
        <span>{seconds < 10 ? '0' + seconds : seconds}</span>
      </p>
      <h3 className={styles.task}>
        <span>Задача 1 - </span>Сверстать сайт
      </h3>
      <div className={styles.controlsContainer}>
        <button onClick={!isStarted ? startTimer : stopTimer}>Старт</button>
        <button onClick={resetTimer}>{isBreak ? 'Пропустить' : 'Стоп'}</button>
      </div>
    </div>
  );
}
