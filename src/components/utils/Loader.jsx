import React from 'react';
import FadeLoader from 'react-spinners/FadeLoader';
import { css } from '@emotion/core';

import styles from '../../css/Cards.module.css';

const override = css`
  display: block;
  margin: 0 auto;
`;

const Loading = ({ radius, height, width, margin }) => {
  return (
    <div className={styles.loader}>
      <FadeLoader
        css={override}
        color={'#000000'}
        loading={true}
        radius={radius}
        height={height}
        width={width}
        margin={margin}
      />
    </div>
  );
};

export default Loading;
