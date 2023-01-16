/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import styles from './timer.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { DeleteTask } from '../../DeleteTask/DeleteTask';
import { changeIsModalOpenStatus } from '../../store/timerSlice';
import { TimerContols } from './TimerContols';
import { Countdown } from './Countdown';
import { runTimer } from '../../utils/runTimer';
import { increasePomorodo } from '../../store/todoSlice';

interface ITimerProps {
  taskName?: string;
  taskLength?: number;
}

let timeOut: number;

export const Timer = ({ taskName = 'Add a task' }: ITimerProps) => {
  const dispatch = useDispatch();

  const isStarted = useSelector((state: RootState) => state.timer.isStarted);
  const isBreak = useSelector((state: RootState) => state.timer.isBreak);
  const isPaused = useSelector((state: RootState) => state.timer.isPaused);
  const isFirstStart = useSelector(
    (state: RootState) => state.timer.isFirstStart
  );
  const isModalOpened = useSelector(
    (state: RootState) => state.timer.isModalOpen
  );

  const minutes = useSelector((state: RootState) => state.timer.currentMinutes);
  const seconds = useSelector((state: RootState) => state.timer.currentSeconds);
  const breakCount = useSelector((state: RootState) => state.timer.breakCount);
  const pomodoroCount = useSelector(
    (state: RootState) => state.timer.pomodoroCount
  );
  const pauseStamp = useSelector((state: RootState) => state.timer.pauseStamp);

  const taskList = useSelector((state: RootState) => state.todo);

  useEffect(() => {
    if (isStarted) {
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

      document.title = `${isBreak ? 'Break' : 'Pomodoro'} ${
        minutes < 10 ? '0' + minutes : minutes
      }:${seconds < 10 ? '0' + seconds : seconds}`;
    } else {
      document.title = 'Pomodoro Web App';
    }
  }, [minutes, seconds]);

  return (
    <div className={styles.timer}>
      <Countdown minutes={minutes} seconds={seconds} isPaused={isPaused} />
      <h3 className={styles.task}>
        <span>Task - </span>
        {taskName}
      </h3>
      <TimerContols
        timeOut={timeOut}
        runTimer={runTimer}
        isStarted={isStarted}
        isBreak={isBreak}
        isPaused={isPaused}
        isFirstStart={isFirstStart}
        minutes={minutes}
        seconds={seconds}
        pomodoroCount={pomodoroCount}
        breakCount={breakCount}
        taskList={taskList}
        dispatch={dispatch}
        pauseStamp={pauseStamp}
      />
      {isModalOpened && (
        <DeleteTask
          onClose={() => {
            dispatch(changeIsModalOpenStatus(false));
            dispatch(increasePomorodo(taskList[0].timeStamp));
          }}
          timestamp={taskList[0].timeStamp}
        />
      )}
    </div>
  );
};
