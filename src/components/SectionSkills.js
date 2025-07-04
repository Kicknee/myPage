import React from "react";
import styled from "styled-components";

function SectionSkills() {
  return (
    <StyledSkills id="skills">
      <div className="left">
        <div className="skill">HTML5</div>
        <div className="skill">CSS3</div>
        <div className="skill">SASS</div>
        <div className="skill">Tailwind</div>
        <div className="skill">Bootstrap</div>
        <div className="skill">JavaScript</div>
        <div className="skill">React.js</div>
        <div className="skill">React Native</div>
        <div className="skill">Angular</div>
        <div className="skill">jQuery</div>
      </div>
      <div className="right">
        <div className="skill">Express.js</div>
        <div className="skill">MongoDB</div>
        <div className="skill">Cypress</div>
        <div className="skill">GIT</div>
        <div className="skill">Redux</div>
        <div className="skill">Zustand</div>
        <div className="skill">TypeScript</div>
        <div className="skill">Next.js</div>
        <div className="skill">Gatsby</div>
      </div>
    </StyledSkills>
  );
}

export default SectionSkills;

const StyledSkills = styled.section`
  height: 720px;
  width: 595px;
  background-color: ${(props) => props.theme.color.primary};
  backdrop-filter: blur(5px);
  font-size: 1.8rem;
  padding: 20px;
  grid-area: skills;
  position: relative;
  justify-self: left;
  align-self: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: auto;
  overflow-y: scroll;

  .left,
  .right {
    display: grid;
    grid-row: span 20;
    grid-template-rows: subgrid;
  }

  .skill {
    padding: 25px;
  }

  .left .skill:nth-of-type(even),
  .right .skill:nth-of-type(odd) {
    color: #ff9933;
  }

  ${(props) => props.theme.mq.xl} {
    width: 500px;
    height: 620px;
    font-size: 1.7rem;
  }
  ${(props) => props.theme.mq.lg} {
    width: 80%;
    font-size: 1.6rem;
    justify-self: center;
  }
  ${(props) => props.theme.mq.sm} {
    width: 100%;
    height: 700px;
    font-size: 1.4rem;
    padding: 5px;

    .skill {
      padding: 20px;
    }
  }
`;
