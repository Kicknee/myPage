import React, { useEffect } from "react";

import SeO from "../components/SEO";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import SectionContact from "../components/SectionContact";
import SectionSkills from "../components/SectionSkills";
import SectionProjects from "../components/SectionProjects";
import SectionPresentation from "../components/SectionPresentation";

import { handlePresentationScroll } from "../utils/handlePresentationScroll";

import "../utils/handleHighlightLinks";

const IndexPage = () => {
  //handle scroll

  useEffect(() => {
    document
      .querySelector(".container")
      .addEventListener("scroll", handlePresentationScroll);

    document
      .querySelector("#presentation-link")
      .addEventListener("click", (e) => {
        document.querySelector(".container").scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      });

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
      <main className="container">
        <SectionPresentation />
        <SectionSkills />
        <SectionProjects />
        <SectionContact />
      </main>
    </Container>
  );
};

export default IndexPage;
