import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';

const Chart = () => {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };

    fetchAPI();
  });

  return (
    <div>
      <div>Chart</div>
    </div>
  );
};

export default Chart;
