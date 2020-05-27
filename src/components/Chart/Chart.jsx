import React, { useState, useEffect } from 'react';

import { fetchDailyData } from '../../api';
import styles from './Chart.module.css';
import Line from '../Graphs/Line';
import MyResponsiveBar from '../Graphs/Bar';

const Chart = ({ data, country }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };

    fetchAPI();
  }, []);

  const lineChart = data.confirmed ? (
    <div className={styles.displayGraph}>
      <Line dataFeed={dailyData} />
    </div>
  ) : null;

  const barData = data.confirmed
    ? [
        {
          type: 'Infected',
          count: data.confirmed.value,
          'hot dogColor': 'hsl(101, 70%, 50%)',
        },
        {
          type: 'Deaths',
          count: data.deaths.value,
          'hot dogColor': 'hsl(101, 70%, 50%)',
        },
        {
          type: 'Recovered',
          count: data.recovered.value,
          'hot dogColor': 'hsl(101, 70%, 50%)',
        },
      ]
    : null;

  const barChart = data.confirmed ? (
    <div className={styles.displayGraph}>
      <MyResponsiveBar dataFeed={barData} country={country} />
    </div>
  ) : null;

  return (
    <div className={styles.container}>{country ? barChart : lineChart}</div>
  );
};

export default Chart;
