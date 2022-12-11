import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ITimerState {
  isStarted: boolean;
  minutes: number;
  seconds: number;
  isBreak: boolean;
}

export const initialState: ITimerState = {
  isStarted: false,
  minutes: 0,
  seconds: 3,
  isBreak: false,
};

export const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    changeTimerStatus: (state) => {
      state.isStarted = !state.isStarted;
    },
    changeMinutes: (state, action: PayloadAction<number>) => {
      state.minutes = action.payload;
    },
    changeSeconds: (state, action: PayloadAction<number>) => {
      state.seconds = action.payload;
    },
    changeBreakStatus: (state) => {
      state.isBreak = !state.isBreak;
    },
  },
});

export const {
  changeTimerStatus,
  changeMinutes,
  changeSeconds,
  changeBreakStatus,
} = timerSlice.actions;
export default timerSlice.reducer;
