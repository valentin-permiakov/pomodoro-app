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
