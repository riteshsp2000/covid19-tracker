import React from "react";
import { ResponsivePie } from "@nivo/pie";

const MyResponsivePie = ({ data }) => (
  <ResponsivePie
    data={data}
    margin={{ top: 30, right: 90, bottom: 50, left: 90 }}
    sortByValue={true}
    innerRadius={0.5}
    padAngle={1}
    cornerRadius={4}
    colors={{ scheme: "brown_blueGreen" }}
    borderWidth={1}
    borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
    radialLabelsSkipAngle={10}
    radialLabelsTextXOffset={6}
    radialLabelsTextColor="#333333"
    radialLabelsLinkOffset={0}
    radialLabelsLinkDiagonalLength={16}
    radialLabelsLinkHorizontalLength={24}
    radialLabelsLinkStrokeWidth={1}
    radialLabelsLinkColor={{ from: "color" }}
    slicesLabelsSkipAngle={10}
    slicesLabelsTextColor="#333333"
    animate={true}
    motionStiffness={90}
    motionDamping={15}
    enableSlicesLabels={false}
  />
);

export default MyResponsivePie;
