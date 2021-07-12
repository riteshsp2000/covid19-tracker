import React from "react";
import Switch from "react-switch";

const textSwitchRight = {
  display: "flex",
  justifyContent: "spaceAround",
  alignItems: "center",
  height: "100%",
  fontSize: "13",
  color: "#000",
  marginLeft: "-10px",
};

const textSwitchLeft = {
  display: "flex",
  justifyContent: "spaceAround",
  alignItems: "center",
  height: "100%",
  fontSize: "13",
  color: "#000",
  marginLeft: "7px",
};

const ToggleSwitch = ({ checked, handleToggleChange }) => {
  return (
    <Switch
      className="react-switch"
      onChange={handleToggleChange}
      checked={checked}
      checkedIcon={<div style={textSwitchLeft}>Total</div>}
      uncheckedIcon={<div style={textSwitchRight}>Daily</div>}
      handleDiameter={20}
      width={85}
      onColor={"#C8C8C8"}
      offColor={"#C8C8C8"}
    />
  );
};

export default ToggleSwitch;
