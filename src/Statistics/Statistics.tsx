import React from 'react';
import { DayWork } from './DayWork';
import { HighlightsContainer } from './HighlightsContainer';
import { PomodoroCount } from './PomodoroCount';
import { StatChart } from './StatChart';
import { StatHeader } from './StatHeader';
import styles from './statistics.scss';

export const Statistics = () => {
  return (
    <div className={styles.statContainer}>
      <StatHeader />
      <DayWork />
      <StatChart />
      <PomodoroCount />
      <HighlightsContainer />
    </div>
  );
};
