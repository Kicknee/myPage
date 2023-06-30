import React from "react";
import Container from "../components/Container";
import SeO from "../components/SEO";
import Navbar from "../components/Navbar";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useEffect } from "react";
import { BsGithub } from "react-icons/bs";
import { BiCodeCurly } from "react-icons/bi";

export const query = graphql`
  query MyQuery {
    allContentfulMyPage(sort: { order: ASC }) {
      nodes {
        title
        techStack {
          list
        }
        screen {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
        }
        description
        sourceCode
        www
      }
    }
  }
`;

const IndexPage = (props) => {
  const projects = props.data.allContentfulMyPage.nodes;

  const handlePresentationScroll = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth > 1000) {
      const container = document.querySelector(".container");
      const presentation = document.querySelector(".presentation");
      const skills = document.querySelector(".skills");
      const windowOffSet = Math.floor(window.innerHeight * 0.1 + 55);
      const presentationHeight = presentation.offsetTop;
      const skillsHeight = skills.offsetTop;
      const scrollPosition = container.scrollTop;
      if (skillsHeight > presentationHeight + scrollPosition - windowOffSet) {
        presentation.style.transform = `translateY(${scrollPosition}px)`;
      }
    } else {
      document.querySelector(
        ".presentation"
      ).style.transform = `translateY(0px)`;
    }
  };

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

    const sections = document.querySelectorAll(".project");

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(entry.target.id);
          entry.target.classList.add("active");
        }
        if (!entry.isIntersecting) {
          entry.target.classList.remove("active");
        }
      });
    });

    sections.forEach((section) => {
      sectionObserver.observe(section);
    });
  }, []);
  //currentSection={props.location.hash}
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
            Jestem front-end developerem z Warszawy
          </span>
        </section>
        <section className="skills" id="skills">
          <div className="skill">HTML</div>
          <div className="skill">CSS</div>
          <div className="skill">JAVA SCRIPT</div>
          <div className="skill">SASS</div>
          <div className="skill">REACT.JS</div>
          <div className="skill">GATSBY</div>
          <div className="skill">EXPRESS</div>
          <div className="skill">PHOTOSHOP</div>
          <div className="skill">NodeJS / NPM</div>
          <div className="skill">MongoDB</div>
          <div className="skill">GIT</div>
          <div className="skill">DOCKER</div>
        </section>
        <section className="projects" id="projects">
          {projects.map((project, indx) => {
            const projectScreen = getImage(project.screen);
            return (
              <div key={indx} className="project">
                <GatsbyImage
                  image={projectScreen}
                  alt="projectThumb"
                  className="projectThumb"
                />
                <div className="projectInfo">
                  <div className="projectTitle">{project.title}</div>
                  <div className="projectDesc">{project.description}</div>
                  <ul className="projectTechStack">
                    {project.techStack.list.map((el, num) => {
                      return <li key={num}>{el}</li>;
                    })}
                  </ul>
                  <div className="projectSource">
                    {project.title !== "MyPage" ? (
                      <a href={project.www} target="_blank">
                        <BiCodeCurly />
                      </a>
                    ) : (
                      ""
                    )}
                    <a href={project.sourceCode} target="_blank">
                      <BsGithub />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
        <section className="contact" id="contact">
          <form action="https://formspree.io/f/mknadrqp" method="POST">
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
