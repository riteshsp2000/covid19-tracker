import React, { useState, useEffect } from 'react';
import cx from 'classnames';

import IndiaUpdate from './indianStatesComponents/IndiaUpdate';
import StatesList from './indianStatesComponents/StatesList';
import GraphsList from './indianStatesComponents/GraphsList';
import DistrictsList from './indianStatesComponents/DistrictsList';

import styles from '../css/IndianStates.module.css';

const IndianStates = () => {
  const [clicked, setClicked] = useState('');

  const handleStateSelected = (state) => {
    setClicked(state);
  };

  return (
    <div className={styles.container}>
      <div className={styles.indiaMap}>
        <IndiaUpdate />
        <StatesList handleStateSelected={handleStateSelected} state={clicked} />
      </div>

      <div className={styles.indiaInfo}>
        <GraphsList />
      </div>

      <div className={styles.stateMap}>
        <DistrictsList />
      </div>

      <div className={styles.stateInfo}>
        <h1>Helllllo</h1>
      </div>
    </div>
  );
};

export default IndianStates;
