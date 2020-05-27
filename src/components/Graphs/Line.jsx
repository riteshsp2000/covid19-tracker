import React from 'react';
import { ResponsiveLine } from '@nivo/line';

const Line = ({ dataFeed }) => {
  return (
    <ResponsiveLine
      data={dataFeed}
      margin={{ top: 50, right: 40, bottom: 90, left: 90 }}
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
        tickRotation: 45,
        legend: '',
        legendOffset: 80,
        legendPosition: 'middle',
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
      colors={{ scheme: 'paired' }}
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
// const lineChart = dailyData.length ? (
//   <Line
//     data={{
//       labels: dailyData.map(({ date }) => date),
//       datasets: [
//         {
//           data: dailyData.map(({ deaths }) => deaths),
//           label: 'Deaths',
//           borderColor: 'red',
//           backgroundColor: 'rgba(255, 0, 0, 0.5)',
//           fill: true,
//         },
//         {
//           data: dailyData.map(({ confirmed }) => confirmed),
//           label: 'Deaths',
//           borderColor: 'blue',
//           backgroundColor: 'rgba(0, 0, 255, 0.5)',
//           fill: true,
//         },
//       ],
//     }}
//   />
// ) : null;
