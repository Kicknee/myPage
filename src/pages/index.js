import React from "react";
import Container from "../components/Container";
import SeO from "../components/SEO";
import Navbar from "../components/Navbar";
import { StaticImage } from "gatsby-plugin-image";
import { useEffect } from "react";

const IndexPage = (props) => {
  const handleScroll = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth > 1000) {
      const container = document.querySelector(".container");
      const presentation = document.querySelector(".presentation");
      const skills = document.querySelector(".skills");

      const presentationHeight = presentation.offsetHeight;
      const skillsHeight = skills.offsetHeight;
      const scrollPosition = container.scrollTop;

      if (skillsHeight > scrollPosition / 2) {
        presentation.style.transform = `translateY(${scrollPosition}px)`;
      }
    }
  };

  useEffect(() => {
    document
      .querySelector(".container")
      .addEventListener("scroll", handleScroll);

    document
      .querySelector(".presentaion-link")
      .addEventListener("click", (e) => {
        document.querySelector(".container").scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      });
  }, []);

  return (
    <Container>
      <SeO title="Home" />
      <Navbar />
      <div className="container">
        <section className="presentation" id="presentation">
          <span className="greeting">
            <span className="czesc">CZEŚĆ</span> 🖖, NAZYWAM SIĘ
          </span>
          <span className="name">Paweł Daniszewski</span>
          <span className="occupation">DEVELOPER</span>
          <span className="more-info">
            Jestem fron-end developerem w Warszawie
          </span>
        </section>
        <section className="skills" id="skills">
          <div className="skill">HTML</div>
          <div className="skill">CSS</div>
          <div className="skill">JAVA SCRIPT</div>
          <div className="skill">SASS</div>
          <div className="skill">REACT</div>
          <div className="skill">GATSBY</div>
          <div className="skill">EXPRESS</div>
          <div className="skill">PHOTOSHOP</div>
          <div className="skill">NodeJS / NPM</div>
          <div className="skill">MongoDB</div>
          <div className="skill">GIT</div>
        </section>
        <section className="projects" id="projects">
          <div className="project project-1">
            <StaticImage
              src="../assets/images/img1.png"
              alt="projectThumb"
              className="projectThumb"
            />
            <div className="projectInfo">
              Strona internetowa dla zakladu kosmetycznego.
            </div>
          </div>
          <div className="project project-2">
            <StaticImage
              src="../assets/images/img1.png"
              alt="projectThumb"
              className="projectThumb"
            />
            <div className="projectInfo">
              Strona internetowa dla zakladu kosmetycznego.
            </div>
          </div>
        </section>
        <section className="contact" id="contact">
          <form action="">
            <label htmlFor="name">Imię i nazwisko:</label>
            <input type="text" name="name" id="name" />
            <label htmlFor="email">Adres email:</label>
            <input type="email" name="email" id="email" />
            <label htmlFor="message">Treść wiadomości:</label>
            <textarea type="textArea" name="message" id="message" />
            <button type="submit" className="submit">
              WYŚLIJ
            </button>
          </form>
        </section>
      </div>
    </Container>
  );
};

export default IndexPage;
