import React, { useState, useEffect } from 'react';
import _ from 'lodash';

import { fetchDistrictsData } from '../../api/indianStatesApi';
import styles from '../../css/IndianStates.module.css';

const DistrictsList = ({ stateName }) => {
  // const [clickedDistrict, setClickedDistrict] = useState('')
  const [districtData, setDistrictData] = useState({});

  useEffect(() => {
    const fetchDistrictApi = async () => {
      setDistrictData(await fetchDistrictsData(stateName));
    };

    console.log(stateName);
    fetchDistrictApi();
  }, [stateName]);

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

  // const loadingFunction = (
  //   <div className={styles.loadingDiv}>
  //     <MoonLoading size={50} />
  //   </div>
  // );

  // if (states.length === 0) {
  //   return loadingFunction;
  // }

  return (
    <div className={styles.stateList}>
      <div className={styles.tableHeader}>
        <table>
          <thead>{renderTableHeadings()}</thead>
        </table>
      </div>
      <div className={styles.tableBody}>
        <table>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
};

export default DistrictsList;
