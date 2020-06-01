import React, { useState, useEffect } from 'react';
import cx from 'classnames';

import styles from '../../css/India.module.css';
import {
  fetchTestedData,
  fetchMonthlyData,
  fetchStateData,
} from '../../api/indiaApi';

import MyResponsivePie from '../graphs/Pie';
import Line from '../graphs/Line';
import MyResponsiveBar from '../graphs/Bar';
import MoonLoading from '../utils/MoonLoader';

const DeepDive = () => {
  // Initializing state and fetching the required data when the component loads
  const [tests, setTests] = useState({});
  const [monthlyData, setMonthlyData] = useState([]);
  const [statesData, setStatesData] = useState([]);

  useEffect(() => {
    const fetchApiMonthly = async () => {
      setMonthlyData(await fetchMonthlyData());
    };

    const fetchApiTests = async () => {
      setTests(await fetchTestedData());
    };

    const fetchApiStates = async () => {
      setStatesData(await fetchStateData());
    };

    fetchApiStates();
    fetchApiMonthly();
    fetchApiTests();
  }, []);
  // ================================================================================

  // Calculating the scale ie tickValues for Tested Graph
  const tickValuesTests = !tests.date
    ? null
    : tests.date.filter((_, i) => !(i % 8));

  const loadingFunction = (
    <div className={styles.loadingDiv}>
      <MoonLoading size={50} />
    </div>
  );
  // ================================================================================

  // Rendering the appropriate JSX
  return (
    <div className={styles.graphContainerDD}>
      <div className={cx(styles.graphFirst)}>
        <h5>People Tested</h5>
        {!tests.date ? (
          loadingFunction
        ) : (
          <Line
            dataFeed={tests.finalData}
            ticks={10}
            tickValues={tickValuesTests}
            color={'purpleRed_green'}
            bottom={70}
            angle={45}
          />
        )}
      </div>

      <div className={cx(styles.graphSecond)}>
        <h5>Cases by Months</h5>
        {monthlyData.length === 0 ? (
          loadingFunction
        ) : (
          <MyResponsiveBar
            dataFeed={monthlyData}
            keys={['dead', 'confirmed', 'recovered']}
            indexBy={'month'}
            right={25}
            color={'set1'}
            colorBy={'id'}
            legend={[]}
            groupMode={'stacked'}
            layout={'horizontal'}
          />
        )}
      </div>

      <div className={cx(styles.graphThird)}>
        <h5>Most Affected States</h5>
        {statesData.length === 0 ? (
          loadingFunction
        ) : (
          <MyResponsivePie data={statesData} />
        )}
      </div>

      <div className={cx(styles.graphFourth)}>
        <h5>Fourth Graph</h5>
      </div>
    </div>
  );
  // ================================================================================
};

export default DeepDive;
