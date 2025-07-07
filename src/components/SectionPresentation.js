import React from "react";
import styled from "styled-components";

const SectionPresentation = () => {
  return (
    <StyledPresentation id="presentation">
      <span className="greeting">
        <span>CZEŚĆ</span> 🖖, NAZYWAM SIĘ
      </span>
      <span className="name">Paweł Daniszewski</span>
      <span className="occupation">DEVELOPER</span>
      <span className="more-info">Jestem Frontend Developerem z Warszawy</span>
    </StyledPresentation>
  );
};

export default SectionPresentation;

const StyledPresentation = styled.section`
  height: 360px;
  width: 480px;
  grid-area: presentation;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  justify-self: right;
  margin-right: 200px;
  padding: 30px;
  transition: transform 0.5s;
  background-color: ${(props) => props.theme.color.primary};

  backdrop-filter: blur(5px);
  clip-path: polygon(
    0 0,
    90% 0,
    100% 22%,
    100% 100%,
    80% 100%,
    50% 100%,
    11% 100%,
    0 82%,
    0% 35%,
    0 12%
  );

  .name {
    font-size: 2.9rem;
    margin: 45px 0 10px 0;
  }

  .occupation {
    font-size: 1.2rem;
    color: #ff9933;
  }
  .greeting > span {
    color: #ff9933;
  }
  .greeting,
  .more-info {
    font-size: 1.3rem;
  }
  .more-info {
    margin-top: 20px;
  }

  ${(props) => props.theme.mq.xxl} {
    margin-right: 100px;
  }
  ${(props) => props.theme.mq.xl} {
    margin-right: 50px;
  }
  ${(props) => props.theme.mq.lg} {
    width: 80%;
    justify-self: center;
    margin: 0;
  }
  ${(props) => props.theme.mq.sm} {
    width: 100%;
  }
`;
