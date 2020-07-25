import React from "react";
import styled from "styled-components";

export default function Topics() {
  return (
    <Root>
      <Topic>
        <date>2020.6.30</date>
        <Icon src="/wineIcon.svg" />
        <p className="content">新しいワインが追加されました！</p>
      </Topic>

      <Topic>
        <date>2020.6.30</date>
        <Icon src="/likeIcon.svg" />
        <p className="content">いいね！されました</p>
      </Topic>

      <Topic>
        <date>2020.6.30</date>
        <Icon src="/newIcon.svg" alt="" />
        <p className="content">新しいカテゴリーが追加されました</p>
      </Topic>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  width: 500px;
  background-color: #ff7c5c;
  border-radius: 10px;
  opacity: 0.9;
`;

const Topic = styled.div`
  display: flex;
  align-items: center;
  margin: 20px, 20px;
  color: white;
  font-family: "Century Gothic", "sans-serif";
  font-size: 16px;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
`;
