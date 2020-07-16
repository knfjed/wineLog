import React from "react";
import styled from "styled-components";

export default function Topic() {
  return (
    <Root>
      <Topic>
        <date>2020.6.30</date>
        <img src="/wineIcon.svg"></img>
        <h4>新しいワインが追加されました！</h4>
      </Topic>

      <Topic>
        <date>2020.6.30</date>
        <img src="/likeIcon.svg"></img>
        <h4>いいね！されました</h4>
      </Topic>

      <Topic>
        <date>2020.6.30</date>
        <Icon src="/newIcon.svg" alt="" />
        <h4>新しいカテゴリーが追加されました</h4>
      </Topic>
    </Root>
  );
}

const Root = styled.div`
  width: 500px;
  background-color: lightgray;
  border-radius: 10px;
  opacity: 0.7;
`;

const Topic = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  font-weight: 200;
  font-size: 16px;
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
`;
