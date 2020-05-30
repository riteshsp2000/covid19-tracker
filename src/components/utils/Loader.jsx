import React from 'react';
import FadeLoader from 'react-spinners/FadeLoader';
import { css } from '@emotion/core';

import styles from '../../css/Cards.module.css';

const override = css`
  display: block;
  margin: 0 auto;
`;

const Loading = ({ size }) => {
  return (
    <div className={styles.loader}>
      <FadeLoader
        css={override}
        size={size}
        color={'#000000'}
        loading={true}
        radius={10}
        height={30}
        width={11}
        margin={20}
      />
    </div>
  );
};

export default Loading;
