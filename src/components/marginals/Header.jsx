import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import styles from '../../css/Header.module.css';
import image from '../../img/title-image.png';

const Headers = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  const handleMenuToggle = () => {
    if (menuToggle) {
      setMenuToggle(false);
    } else {
      setMenuToggle(true);
    }
  };

  return (
    <div className={styles.headerContainer}>
      <div className={styles.imgDiv}>
        <img src={image} alt='Icon' className={styles.headerImage} />
      </div>
      <ul className={menuToggle ? styles.ulHeaderExpand : styles.ulHeader}>
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
        <li className={styles.navLinks}>
          <NavLink
            to='/helpline'
            exact
            className={styles.link}
            activeClassName={styles.activeClass}
          >
            Helpline
          </NavLink>
        </li>
      </ul>
      <button className={styles.menu} onClick={() => handleMenuToggle()}>
        <i className='fas fa-bars fa-3x'></i>
      </button>
    </div>
  );
};

export default Headers;
