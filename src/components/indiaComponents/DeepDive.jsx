import React, { useState, useEffect } from 'react';
import cx from 'classnames';

import styles from '../../css/India.module.css';
import {
  fetchTestedData,
  fetchMonthlyData,
  fetchStateData,
  fetchAgeData,
} from '../../api/indiaApi';

import MyResponsivePie from '../graphs/Pie';
import Line from '../graphs/Line';
import MyResponsiveBar from '../graphs/Bar';
import MyResponsiveTreeMap from '../graphs/TreeMap';
import MoonLoading from '../utils/MoonLoader';

const DeepDive = () => {
  // Initializing state and fetching the required data when the component loads
  const [tests, setTests] = useState({});
  const [monthlyData, setMonthlyData] = useState([]);
  const [statesData, setStatesData] = useState([]);
  const [ageData, setAgeData] = useState({});

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

    const fetchApiAge = async () => {
      setAgeData(await fetchAgeData());
    };

    fetchApiAge();
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
      <div className={cx(styles.graphFirst, styles.box)}>
        {!tests.date ? (
          loadingFunction
        ) : (
          <Line
            dataFeed={tests.finalData}
            ticks={10}
            tickValues={tickValuesTests}
            color={'purpleRed_green'}
            bottom={80}
            angle={45}
          />
        )}
        <h5 className={styles.ddGraphTitle}>People Tested</h5>
      </div>

      <div className={cx(styles.graphSecond, styles.box)}>
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
            groupMode={'stacked'}
            layout={'horizontal'}
          />
        )}
        <h5 className={styles.ddGraphTitle}>Cases by Months</h5>
      </div>

      <div className={cx(styles.graphThird, styles.box)}>
        {statesData.length === 0 ? (
          loadingFunction
        ) : (
          <MyResponsivePie data={statesData} />
        )}
        <h5 className={styles.ddGraphTitle}>Most Affected States</h5>
      </div>

      <div className={cx(styles.graphFourth, styles.box)}>
        {!ageData.root ? (
          loadingFunction
        ) : (
          <MyResponsiveTreeMap root={ageData} />
        )}
        <h5 className={styles.ddGraphTitle}>
          Patients by Age (Sample size: 5000)
        </h5>
      </div>
    </div>
  );
  // ================================================================================
};

export default DeepDive;
