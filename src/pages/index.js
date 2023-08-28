import React from "react";
import Container from "../components/Container";
import SeO from "../components/SEO";
import Navbar from "../components/Navbar";
import SectionContact from "../components/SectionContact";
import SectionSkills from "../components/SectionSkills";
import SectionProjects from "../components/SectionProjects";
import SectionPresentation from "../components/SectionPresentation";
import { handlePresentationScroll } from "../utils/handlePresentationScroll";
import { useEffect } from "react";

const IndexPage = () => {
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
  //currentSection={props.location.hash}
  return (
    <Container>
      <SeO title="Home" />
      <Navbar />
      <div className="container">
        <SectionPresentation />
        <SectionSkills />
        <SectionProjects />
        <SectionContact />
      </div>
    </Container>
  );
};

export default IndexPage;
