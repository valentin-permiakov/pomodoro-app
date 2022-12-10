/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import styles from './timer.scss';

export function Timer() {
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(10);
  let interval: NodeJS.Timeout;

  const startTimer = () => {
    interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
  };

  // useEffect(() => {
  //   interval = setInterval(() => {
  //     if (seconds > 0) {
  //       setSeconds(seconds - 1);
  //     }
  //     if (seconds === 0) {
  //       if (minutes === 0) {
  //         clearInterval(interval);
  //       } else {
  //         setMinutes(minutes - 1);
  //         setSeconds(59);
  //       }
  //     }
  //   }, 1000);

  //   return () => clearInterval(interval);
  // });

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
        <button onClick={() => startTimer()}>Старт</button>
        <button>Стоп</button>
      </div>
    </div>
  );
}
