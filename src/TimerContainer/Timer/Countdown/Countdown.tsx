import React from 'react';
import styles from './countdown.scss';

interface ICountdownProps {
  minutes: number;
  seconds: number;
  isPaused: boolean;
}

export function Countdown({ minutes, seconds, isPaused }: ICountdownProps) {
  return (
    <p
      className={`${styles.countdown} ${
        isPaused ? styles.pausedCountdown : ''
      }`}
    >
      <span>{minutes < 10 ? '0' + minutes : minutes}:</span>
      <span>{seconds < 10 ? '0' + seconds : seconds}</span>
    </p>
  );
}
