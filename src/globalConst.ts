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
  pomodoroMinutes: 0,
  pomodoroSeconds: 2,
  breakMinutes: 0,
  breakSeconds: 3,
  bigBreakMinutes: 15,
  bigBreakSeconds: 0,
  pomodoroCount: 1,
  breakCount: 1,
  isModalOpen: false,
};
