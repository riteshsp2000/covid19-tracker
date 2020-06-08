import React, { useState, useEffect } from 'react';
import cx from 'classnames';

import { fetchStatesData } from '../../api/indianStatesApi';
import MoonLoading from '../utils/MoonLoader';
import styles from '../../css/IndianStates.module.css';

const IndiaUpdate = () => {
  const [updates, setUpdates] = useState({});

  useEffect(() => {
    const fetchUpdatesApi = async () => {
      const data = await fetchStatesData();
      setUpdates(data.indiaUpdate);
    };

    fetchUpdatesApi();
  }, []);

  const loadingFunction = (
    <div className={styles.loadingDiv}>
      <MoonLoading size={50} />
    </div>
  );

  return (
    <div>
      {!updates.active ? (
        loadingFunction
      ) : (
        <div className={styles.indiaUpdateContainer}>
          <div className={cx(styles.confirmed, styles.box)}>
            <h3>Confirmed</h3>
            {updates.confirmed}
          </div>
          <div className={cx(styles.active, styles.box)}>
            <h3>Active</h3>
            {updates.active}
          </div>
          <div className={cx(styles.deaths, styles.box)}>
            <h3>Deceased</h3>
            {updates.deaths}
          </div>
          <div className={cx(styles.recovered, styles.box)}>
            <h3>Recovered</h3>
            {updates.recovered}
          </div>
        </div>
      )}
    </div>
  );
};

export default IndiaUpdate;
