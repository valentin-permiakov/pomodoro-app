import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Highlight } from './Highlight/Highlight';
import styles from './highlights-container.scss';

export const HighlightsContainer = () => {
  const stats = useSelector((state: RootState) => state.statistic);
  const weekIndex = useSelector(
    (state: RootState) => state.rangeChoice.weekIndex
  );
  const dayIndex = useSelector(
    (state: RootState) => state.rangeChoice.dayIndex
  );
  const pausedTime = stats[weekIndex + dayIndex].pauseMin;
  const stopCount = stats[weekIndex + dayIndex].stopCount;
  const breakTime = stats[weekIndex + dayIndex].breakMin;
  const pomodoros = stats[weekIndex + dayIndex].pomodoroMin;
  const focus =
    pomodoros !== 0
      ? Math.round((pomodoros / (pomodoros + breakTime + pausedTime)) * 100)
      : 0;

  return (
    <section className={styles.highlightsSection}>
      <Highlight
        name="Фокус"
        content={focus + '%'}
        icon="focusIcon"
        bgColor={focus !== 0 ? '#FFDDA9' : ''}
        iconColor={focus !== 0 ? '#FFAE35' : ''}
      />
      <Highlight
        name="Время на паузе"
        content={`${pausedTime > 0 ? pausedTime.toFixed() : 0} м`}
        icon="pauseIcon"
        bgColor={pausedTime !== 0 ? '#DFDCFE' : ''}
        iconColor={pausedTime !== 0 ? '#9C97D7' : ''}
      />
      <Highlight
        name="Остановки"
        content={String(stopCount)}
        icon="stopIcon"
        bgColor={stopCount !== 0 ? '#C5F1FF' : ''}
        iconColor={stopCount !== 0 ? '#7FC2D7' : ''}
      />
    </section>
  );
};
