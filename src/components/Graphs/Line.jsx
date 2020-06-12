import React from 'react';
import { ResponsiveLine } from '@nivo/line';

const Line = ({
  dataFeed,
  ticks,
  tickValues,
  color,
  bottom,
  angle,
  theme,
  legendX,
  legendY,
}) => {
  return (
    <ResponsiveLine
      data={dataFeed}
      margin={{ top: 30, right: 35, bottom: bottom, left: 80 }}
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
        legend: legendX,
        legendOffset: 80,
        legendPosition: 'middle',
        ticks: ticks,
        tickValues: tickValues,
        color: '#ff073a',
      }}
      axisLeft={{
        orient: 'left',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: legendY,
        legendOffset: -75,
        legendPosition: 'middle',
      }}
      colors={color}
      lineWidth={3}
      pointSize={6}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={1}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabel='y'
      pointLabelYOffset={-18}
      enablePointLabel={false}
      useMesh={true}
      enableArea={true}
      areaBaselineValue={0}
      enableGridX={false}
      theme={theme}
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
