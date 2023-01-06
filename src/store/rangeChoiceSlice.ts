import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = 'Эта неделя';

export const rangeChoiceSlice = createSlice({
  name: 'rangeChoice',
  initialState,
  reducers: {
    changeRange: (state, action: PayloadAction<string>) => {
      return (state = action.payload);
    },
  },
});

export const { changeRange } = rangeChoiceSlice.actions;
