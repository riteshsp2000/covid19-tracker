import React, { useState, useEffect } from 'react';

import { fetchDistrictsData } from '../../api/indianStatesApi';
import styles from '../../css/IndianStates.module.css';
import MoonLoading from '../utils/MoonLoader';

const DistrictsList = ({ stateName }) => {
  const [districtData, setDistrictData] = useState({});

  useEffect(() => {
    const fetchDistrictApi = async () => {
      setDistrictData(await fetchDistrictsData(stateName));
    };

    fetchDistrictApi();
  }, [stateName]);

  const renderDistrictsList = () => {
    return districtData.districtData.map(
      ({ district, confirmed, active, deceased, recovered }) => {
        return (
          <tr className={styles.stateRow} key={district}>
            <td className={styles.columnWidth}>{district}</td>
            <td>{confirmed}</td>
            <td>{active}</td>
            <td>{deceased}</td>
            <td>{recovered}</td>
          </tr>
        );
      }
    );
  };

  const renderTableHeadings = () => {
    if (window.screen.size > 660) {
      return (
        <tr>
          <th>District</th>
          <th>Confirmed</th>
          <th>Active</th>
          <th>Deceased</th>
          <th>Recovered</th>
        </tr>
      );
    }

    return (
      <tr>
        <th className={styles.columnWidth}>Distict</th>
        <th>C</th>
        <th>A</th>
        <th>D</th>
        <th>R</th>
      </tr>
    );
  };

  const loadingFunction = (
    <div className={styles.loadingDiv}>
      <MoonLoading size={50} />
    </div>
  );

  if (!districtData.districtData) {
    return loadingFunction;
  }

  return (
    <div className={styles.stateList} id={styles.districtList}>
      <div className={styles.tableHeader}>
        <table>
          <thead>{renderTableHeadings()}</thead>
        </table>
      </div>
      <div className={styles.tableBody}>
        <table>
          <tbody>{renderDistrictsList()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default DistrictsList;
