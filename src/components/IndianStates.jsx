import React, { useState } from "react";

import IndiaUpdate from "./indianStatesComponents/IndiaUpdate";
import StatesList from "./indianStatesComponents/StatesList";
import GraphsList from "./indianStatesComponents/GraphsList";
import DistrictsList from "./indianStatesComponents/DistrictsList";
import DistrictZones from "./indianStatesComponents/DistrictZones";

import styles from "../css/IndianStates.module.css";
// import { fetchDistrictsData } from '../api/indianStatesApi';

const IndianStates = () => {
  const [clickedState, setClickedState] = useState("Maharashtra");

  const handleStateSelected = (state) => {
    setClickedState(state);
  };

  // fetchDistrictsData(clickedState);

  return (
    <div className={styles.container}>
      <div className={styles.indiaMap}>
        <IndiaUpdate />
        <StatesList handleStateSelected={handleStateSelected} />
      </div>

      <div className={styles.indiaInfo}>
        <GraphsList clicked={clickedState} />
      </div>

      <div className={styles.stateMap}>
        <DistrictsList stateName={clickedState} />
      </div>

      <div className={styles.stateInfo}>
        <h2>District Zones</h2>
        <DistrictZones stateName={clickedState} />
      </div>
    </div>
  );
};

export default IndianStates;
