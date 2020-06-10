import React, { useState, useEffect } from 'react';

import { fetchDailyData } from '../../api';
import styles from '../../css/Chart.module.css';
import Line from '../graphs/Line';
import MyResponsiveBar from '../graphs/Bar';

const Chart = ({ data, country }) => {
  // Declaration of dailyData hook and initializing on page load to fetch Graph Data
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };

    fetchAPI();
  }, []);
  // ================================================================================

  // Logic to calculate the number of ticks and tickvalues to be displayed in the graph
  const calculateTicks = () => {
    const confirmedObject = dailyData[0];
    if (!confirmedObject) {
      return null;
    }

    const confirmedArray = confirmedObject.data;
    if (!confirmedArray) {
      return null;
    }

    const ticks = confirmedArray.length;
    const tickValues = confirmedArray
      .map(({ x }) => x)
      .filter((_, i) => !(i % 6));

    return { ticks, tickValues };
  };
  const xValues = calculateTicks();
  // ================================================================================

  // Declaring a Line Chart with appropriate Data and scales
  const lineChart =
    xValues != null ? (
      <div className={styles.displayGraph}>
        <Line
          dataFeed={dailyData}
          ticks={xValues.ticks}
          tickValues={xValues.tickValues}
          color={['#007bff', '#90bff1']}
          bottom={90}
          angle={90}
        />
      </div>
    ) : null;

  // ================================================================================

  // Extracting the bar data to appropriate type and declaring the bar graph Function
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
  // ================================================================================

  // function to render the bar graphs depending upon the selected country
  const barChart = data.confirmed ? (
    <div className={styles.displayGraph}>
      <MyResponsiveBar
        dataFeed={barData}
        country={country}
        keys={['count']}
        indexBy={'type'}
        right={50}
        color={'paired'}
        legend={[]}
        colorBy={'index'}
        groupMode={'stacked'}
        layout={'vertical'}
      />
    </div>
  ) : null;
  // ================================================================================

  // Rendering the Final JSX depending upon the country preferences
  return (
    <div className={styles.container}>{country ? barChart : lineChart}</div>
  );
  // ================================================================================
};

export default Chart;
