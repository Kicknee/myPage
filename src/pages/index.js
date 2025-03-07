import React from "react";
import Container from "../components/Container";
import SeO from "../components/SEO";
import Navbar from "../components/Navbar";
import SectionContact from "../components/SectionContact";
import SectionSkills from "../components/SectionSkills";
import SectionProjects from "../components/SectionProjects";
import SectionPresentation from "../components/SectionPresentation";
import { handlePresentationScroll } from "../utils/handlePresentationScroll";
import { useEffect, useState } from "react";

const IndexPage = () => {
  // const [activeSection, setActiveSection] = useState(null);

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

    // const sections = document.querySelectorAll("section:not(.presentation)");

    // const sectionObserver = new IntersectionObserver(
    //   (entries) => {
    //     entries.forEach((entry) => {
    //       if (entry.isIntersecting) {
    //         const visibleEntries = entries.filter((e) => e.isIntersecting);
    //         const mostVisible = visibleEntries.reduce(
    //           (max, e) =>
    //             e.intersectionRatio > max.intersectionRatio ? e : max,
    //           entries[0]
    //         );
    //         // const currentSection = document.querySelector(
    //         //   `.${entry.target.className}-link`
    //         // );
    //         console.log(mostVisible.target.className);
    //       }
    //     });
    //   },
    //   { root: document.querySelector(".container"),rootMargin: "50% 0", threshold: 0.5 }
    // );

    // sections.forEach((section) => {
    //   sectionObserver.observe(section);
    // });
  }, []);
  //currentSection={props.location.hash}
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
