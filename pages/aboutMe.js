import React, { Component } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

export default class About extends Component {
  static async getInitialProps() {
    const res = await fetch("https://api.github.com/users/knfjed");
    const data = await res.json();

    return { user: data };
  }

  render() {
    const { user } = this.props;

    return (
      <Layout>
        <Root>
          <Title>ABOUT ME</Title>
          <Name>{user.name}</Name>
          <Img src={user.avatar_url} alt="Me" width="200px" />
          <Url>{user.url}</Url>
        </Root>
      </Layout>
    );
  }
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h2`
  margin: 90px auto;
  font-size: 20px;
  font-weight: normal;
  letter-spacing: 2px;
`;

const Name = styled.div`
  font-size: 14px;
  letter-spacing: 1px;
  margin: 0 auto 30px auto;
`;

const Img = styled.img`
  margin: 0 auto 30px auto;
  border-radius: 50%;
`;

const Url = styled.a`
  margin: 0 auto 30px auto;
  &:hover {
    cursor: pointer;
  }
  &:visited {
    color: black;
  }
`;
