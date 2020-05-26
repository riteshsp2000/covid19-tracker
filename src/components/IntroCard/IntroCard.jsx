import React from 'react';
import styles from './IntroCard.module.css';

const IntroCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h5>
          Coronavirus <span>Covid-19</span>
        </h5>
        <h2>World Live Tracker</h2>
        <h4>Stay Home, Stay Safe</h4>
        <p>
          The best way to prevent and slow down transmission is to be well
          informed about the Covid-19 disease. Protect yourself and others from
          infection by washing your hands at-least 20 sec nd not touching your
          face.
        </p>
      </div>
      <div className={styles.imgDiv}>
        <img
          src={require('../../img/distancing.png')}
          alt='Social Distancing'
        />
      </div>
    </div>
  );
};

export default IntroCard;
