import { getRelativePosition } from 'chart.js/helpers';
import { chartTickCallback } from './utils/chartTickCallback';

export interface ITimerSettings {
  isFirstStart: boolean;
  isStarted: boolean;
  isBreak: boolean;
  isPaused: boolean;
  pomodoroMinutes: number;
  pomodoroSeconds: number;
  breakMinutes: number;
  breakSeconds: number;
  bigBreakMinutes: number;
  bigBreakSeconds: number;
  pomodoroCount: number;
  breakCount: number;
  isModalOpen: boolean;
}

export const timerSettings: ITimerSettings = {
  isFirstStart: true,
  isStarted: false,
  isBreak: false,
  isPaused: false,
  pomodoroMinutes: 25,
  pomodoroSeconds: 0,
  breakMinutes: 5,
  breakSeconds: 0,
  bigBreakMinutes: 15,
  bigBreakSeconds: 0,
  pomodoroCount: 1,
  breakCount: 1,
  isModalOpen: false,
};

export const DAYS = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
];

const Data = [
  { date: 'Fri Dec 30 2022', pomodoro: 110, break: 10 },
  { date: 'Sat Dec 31 2022', pomodoro: 20, break: 10 },
  { date: 'Sun Jan 01 2023', pomodoro: 20, break: 10 },
  { date: 'Mon Jan 02 2023', pomodoro: 0, break: 10 },
  { date: 'Tue Jan 03 2023', pomodoro: 50, break: 10 },
  { date: 'Wed Jan 04 2023', pomodoro: 20, break: 10 },
  { date: 'Thu Jan 05 2023', pomodoro: 250, break: 45 },
];

export const CHART_OPTIONS = {
  layout: {
    padding: {
      top: 30,
      bottom: 30,
      left: 20,
      right: 20,
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onHover: (e: any) => {
    const chartPosition = getRelativePosition(e, e.chart);
    const index = e.chart.scales.x.getValueForPixel(chartPosition.x);
    console.log(Data[index]);
  },

  scales: {
    y: {
      ticks: {
        callback: chartTickCallback,
        stepSize: 0.5,
      },
      position: 'right' as const,
    },
  },
};
