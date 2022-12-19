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
  // changePauseStatus,
  changePomodoroCount,
  changeSeconds,
  changeTimerStatus,
  initialState,
} from '../../store/timerSlice';
// import { removeTodoItem } from '../../store/todoSlice';
import { TimerContols } from './TimerContols';
import { Countdown } from './Countdown';

interface ITimerProps {
  taskName?: string;
  taskLength?: number;
}

let timeOut: NodeJS.Timeout;
export function Timer({
  taskName = 'Добавьте задание',
  taskLength = 1,
}: ITimerProps) {
  const [isModalOpened, setIsModalOpened] = useState(false);
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

  const runTimer = (minutes: number, seconds: number) => {
    timeOut = setTimeout(() => {
      if (seconds > 0) {
        dispatch(changeSeconds(seconds - 1));
      }
      if (seconds === 0) {
        if (minutes === 0) {
          if (pomodoroCount === taskLength && taskList.length !== 0) {
            setIsModalOpened(true);
          }
          clearTimeout(timeOut);
          dispatch(changeBreakStatus());
          dispatch(changeTimerStatus());
          dispatch(changeFirstStartStatus());
          dispatch(
            !isBreak
              ? changeBreakCount(breakCount + 1)
              : changePomodoroCount(pomodoroCount + 1)
          );
          dispatch(
            changeMinutes(
              isBreak
                ? initialState.pomodoroMinutes
                : breakCount % 4 === 0 // Check if it's time for a big break
                ? initialState.bigBreakMinutes
                : initialState.breakMinutes
            )
          );
          dispatch(
            changeSeconds(
              isBreak
                ? initialState.pomodoroSeconds
                : breakCount % 4 === 0 // Check if it's time for a big break
                ? initialState.bigBreakSeconds
                : initialState.breakSeconds
            )
          );
        } else {
          dispatch(changeMinutes(minutes - 1));
          dispatch(changeSeconds(59));
        }
      }
    }, 1000);
  };

  useEffect(() => {
    if (isStarted) {
      runTimer(minutes, seconds);
    }
  }, [minutes, seconds]);

  return (
    <div className={styles.timer}>
      <Countdown minutes={minutes} seconds={seconds} isPaused={isPaused} />
      <h3 className={styles.task}>
        <span>Задача - </span>
        {taskName}
      </h3>
      <TimerContols timeOut={timeOut} runTimer={runTimer} />
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
