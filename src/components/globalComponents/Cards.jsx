import React from 'react';

import styles from '../../css/Cards.module.css';
import Loader from '../utils/Loader';
import Card from './Card';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return <Loader />;
  }

  return (
    <div className={styles.container}>
      <Card
        title='Confirmed'
        time={2.5}
        value={confirmed.value}
        lastUpdate={lastUpdate}
        className={styles.first}
      />

      <Card
        title='Recovered'
        time={2}
        value={recovered.value}
        lastUpdate={lastUpdate}
        className={styles.second}
      />

      <Card
        title='Deceased'
        time={2}
        value={deaths.value}
        lastUpdate={lastUpdate}
        className={styles.third}
      />
    </div>
  );
};

export default Cards;
