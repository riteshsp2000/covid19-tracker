import React, { useState } from 'react';
import cx from 'classnames';

import NewsSection from './indiaComponents/NewsSection';
import IndiaOverview from './indiaComponents/IndiaOverview';
import styles from '../css/India.module.css';
import ToggleSwitch from './utils/ToggleSwitch';

const India = () => {
  const [checked, setChecked] = useState(false);

  const handleToggleChange = (checked) => {
    setChecked(checked);
  };

  return (
    <div className={styles.container}>
      <div className={cx(styles.newsSection, styles.box)}>
        <h4>Latest Updates</h4>
        <NewsSection />
      </div>
      <div className={cx(styles.indiaOverview, styles.box)}>
        <h4>
          <span>Indian Covid-19 Statistics</span>
          <ToggleSwitch
            checked={checked}
            handleToggleChange={handleToggleChange}
          />
        </h4>
        <IndiaOverview checked={checked} />
      </div>
    </div>
  );
};

export default India;
