import React from "react";
import Container from "../components/Container";
import SeO from "../components/SEO";
import Navbar from "../components/Navbar";
import { StaticImage } from "gatsby-plugin-image";
const IndexPage = () => {
  return (
    <Container>
      <SeO title="Home" />
      <Navbar />
      <div className="container">
        <section className="presentation" id="presentation">
          <span className="greeting">
            <span class="czesc">CZEŚĆ</span> 🖖, NAZYWAM SIĘ
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
            <submit>WYŚLIJ</submit>
          </form>
        </section>
      </div>
    </Container>
  );
};

export default IndexPage;
