import React from "react";
import MoonLoader from "react-spinners/MoonLoader";
import { css } from "@emotion/core";

import styles from "../../css/Cards.module.css";

const override = css`
  display: block;
  margin: 0 auto;
`;

const MoonLoading = ({ size }) => {
  return (
    <div className={styles.loader}>
      <MoonLoader css={override} color={"#000000"} loading={true} size={size} />
    </div>
  );
};

export default MoonLoading;
