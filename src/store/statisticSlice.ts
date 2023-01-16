import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { timerSettings } from '../globalConst';
import { getMissingDates } from '../utils/getMissingDates';

interface IStatisticEntry {
  date: string;
  pomodoroMin: number;
  breakMin: number;
  finishedTaskCount: number;
  pauseMin: number;
  stopCount: number;
}
const today = new Date().toDateString();

const statisticEntry: IStatisticEntry = {
  date: today,
  pomodoroMin: 0,
  breakMin: 0,
  finishedTaskCount: 0,
  pauseMin: 0,
  stopCount: 0,
};

const Data: IStatisticEntry[] = [statisticEntry];

for (let i = 1; i < 21; i++) {
  const DATE = new Date().setDate(new Date().getDate() - i);
  Data.push({ ...statisticEntry, date: new Date(DATE).toDateString() });
}

if (!localStorage.getItem('pomodoroStatistics')) {
  localStorage.setItem('pomodoroStatistics', JSON.stringify(Data));
}

const initialState: IStatisticEntry[] = JSON.parse(
  localStorage.getItem('pomodoroStatistics') || ''
);

// this condition accounts for days when the app was not used and populates the state with missing dates
if (initialState[0].date !== today) {
  const dates = getMissingDates(
    new Date(initialState[0].date),
    new Date(today)
  );
  dates.shift();

  dates.forEach((date) => {
    initialState.unshift({
      ...statisticEntry,
      date: new Date(date).toDateString(),
    });
    initialState.pop();
  });
}

export const statisticSlice = createSlice({
  name: 'statistic',
  initialState,
  reducers: {
    addEntry: (state, action: PayloadAction<IStatisticEntry>) => {
      state.unshift(action.payload);
      state.pop();
    },
    changePomodoroMin: (state) => {
      state[0].pomodoroMin += timerSettings.pomodoroMinutes;
      localStorage.setItem('pomodoroStatistics', JSON.stringify(state));
    },
    changeBreakMin: (state, action: PayloadAction<number>) => {
      state[0].breakMin += action.payload;
      localStorage.setItem('pomodoroStatistics', JSON.stringify(state));
    },
    changeFinishedTaskCount: (state) => {
      state[0].finishedTaskCount += 1;
      localStorage.setItem('pomodoroStatistics', JSON.stringify(state));
    },
    changeStopCount: (state) => {
      state[0].stopCount += 1;
      localStorage.setItem('pomodoroStatistics', JSON.stringify(state));
    },
    changePauseMin: (state, action: PayloadAction<number>) => {
      state[0].pauseMin += action.payload;
      localStorage.setItem('pomodoroStatistics', JSON.stringify(state));
    },
    fixState: (state) => {
      state.shift();
      state.shift();
    },
  },
});

export const {
  addEntry,
  changePomodoroMin,
  changeBreakMin,
  changeFinishedTaskCount,
  changeStopCount,
  changePauseMin,
  fixState,
} = statisticSlice.actions;
