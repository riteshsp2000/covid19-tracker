import React, { useState, useEffect } from 'react';
import { formatDistance } from 'date-fns';

import { fetchUpdates } from '../../api/indiaApi';
import Loader from '../utils/Loader';
import styles from '../../css/India.module.css';

const NewsSection = () => {
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setUpdates(await fetchUpdates());
    };

    fetchAPI();
  }, []);

  const renderUpdates = () => {
    return updates.map(({ update, timestamp }) => {
      return (
        <div className={styles.update} key={timestamp}>
          <h3 className={styles.title}>{update}</h3>
          <h5 className={styles.time}>
            {'Updated ' +
              formatDistance(new Date(timestamp * 1000), new Date()) +
              ' ago'}
          </h5>
        </div>
      );
    });
  };

  if (!updates) {
    return <Loader />;
  }

  return (
    <div className={styles.newsContainer} id='news-scroll-container'>
      {renderUpdates()}
    </div>
  );
};

export default NewsSection;
