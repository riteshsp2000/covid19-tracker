import React from "react";
import { ResponsiveTreeMap } from "@nivo/treemap";

const MyResponsiveTreeMap = ({ root }) => (
  <ResponsiveTreeMap
    root={root.root}
    identity="name"
    value="loc"
    innerPadding={3}
    outerPadding={3}
    margin={{ top: 30, right: 30, bottom: 50, left: 30 }}
    label="name"
    labelSkipSize={12}
    labelTextColor={{ from: "color", modifiers: [["darker", 1.2]] }}
    colors={["rgb(84, 39, 136)", "rgb(253, 184, 99)"]}
    borderColor={{ from: "color", modifiers: [["darker", 0.3]] }}
    animate={true}
    motionStiffness={90}
    motionDamping={11}
  />
);

export default MyResponsiveTreeMap;
