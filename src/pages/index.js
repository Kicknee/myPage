import React from "react";

import SeO from "../components/SEO";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import SectionContact from "../components/SectionContact";
import SectionSkills from "../components/SectionSkills";
import SectionProjects from "../components/SectionProjects";
import SectionPresentation from "../components/SectionPresentation";
import styled from "styled-components";

const IndexPage = () => {
  return (
    <Container>
      <SeO title="Home" />
      <Navbar />
      <StyledContainer id="container">
        <SectionPresentation />
        <SectionSkills />
        <SectionProjects />
        <SectionContact />
      </StyledContainer>
    </Container>
  );
};

export default IndexPage;

const StyledContainer = styled.main`
  position: absolute;
  top: calc(10vh + 55px);
  width: 100%;
  height: calc(100vh - (10vh + 55px));
  overflow-y: scroll;
  overflow-x: hidden;
  scroll-behavior: smooth;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 100vh 100vh auto 100vh;
  grid-template-areas:
    "presentation ."
    ". skills"
    "projects projects"
    "contact contact";

  ${(props) => props.theme.mq.sm} {
    gap: 90px;
  }
  ${(props) => props.theme.mq.lg} {
    top: calc(5vh + 55px);
    height: calc(100vh - (5vh + 55px));
    grid-template-columns: 100%;
    grid-template-areas:
      "presentation"
      "skills"
      "projects"
      "contact";
  }
`;
