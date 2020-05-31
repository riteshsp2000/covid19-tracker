import React from 'react';
import CountUp from 'react-countup';

import styles from '../../css/Cards.module.css';

const Card = ({ title, time, value, lastUpdate }) => {
  return (
    <div className={styles.card}>
      <h4 className={styles.title}>{title}</h4>
      <h3 className={styles.value}>
        <CountUp start={0} end={value} duration={time} separator=',' />
      </h3>
      <h5 className={styles.date}>{`Last Updated ${new Date(
        lastUpdate
      ).toDateString()}`}</h5>
    </div>
  );
};

export default Card;
