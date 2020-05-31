import React, { useState, useEffect } from 'react';

import { fetchTotalData, fetchDailyData } from '../../api/indiaApi';
import styles from '../../css/India.module.css';
import Loader from '../utils/Loader';
import Line from '../graphs/Line';

const IndiaOverview = ({ checked }) => {
  const [totalData, setTotalData] = useState({});
  const [dailyData, setDailyData] = useState({});

  // Component Did Mount to fetch the Data
  useEffect(() => {
    const fetchApiTotal = async () => {
      setTotalData(await fetchTotalData());
    };

    const fetchApiDaily = async () => {
      setDailyData(await fetchDailyData());
    };

    fetchApiDaily();
    fetchApiTotal();
  }, []);

  // Calculating the ticks to show on the x axis
  const calculateTicks = () => {
    if (!totalData) {
      return null;
    }

    if (!totalData.date) {
      return null;
    }
    return totalData.date.filter((_, i) => !(i % 8));
  };
  const tickValues = calculateTicks();

  const renderLineGraph = totalData.dataFeed ? (
    <div className={styles.displayGraph}>
      <Line
        dataFeed={checked ? dailyData.dataFeed : totalData.dataFeed}
        ticks={16}
        tickValues={tickValues}
        color={'category10'}
        bottom={120}
        angle={45}
      />
    </div>
  ) : null;

  if (!totalData) {
    return <Loader />;
  }

  return <div>{renderLineGraph}</div>;
};

export default IndiaOverview;
