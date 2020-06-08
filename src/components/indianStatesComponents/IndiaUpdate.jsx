import React, { useState, useEffect } from 'react';

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

  console.log(updates);

  return (
    <div>
      {!updates.active ? (
        loadingFunction
      ) : (
        <div className={styles.indiaUpdateContainer}>
          <div className={styles.confirmed}>{updates.confirmed}</div>
          <div className={styles.active}>{updates.active}</div>
          <div className={styles.deaths}>{updates.deaths}</div>
          <div className={styles.recovered}>{updates.recovered}</div>
        </div>
      )}
    </div>
  );
};

export default IndiaUpdate;
