import React from "react";

const displayStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const wineBottleStyle = {
  width: 100,
  height: "auto",
  marginTop: 20,
};

const soilStyle = {
  width: 150,
  height: 300,
  backgroundColor: "burlywood",
  borderRadius: 10,
  textAlign: "center",
};

function Winebottle() {
  return (
    <div style={displayStyle}>
      <date>2020.7.1</date>
      <img
        style={wineBottleStyle}
        src="./wineBottleIcon.svg"
        alt="ワインボトル"
      />
      <div style={soilStyle}>
        <p>name</p>
        <p>category</p>
        <p>taste</p>
        <p>producer</p>
        <p>home</p>
      </div>
    </div>
  );
}

export default Winebottle;
