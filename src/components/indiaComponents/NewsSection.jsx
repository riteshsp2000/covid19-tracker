import React, { useState, useEffect } from "react";
import { formatDistance } from "date-fns";

import { fetchUpdates } from "../../api/indiaApi";
import MoonLoading from "../utils/MoonLoader";
import styles from "../../css/India.module.css";

const NewsSection = () => {
  // Initializing the State to fetch the Updates when the component loads
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setUpdates(await fetchUpdates());
    };

    fetchAPI();
  }, []);
  // =====================================================================

  // Function to render the Updates in the news section
  const renderUpdates = () => {
    return updates.map(({ update, timestamp }) => {
      return (
        <div className={styles.update} key={timestamp}>
          <h3 className={styles.title}>{update}</h3>
          <h5 className={styles.time}>
            {"Updated " +
              formatDistance(new Date(timestamp * 1000), new Date()) +
              " ago"}
          </h5>
        </div>
      );
    });
  };
  // =====================================================================

  // Conditional rendering depending whether the updates are loaded or not
  if (updates.length === 0) {
    return (
      <div className={styles.loadingDiv}>
        <MoonLoading size={80} />
      </div>
    );
  }

  return (
    <div className={styles.newsContainer} id="news-scroll-container">
      {renderUpdates()}
    </div>
  );
  // =====================================================================
};

export default NewsSection;
