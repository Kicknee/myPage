import React, { useEffect } from "react";

import SeO from "../components/SEO";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import SectionContact from "../components/SectionContact";
import SectionSkills from "../components/SectionSkills";
import SectionProjects from "../components/SectionProjects";
import SectionPresentation from "../components/SectionPresentation";
import styled from "styled-components";

import { handlePresentationScroll } from "../utils/handlePresentationScroll";
import { handleHighlightLinks } from "../utils/handleHighlightLinks";

const IndexPage = () => {
  //handle scroll

  useEffect(() => {
    //get user ip and send through netlify function to google sheets
    const logVisitor = async () => {
      try {
        const ipRes = await fetch("https://api.ipify.org?format=json");
        const { ip } = await ipRes.json();

        await fetch("/.netlify/functions/logVisitor", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ip,
            url: window.location.href,
          }),
        });
      } catch (err) {
        console.error("Visitor log failed", err);
      }
    };

    logVisitor();

    document
      .querySelector("#container")
      .addEventListener("scroll", handlePresentationScroll);

    document
      .querySelector("#presentation-link")
      .addEventListener("click", (e) => {
        document.querySelector("#container").scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      });

    handleHighlightLinks();
    //animate projects tiles

    const projectTiles = document.querySelectorAll(".project");

    const projectTileObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
        if (!entry.isIntersecting) {
          entry.target.classList.remove("active");
        }
      });
    });

    projectTiles.forEach((projectTile) => {
      projectTileObserver.observe(projectTile);
    });
  }, []);
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
