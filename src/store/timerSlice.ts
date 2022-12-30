import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITimerSettings, timerSettings } from '../globalConst';

interface IInitialState extends ITimerSettings {
  currentMinutes: number;
  currentSeconds: number;
  today: string;
}
if (!localStorage.getItem('timer'))
  localStorage.setItem(
    'timer',
    JSON.stringify({
      ...timerSettings,
      currentMinutes: timerSettings.pomodoroMinutes,
      currentSeconds: timerSettings.pomodoroSeconds,
    })
  );

const LSTimer: IInitialState = JSON.parse(localStorage.getItem('timer') || '');

export const initialState: IInitialState = {
  isFirstStart: LSTimer.isFirstStart,
  isStarted: LSTimer.isStarted,
  isBreak: LSTimer.isBreak,
  isPaused: LSTimer.isPaused,
  pomodoroMinutes: timerSettings.pomodoroMinutes,
  pomodoroSeconds: timerSettings.pomodoroSeconds,
  breakMinutes: timerSettings.breakMinutes,
  breakSeconds: timerSettings.breakSeconds,
  bigBreakMinutes: timerSettings.bigBreakMinutes,
  bigBreakSeconds: timerSettings.bigBreakSeconds,
  pomodoroCount: LSTimer.pomodoroCount,
  breakCount: LSTimer.breakCount,
  isModalOpen: LSTimer.isModalOpen,
  currentMinutes: timerSettings.pomodoroMinutes,
  currentSeconds: timerSettings.pomodoroSeconds,
  today: new Date().toDateString(),
};

if (initialState.isBreak) {
  // check if it was time for a break and set the time accordinagly
  initialState.currentMinutes = initialState.breakMinutes;
  initialState.currentSeconds = initialState.breakSeconds;
  if ((initialState.breakCount - 1) % 4 === 0) {
    initialState.currentMinutes = initialState.bigBreakMinutes;
    initialState.currentSeconds = initialState.bigBreakSeconds;
  }
}

if (
  // check if timer was paused and then reloaded
  (initialState.currentMinutes !== LSTimer.currentMinutes ||
    initialState.currentSeconds !== LSTimer.currentSeconds) &&
  LSTimer.currentMinutes !== 0 &&
  LSTimer.currentSeconds !== 0
) {
  initialState.currentMinutes = LSTimer.currentMinutes;
  initialState.currentSeconds = LSTimer.currentSeconds;
}

// resets breakCount and pomodoroCount on a new day
if (new Date().toDateString() !== LSTimer.today) {
  initialState.breakCount = 1;
  initialState.pomodoroCount = 1;
  initialState.isBreak = false;
  initialState.isStarted = false;
  initialState.isPaused = false;
  initialState.isFirstStart = true;
  initialState.currentMinutes = timerSettings.pomodoroMinutes;
  initialState.currentSeconds = timerSettings.pomodoroSeconds;
}

export const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    changeTimerStatus: (state) => {
      state.isStarted = !state.isStarted;
      localStorage.setItem('timer', JSON.stringify(state));
    },
    changeBreakStatus: (state) => {
      state.isBreak = !state.isBreak;
      localStorage.setItem('timer', JSON.stringify(state));
    },
    changePauseStatus: (state) => {
      state.isPaused = !state.isPaused;
      localStorage.setItem('timer', JSON.stringify(state));
    },
    changeFirstStartStatus: (state) => {
      state.isFirstStart = !state.isFirstStart;
      localStorage.setItem('timer', JSON.stringify(state));
    },
    changeIsModalOpenStatus: (state, action: PayloadAction<boolean>) => {
      state.isModalOpen = action.payload;
      localStorage.setItem('timer', JSON.stringify(state));
    },
    changeMinutes: (state, action: PayloadAction<number>) => {
      state.currentMinutes = action.payload;
    },
    changeSeconds: (state, action: PayloadAction<number>) => {
      state.currentSeconds = action.payload;
    },
    changePomodoroCount: (state, action: PayloadAction<number>) => {
      state.pomodoroCount = action.payload;
      localStorage.setItem('timer', JSON.stringify(state));
    },
    changeBreakCount: (state, action: PayloadAction<number>) => {
      state.breakCount = action.payload;
      localStorage.setItem('timer', JSON.stringify(state));
    },
  },
});

export const {
  changeTimerStatus,
  changeBreakStatus,
  changePauseStatus,
  changeFirstStartStatus,
  changeIsModalOpenStatus,
  changeMinutes,
  changeSeconds,
  changePomodoroCount,
  changeBreakCount,
} = timerSlice.actions;
export default timerSlice.reducer;
