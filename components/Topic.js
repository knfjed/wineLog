import React from "react";

const topicStyle = {
  display: "flex",
  alignItems: "center",
  marginLeft: 20,
};

const fontStyle = {
  fontWeight: 200,
  fontSize: 16,
};

const iconStyle = {
  width: 30,
  height: 30,
};

const listStyle = {
  width: 500,
  backgroundColor: "lightgray",
  borderRadius: 10,
  opacity: 0.7,
};

function Topic() {
  return (
    <div style={listStyle}>
      <div style={topicStyle}>
        <date style={fontStyle}>2020.6.30</date>
        <img style={iconStyle} src="/wineIcon.svg"></img>
        <h4 style={fontStyle}>新しいワインが追加されました！</h4>
      </div>

      <div style={topicStyle}>
        <date style={fontStyle}>2020.6.30</date>
        <img style={iconStyle} src="/likeIcon.svg"></img>
        <h4 style={fontStyle}>いいね！されました</h4>
      </div>

      <div style={topicStyle}>
        <date style={fontStyle}>2020.6.30</date>
        <img style={iconStyle} src="/newIcon.svg"></img>
        <h4 style={fontStyle}>新しいカテゴリーが追加されました</h4>
      </div>
    </div>
  );
}

export default Topic;
