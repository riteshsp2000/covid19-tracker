import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cs from 'classnames';
import { css } from '@emotion/core';
import FadeLoader from 'react-spinners/FadeLoader';

import styles from '../../css/Cards.module.css';

const override = css`
  display: block;
  margin: 0 auto;
`;

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return (
      <div className={styles.loader}>
        <FadeLoader
          css={override}
          size={150}
          color={'#000000'}
          loading={true}
          radius={10}
          height={30}
          width={11}
          margin={20}
        />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify='center'>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cs(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography color='textSecondary' gutterBottom={true}>
              Infected
            </Typography>
            <Typography variant='h5'>
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator=','
              />
            </Typography>
            <Typography color='textSecondary' gutterBottom={true}>
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant='body2'>
              Number of active cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>

        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cs(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography color='textSecondary' gutterBottom={true}>
              Recovered
            </Typography>
            <Typography variant='h5'>
              <CountUp
                start={0}
                end={recovered.value}
                duration={2}
                separator=','
              />
            </Typography>
            <Typography color='textSecondary' gutterBottom={true}>
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant='body2'>
              Number of recoveries from COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cs(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography color='textSecondary' gutterBottom={true}>
              Deaths
            </Typography>
            <Typography variant='h5'>
              <CountUp
                start={0}
                end={deaths.value}
                duration={1.5}
                separator=','
              />
            </Typography>
            <Typography color='textSecondary' gutterBottom={true}>
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant='body2'>
              Number of deaths caused COVID-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
