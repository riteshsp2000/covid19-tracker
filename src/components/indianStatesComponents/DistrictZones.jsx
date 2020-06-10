import React, { useState, useEffect } from 'react';

import { fetchDistrictZones } from '../../api/indianStatesApi';
import styles from '../../css/IndianStates.module.css';
import MoonLoading from '../utils/MoonLoader';

const DistrictZones = ({ stateName }) => {
  const [zones, setZones] = useState({});

  useEffect(() => {
    const fetchZonesApi = async () => {
      setZones(await fetchDistrictZones(stateName));
    };

    fetchZonesApi();
  }, [stateName]);

  const renderGreenZones = () => {
    return zones.green.map((district) => {
      return (
        <div key={district} className={styles.greenZone}>
          {district}
        </div>
      );
    });
  };

  const renderRedZones = () => {
    return zones.red.map((district) => {
      return (
        <div key={district} className={styles.redZone}>
          {district}
        </div>
      );
    });
  };

  const renderOrangeZones = () => {
    return zones.orange.map((district) => {
      return (
        <div key={district} className={styles.orangeZone}>
          {district}
        </div>
      );
    });
  };

  const loadingFunction = (
    <div className={styles.loadingDiv}>
      <MoonLoading size={50} />
    </div>
  );

  if (!zones.green) {
    return loadingFunction;
  }

  return (
    <div className={styles.zoneContainer}>
      <div>{renderRedZones()}</div>
      <div>{renderOrangeZones()}</div>
      <div>{renderGreenZones()}</div>
    </div>
  );
};

export default DistrictZones;
