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
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
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
    console.log(e);
  },
  scales: {
    y: {
      ticks: {
        callback: chartTickCallback,
        stepSize: 0.5,
      },
      position: 'right' as const,
    },
    x: {
      reverse: true,
    },
  },
};
