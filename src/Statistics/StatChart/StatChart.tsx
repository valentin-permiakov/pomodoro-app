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

ChartJS.register(CategoryScale, LinearScale, BarElement);

export const StatChart = () => {
  const Data: { date: string; pomodoro: number; break: number }[] = [
    { date: 'Fri Dec 30 2022', pomodoro: 110, break: 10 },
    { date: 'Sat Dec 31 2022', pomodoro: 20, break: 10 },
    { date: 'Sun Jan 01 2023', pomodoro: 20, break: 10 },
    { date: 'Mon Jan 02 2023', pomodoro: 0, break: 10 },
    { date: 'Tue Jan 03 2023', pomodoro: 50, break: 10 },
    { date: 'Wed Jan 04 2023', pomodoro: 20, break: 10 },
    { date: 'Thu Jan 05 2023', pomodoro: 250, break: 45 },
  ];

  const chartData = {
    labels: Data.map((data) => DAYS[new Date(data.date).getDay()]),
    datasets: [
      {
        data: Data.map((data) => data.pomodoro / 60),
        backgroundColor: '#EA8979',
      },
    ],
  };

  return (
    <section className={styles.chartContainer}>
      <Bar data={chartData} options={CHART_OPTIONS} />
    </section>
  );
};
