import React, { useState, useEffect } from 'react';

import { fetchTotalData, fetchDailyData } from '../../api/indiaApi';
import styles from '../../css/India.module.css';
import MoonLoading from '../utils/MoonLoader';
import Line from '../graphs/Line';

const IndiaOverview = ({ checked }) => {
  // Fetching the Daily and Total data when the component loads
  const [totalData, setTotalData] = useState({});
  const [dailyData, setDailyData] = useState({});

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
  // ================================================================================

  // Calculating the ticks to show on the x axis dynamically depending upon the number on data point
  const tickValues = !totalData.date
    ? null
    : totalData.date.filter((_, i) => !(i % 8));
  // ================================================================================

  // Function to render the graph along with which data to show depending on the toggle state
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
  // ================================================================================

  // Final Conditional rendering depending upon whether the data is loaded or not
  if (!totalData.dataFeed) {
    return (
      <div className={styles.loadingDiv}>
        <MoonLoading size={80} />
      </div>
    );
  }

  return <div>{renderLineGraph}</div>;
  // ================================================================================
};

export default IndiaOverview;
