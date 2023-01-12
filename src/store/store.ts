import { configureStore } from '@reduxjs/toolkit';
import timerSlice from './timerSlice';
import { todoSlice } from './todoSlice';
import { colorThemeSlice } from './colorThemeSlice';
import { rangeChoiceSlice } from './rangeChoiceSlice';
import { statisticSlice } from './statisticSlice';

export const store = configureStore({
  reducer: {
    timer: timerSlice,
    todo: todoSlice.reducer,
    colorTheme: colorThemeSlice.reducer,
    rangeChoice: rangeChoiceSlice.reducer,
    statistic: statisticSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
