import React, { useState, useEffect } from 'react';
import cx from 'classnames';

import { fetchStatesDailyData } from '../../api/indianStatesApi';
import styles from '../../css/IndianStates.module.css';
import MoonLoading from '../utils/MoonLoader';
import Line from '../graphs/Line';

const GraphsList = ({ clicked }) => {
  const [area, setArea] = useState({});

  useEffect(() => {
    const fetchApiData = async () => {
      setArea(await fetchStatesDailyData(clicked));
    };
    console.log(area);
    fetchApiData();
  }, [clicked]);

  const tickValues = !area.dates ? null : area.dates.filter((_, i) => !(i % 8));

  if (!area.dates) {
    return (
      <div className={styles.loadingDiv}>
        <MoonLoading size={80} />
      </div>
    );
  }
  console.log(area.confirmed);
  return (
    <div className={styles.graphListParentDiv}>
      <h1>{area.areaName}</h1>
      <div className={styles.graphsListContainer}>
        <div className={cx(styles.confirmedDiv)}>
          <div className={styles.displayGraph}>
            <Line
              dataFeed={area.confirmed}
              ticks={16}
              tickValues={tickValues}
              color={'#ff073a'}
              bottom={30}
              angle={45}
            />
          </div>
        </div>
        <div className={styles.activeDiv}>asdkfjkl</div>
        <div className={styles.deceasedDiv}>adslkfjlkd</div>
        <div className={styles.recoveredDiv}>asjfkldsjl</div>
      </div>
    </div>
  );
};

export default GraphsList;
