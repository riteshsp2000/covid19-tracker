import React from 'react';

import IndiaMap from './indianStatesComponents/IndiaMap';
import StatesMap from './indianStatesComponents/StateMap';
import InfoCard from './indianStatesComponents/InfoCard';

import styles from '../css/IndianStates.module.css';

const IndianStates = () => {
  return (
    <div className={styles.container}>
      <div className={styles.indiaMap}>
        <IndiaMap />
      </div>

      <div className={styles.indiaInfo}>
        <InfoCard />
      </div>

      <div className={styles.stateMap}>
        <StatesMap />
      </div>

      <div className={styles.stateInfo}>
        <InfoCard />
      </div>
    </div>
  );
};

export default IndianStates;
