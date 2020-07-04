import React from "react";
import Topic from "./Topic";

const imageStyle = {
  display: "flex",
  width: 1000,
  height: "auto",
  marginTop: 50,
  marginLeft: "auto",
  marginRight: "auto",
};

const arrowStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: 60,
  height: 60,
};

function TopImage() {
  return (
    <div>
      <img style={imageStyle} src="/wine.jpg" alt="ワインの写真" />
      <Topic />
      <img style={arrowStyle} src="/arrow.svg" alt="矢印アイコン" />
    </div>
  );
}

export default TopImage;
