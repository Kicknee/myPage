import React from "react";
import SEO from "../components/SEO";
import Container from "../components/Container";
import { navigate } from "gatsby";

import styled from "styled-components";

const Error = () => {
  setTimeout(() => {
    navigate("/");
  }, 5000);

  return (
    <Container>
      {/*eslint-disable-next-line react/jsx-pascal-case*/}
      <SEO title="404" />
      <Styled404 className="error-404">
        <div className="rainyCloudBox">
          <div className="message-404">
            <span>#</span>404
          </div>
          <div className="cloud"></div>
          <div className="rain">
            <span style={{ "--i": "11" }}></span>
            <span style={{ "--i": "12" }}></span>
            <span style={{ "--i": "10" }}></span>
            <span style={{ "--i": "14" }}></span>
            <span style={{ "--i": "18" }}></span>
            <span style={{ "--i": "16" }}></span>
            <span style={{ "--i": "19" }}></span>
            <span style={{ "--i": "20" }}></span>
            <span style={{ "--i": "19" }}></span>
            <span style={{ "--i": "10" }}></span>
            <span style={{ "--i": "16" }}></span>
            <span style={{ "--i": "14" }}></span>
            <span style={{ "--i": "18" }}></span>
            <span style={{ "--i": "11" }}></span>
            <span style={{ "--i": "13" }}></span>
            <span style={{ "--i": "15" }}></span>
            <span style={{ "--i": "12" }}></span>
            <span style={{ "--i": "17" }}></span>
            <span style={{ "--i": "13" }}></span>
            <span style={{ "--i": "15" }}></span>
          </div>
        </div>
      </Styled404>
    </Container>
  );
};

export default Error;

const Styled404 = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .message-404 {
    font-size: 6rem;
    position: absolute;
    top: -55px;
  }
  .message-404 > span {
    color: #ff9933;
  }
  .rainyCloudBox {
    height: 450px;
    width: 200px;
    border-bottom: 2px solid white;
    position: relative;
  }
  .rainyCloudBox .cloud {
    background-color: white;
    width: 100%;
    height: 70px;
    border-radius: 70px;
    position: relative;
    top: 70px;
  }
  .rainyCloudBox .cloud::before {
    content: "";
    position: absolute;
    background-color: white;
    border-radius: 50%;
    height: 70px;
    width: 70px;
    top: -35px;
    left: 30px;
    box-shadow: 60px 0 0 15px white;
  }
  .rainyCloudBox .rain {
    position: relative;
    display: flex;
    z-index: 1;
    padding: 30px 0 0 23px;
  }
  .rainyCloudBox .rain span {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: white;
    margin-left: 3px;
    animation: fall 5s linear infinite;
    animation-duration: calc(55s / var(--i));
  }

  @keyframes fall {
    0% {
      transform: translateY(0) scale(1);
    }
    70% {
      transform: translateY(345px) scale(1);
    }
    100% {
      transform: translateY(345px) scale(0);
    }
  }
`;
