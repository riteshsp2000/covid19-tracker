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

    fetchApiData();
  }, [clicked]);

  const tickValues = !area.dates ? null : area.dates.filter((_, i) => !(i % 8));
  const themeColor = (color) => {
    return {
      axis: {
        ticks: {
          line: {
            stroke: color,
          },
          text: {
            fill: color,
          },
        },
      },
    };
  };

  if (!area.dates) {
    return (
      <div className={styles.loadingDiv}>
        <MoonLoading size={80} />
      </div>
    );
  }

  return (
    <div className={styles.graphListParentDiv}>
      <h2>{area.areaName}</h2>
      <div className={styles.graphsListContainer}>
        <div className={cx(styles.confirmedDiv, styles.boxSizing)}>
          <div className={styles.displayGraph}>
            <Line
              dataFeed={area.confirmed}
              ticks={16}
              tickValues={tickValues}
              color={'#ff073a'}
              bottom={30}
              angle={30}
              theme={themeColor('#ff073a')}
            />
          </div>
        </div>

        <div className={cx(styles.activeDiv, styles.boxSizing)}>
          <div className={styles.displayGraph}>
            <Line
              dataFeed={area.active}
              ticks={16}
              tickValues={tickValues}
              color={'#007bff'}
              bottom={30}
              angle={30}
              theme={themeColor('#007bff')}
            />
          </div>
        </div>

        <div className={cx(styles.deceasedDiv, styles.boxSizing)}>
          <div className={styles.displayGraph}>
            <Line
              dataFeed={area.deceased}
              ticks={16}
              tickValues={tickValues}
              color={'#6c757d'}
              bottom={30}
              angle={30}
              theme={themeColor('#6c757d')}
            />
          </div>
        </div>

        <div className={cx(styles.recoveredDiv, styles.boxSizing)}>
          <div className={styles.displayGraph}>
            <Line
              dataFeed={area.recovered}
              ticks={16}
              tickValues={tickValues}
              color={'#28a745'}
              bottom={30}
              angle={30}
              theme={themeColor('#28a745')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphsList;
