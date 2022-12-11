import React from 'react';
import styles from './timer.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useInterval } from '../../hooks/useInterval';
import { RootState } from '../../store/store';
import {
  changeBreakStatus,
  changeMinutes,
  changeSeconds,
  changeTimerStatus,
} from '../../store/timerSlice';
import { initialState } from '../../store/timerSlice';

export function TimerCopy() {
  // const [isStarted, setIsStarted] = useState(false);
  // console.log(isStarted);

  // const [minutes, setMinutes] = useState(0);
  // const [seconds, setSeconds] = useState(10);

  const isStarted = useSelector((state: RootState) => state.timer.isStarted);
  const isBreak = useSelector((state: RootState) => state.timer.isBreak);
  const minutes = useSelector((state: RootState) => state.timer.minutes);
  const seconds = useSelector((state: RootState) => state.timer.seconds);
  const dispatch = useDispatch();

  const handleStart = () => {
    // setIsStarted(true);
    dispatch(changeTimerStatus());
  };
  const handleStop = () => {
    // setIsStarted(false);
    dispatch(changeTimerStatus());
  };
  const handleReset = () => {
    // setIsStarted(false);
    dispatch(changeTimerStatus());
    dispatch(changeMinutes(initialState.minutes));
    dispatch(changeSeconds(initialState.seconds));
    // setMinutes(0);
    // setSeconds(10);
  };

  const countdown = () => {
    if (seconds > 0) {
      // setSeconds(seconds - 1);
      dispatch(changeSeconds(seconds - 1));
    }
    if (seconds === 0) {
      if (minutes === 0) {
        // setIsStarted(false);
        dispatch(changeTimerStatus());
        dispatch(changeBreakStatus());
        dispatch(changeMinutes(!isBreak ? 0 : initialState.minutes));
        dispatch(changeSeconds(!isBreak ? 2 : initialState.seconds));
      } else {
        // setMinutes(minutes - 1);
        // setSeconds(59);
        dispatch(changeMinutes(minutes - 1));
        dispatch(changeSeconds(59));
      }
    }
  };

  useInterval(
    countdown,
    isStarted ? 1000 : null
    // passing null stops the interval
  );

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
        <button
          onClick={!isStarted ? handleStart : handleStop}
          className={styles.controlBtn}
        >
          {!isStarted ? 'Старт' : 'Пауза'}
        </button>
        <button onClick={handleReset} className={styles.controlBtn}>
          Стоп
        </button>
      </div>
    </div>
  );
}
