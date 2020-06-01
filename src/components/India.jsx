import React, { useState } from 'react';
import cx from 'classnames';

import NewsSection from './indiaComponents/NewsSection';
import IndiaOverview from './indiaComponents/IndiaOverview';
import DeepDive from './indiaComponents/DeepDive';

import styles from '../css/India.module.css';
import ToggleSwitch from './utils/ToggleSwitch';

const India = () => {
  // Initializing the data to Handle the toggle of total or daily data
  const [checked, setChecked] = useState(false);

  const handleToggleChange = (checked) => {
    setChecked(checked);
  };
  // ================================================================================

  // Rendering the final component
  return (
    <div className={styles.container}>
      <div className={cx(styles.newsSection, styles.box)}>
        <h4>Latest Updates</h4>
        <NewsSection />
      </div>

      <div className={cx(styles.indiaOverview, styles.box)}>
        <h4>
          <span>Indian Covid-19 Stats</span>
          <ToggleSwitch
            checked={checked}
            handleToggleChange={handleToggleChange}
          />
        </h4>
        <IndiaOverview checked={checked} />
      </div>

      <div className={cx(styles.deepDive)}>
        <h4 className={styles.deepDiveTitle}>Deep Dive</h4>
        <DeepDive />
      </div>
    </div>
  );
  // ================================================================================
};

export default India;
