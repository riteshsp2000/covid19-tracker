import React from 'react';
import { ResponsiveLine } from '@nivo/line';

const Line = ({ dataFeed, ticks, tickValues, color, bottom, angle }) => {
  return (
    <ResponsiveLine
      data={dataFeed}
      margin={{ top: 50, right: 30, bottom: bottom, left: 70 }}
      xScale={{
        type: 'point',
        min: 'auto',
        max: 'auto',
        stacked: true,
        reverse: false,
      }}
      yScale={{
        type: 'linear',
        min: 'auto',
        max: 'auto',
        stacked: false,
        reverse: false,
      }}
      curve='cardinal'
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: 'bottom',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: angle,
        legend: '',
        legendOffset: 80,
        legendPosition: 'middle',
        ticks: ticks,
        tickValues: tickValues,
      }}
      axisLeft={{
        orient: 'left',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: '',
        legendOffset: -80,
        legendPosition: 'middle',
      }}
      colors={{ scheme: color }}
      lineWidth={3}
      pointSize={10}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabel='y'
      pointLabelYOffset={-18}
      enablePointLabel={false}
      useMesh={true}
      enableArea={true}
      areaBaselineValue={0}
      enableGridX={false}
      legends={[
        {
          anchor: 'top',
          direction: 'row',
          justify: false,
          translateX: 0,
          translateY: -30,
          itemsSpacing: 0,
          itemDirection: 'left-to-right',
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: 'circle',
          symbolBorderColor: 'rgba(0, 0, 0, .5)',
          effects: [
            {
              on: 'hover',
              style: {
                itemBackground: 'rgba(0, 0, 0, .03)',
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default Line;
