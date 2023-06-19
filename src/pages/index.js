import React from "react";
import Container from "../components/Container";
import SeO from "../components/SEO";
import Navbar from "../components/Navbar";
import { graphql } from "gatsby";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import { useEffect } from "react";
import { BsGithub } from "react-icons/bs";

export const query = graphql`
  query MyQuery {
    allContentfulMyPage {
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
      }
    }
  }
`;
const IndexPage = (props) => {
  const projects = props.data.allContentfulMyPage.nodes;

  const handleScroll = () => {
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
      .addEventListener("scroll", handleScroll);

    document
      .querySelector("#presentaion-link")
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
      <Navbar currentSection={props.location.hash} />
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
                    {project.techStack.list.map((el) => {
                      return <li>{el}</li>;
                    })}
                  </ul>
                  <div className="projectSource">
                    <a href={project.sourceCode} target="_blank">
                      <BsGithub />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
          {/* <div className="project project-1">
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
          </div> */}
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
