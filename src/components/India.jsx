import React from 'react';
import cx from 'classnames';

import NewsSection from './indiaComponents/NewsSection';
import IndiaOverview from './indiaComponents/IndiaOverview';
import styles from '../css/India.module.css';

const India = () => {
  return (
    <div className={styles.container}>
      <div className={cx(styles.newsSection, styles.box)}>
        <h4>Latest Updates</h4>
        <NewsSection />
      </div>
      <div className={cx(styles.indiaOverview, styles.box)}>
        <h4>Indian Covid-19 Statistics</h4>
        <IndiaOverview />
      </div>
    </div>
  );
};

export default India;
