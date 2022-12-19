import { AnyAction, Dispatch } from '@reduxjs/toolkit';

import {
  changeBreakCount,
  changeBreakStatus,
  changeFirstStartStatus,
  changeIsModalOpenStatus,
  changeMinutes,
  changePomodoroCount,
  changeSeconds,
  changeTimerStatus,
  initialState,
} from '../store/timerSlice';
import { ITodoItem } from '../store/todoSlice';

export const runTimer = (
  timeOut: NodeJS.Timeout,
  dispatch: Dispatch<AnyAction>,
  isBreak: boolean,
  minutes: number,
  seconds: number,
  pomodoroCount: number,
  breakCount: number,
  taskList: ITodoItem[]
) => {
  const taskLength = taskList[0]?.pomodoroNumber || 1;
  console.log(taskList.length);
  timeOut = setTimeout(() => {
    if (seconds > 0) {
      dispatch(changeSeconds(seconds - 1));
    }
    if (seconds === 0) {
      if (minutes === 0) {
        if (pomodoroCount === taskLength && taskList.length !== 0) {
          dispatch(changeIsModalOpenStatus(true));
          console.log('done!');
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
