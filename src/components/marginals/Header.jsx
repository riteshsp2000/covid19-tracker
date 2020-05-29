import React from 'react';
import { NavLink } from 'react-router-dom';
import cx from 'classnames';

import styles from '../../css/Header.module.css';
import image from '../../img/title-image.png';

const Headers = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.imgDiv}>
        <img src={image} alt='Icon' className={styles.headerImage} />
      </div>
      <ul className={styles.ulHeader}>
        <li className={styles.navLinks}>
          <NavLink
            to='/'
            className={styles.link}
            activeClassName={styles.activeClass}
          >
            Global
          </NavLink>
        </li>
        <li className={styles.navLinks}>
          <NavLink
            to='/india'
            className={styles.link}
            exact
            activeClassName={styles.activeClass}
          >
            India
          </NavLink>
        </li>
        <li className={styles.navLinks}>
          <NavLink
            to='/indianStates'
            exact
            className={styles.link}
            activeClassName={styles.activeClass}
          >
            Indian States
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Headers;
