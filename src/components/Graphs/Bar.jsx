import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

const MyResponsiveBar = ({
  dataFeed,
  country,
  keys,
  indexBy,
  right,
  color,
  colorBy,
  groupMode,
  layout,
}) => (
  <ResponsiveBar
    data={dataFeed}
    keys={keys}
    indexBy={indexBy}
    margin={{ top: 30, right: right, bottom: 70, left: 80 }}
    padding={0.3}
    colors={{ scheme: color }}
    colorBy={colorBy}
    borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 0,
      tickPadding: 5,
      tickRotation: 45,
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
    layout={layout}
    groupMode={groupMode}
    labelSkipWidth={8}
    labelTextColor='black'
    animate={true}
    motionStiffness={90}
    motionDamping={15}
    legends={[
      {
        dataFrom: 'keys',
        anchor: 'top',
        direction: 'row',
        justify: false,
        translateX: 0,
        translateY: -30,
        itemsSpacing: 2,
        itemWidth: 100,
        itemHeight: 20,
        itemDirection: 'left-to-right',
        itemOpacity: 0.85,
        symbolSize: 10,
        effects: [
          {
            on: 'hover',
            style: {
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
);

export default MyResponsiveBar;
