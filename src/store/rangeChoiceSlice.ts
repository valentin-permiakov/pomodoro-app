import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IRangeChoice {
  text: string;
  weekIndex: number;
  dayIndex: number;
}

const initialState: IRangeChoice = {
  text: 'Эта неделя',
  weekIndex: 0,
  dayIndex: 0,
};

export const rangeChoiceSlice = createSlice({
  name: 'rangeChoice',
  initialState,
  reducers: {
    changeRange: (state, action: PayloadAction<IRangeChoice>) => {
      return (state = action.payload);
    },
    changeDayIndex: (state, action: PayloadAction<number>) => {
      state.dayIndex = action.payload;
    },
  },
});

export const { changeRange, changeDayIndex } = rangeChoiceSlice.actions;
