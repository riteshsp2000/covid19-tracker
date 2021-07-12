import React from 'react';
import styles from '../../css/Footer.module.css';
import cx from 'classnames';

const Footer = ({ scrollToTop }) => {
  return (
    <div className={styles.container}>
      <div className={cx(styles.box, styles.quote)}>
        <h5>Stay Home...</h5>
        <h5>Stay Safe</h5>
      </div>
      <div className={cx(styles.box, styles.icons)}>
        <a href='https://github.com/dewanggogte'>
          <i className={cx(styles.fas, 'fab fa-github fa-2x')}></i>
        </a>
        <a href='https://covid19.mathdro.id/api'>
          <i className={cx(styles.fas, 'fas fa-server fa-2x')}></i>
        </a>
        <a href='https://github.com/dewanggogte/Covid-19-Tracker'>
          <i className={cx(styles.fas, 'fas fa-code fa-2x')}></i>
        </a>
      </div>
      <div className={cx(styles.box, styles.hello)}>
        <h5>Say Hello</h5>
        <a href="mailto:dewanggogte@gmail.com" style={{textDecoration:'none', color: 'white'}}>
        <h5>dewanggogte@gmail.com</h5>
        </a>
      </div>
      <i
        onClick={() => scrollToTop()}
        className={cx(styles.top, 'fas fa-chevron-circle-up fa-2x')}
      ></i>
    </div>
  );
};

export default Footer;
