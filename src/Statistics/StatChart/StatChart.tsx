import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import styles from './stat-chart.scss';
import { CHART_OPTIONS, DAYS } from '../../globalConst';
import { getRelativePosition } from 'chart.js/helpers';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { changeDayIndex } from '../../store/rangeChoiceSlice';

ChartJS.register(CategoryScale, LinearScale, BarElement);

export const StatChart = () => {
  const stats = useSelector((state: RootState) => state.statistic);
  const weekIndex = useSelector(
    (state: RootState) => state.rangeChoice.weekIndex
  );
  const dispatch = useDispatch();
  const chartData = {
    labels: stats
      .slice(weekIndex, weekIndex + 7)
      .map((data) => DAYS[new Date(data.date).getDay()]),
    datasets: [
      {
        data: stats
          .slice(weekIndex, weekIndex + 7)
          .map((data) => data.pomodoroMin / 60),
        backgroundColor: '#EA8979',
      },
    ],
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const hoverHandler = (e: any) => {
    const chartPosition = getRelativePosition(e, e.chart);
    const index = e.chart.scales.x.getValueForPixel(chartPosition.x);
    if (index === -1 || index === 7) return;

    dispatch(changeDayIndex(index));
  };

  CHART_OPTIONS.onHover = hoverHandler;

  return (
    <section className={styles.chartContainer}>
      <Bar data={chartData} options={CHART_OPTIONS} />
    </section>
  );
};
