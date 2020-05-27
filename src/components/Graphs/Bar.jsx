import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

const MyResponsiveBar = ({ dataFeed, country }) => (
  <ResponsiveBar
    data={dataFeed}
    keys={['count']}
    indexBy='type'
    margin={{ top: 30, right: 50, bottom: 70, left: 80 }}
    padding={0.3}
    colors={{ scheme: 'paired' }}
    colorBy='index'
    borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 0,
      tickPadding: 5,
      tickRotation: 0,
      legend: '',
      legendPosition: 'middle',
      legendOffset: -550,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: '',
      legendPosition: 'middle',
      legendOffset: -40,
    }}
    labelSkipWidth={8}
    labelTextColor='black'
    animate={true}
    motionStiffness={90}
    motionDamping={15}
  />
);

export default MyResponsiveBar;
