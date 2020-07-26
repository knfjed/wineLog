import React from "react";
import styled from "styled-components";

export default function Topics() {
  return (
    <Root>
      <Title>NEWS</Title>
      <Topic>
        <Date>2020.6.30</Date>
        <Icon src="/wineIcon.svg" />
        <p>新しいワインが追加されました！</p>
      </Topic>

      <Topic>
        <Date>2020.6.30</Date>
        <Icon src="/likeIcon.svg" />
        <p>いいね！されました</p>
      </Topic>

      <Topic>
        <Date>2020.6.30</Date>
        <Icon src="/newIcon.svg" alt="" />
        <p>新しいカテゴリーが追加されました</p>
      </Topic>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  width: 400px;
`;

const Title = styled.h2`
  font-size: 25px;
  letter-spacing: 3px;
  font-weight: 100;
  opacity: 0.8;
`;

const Topic = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  padding: 5px;
  margin-bottom: 50px;
  font-family: "Century Gothic", "sans-serif";
  font-size: 13px;
  background: #a6d3c8;
  color: white;

  &::before {
    position: absolute;
    content: "";
    top: 100%;
    left: 0;
    border: none;
    border-bottom: solid 15px transparent;
    border-right: solid 20px rgb(149, 158, 155);
  }
`;

const Date = styled.div`
  margin-left: 30px;
  margin-right: 20px;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 20px;
  opacity: 0.8;
`;
