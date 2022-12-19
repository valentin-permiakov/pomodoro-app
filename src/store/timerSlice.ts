import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITimerSettings, timerSettings } from '../globalConst';

export const initialState: ITimerSettings = timerSettings;

export const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    changeTimerStatus: (state) => {
      state.isStarted = !state.isStarted;
    },
    changeBreakStatus: (state) => {
      state.isBreak = !state.isBreak;
    },
    changePauseStatus: (state) => {
      state.isPaused = !state.isPaused;
    },
    changeFirstStartStatus: (state) => {
      state.isFirstStart = !state.isFirstStart;
    },
    changeIsModalOpenStatus: (state, action: PayloadAction<boolean>) => {
      state.isModalOpen = action.payload;
    },
    changeMinutes: (state, action: PayloadAction<number>) => {
      state.pomodoroMinutes = action.payload;
    },
    changeSeconds: (state, action: PayloadAction<number>) => {
      state.pomodoroSeconds = action.payload;
    },
    changePomodoroCount: (state, action: PayloadAction<number>) => {
      state.pomodoroCount = action.payload;
    },
    changeBreakCount: (state, action: PayloadAction<number>) => {
      state.breakCount = action.payload;
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
