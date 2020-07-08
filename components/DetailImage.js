import React from "react";

const DetailImageStyle = {
  width: 200 /* ※縦横を同値に */,
  height: 200 /* ※縦横を同値に */,
  borderRadius: "50%" /* 角丸半径を50%にする(=円形にする) */,
  backgroundPosition: "center" /* 横長画像の左上を基準に表示 */,
  display: "inline-block" /* 複数の画像を横に並べたい場合 */,
};

export default function DetailImage() {
  return <img style={DetailImageStyle} src="/details-wine.jpg" />;
}
