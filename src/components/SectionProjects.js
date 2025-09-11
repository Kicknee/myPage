import React from "react";
import { BsGithub } from "react-icons/bs";
import { BiCodeCurly } from "react-icons/bi";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { useTranslationContext } from "../context/TranslationContext";

const ProjectsSection = () => {
  const { language } = useTranslationContext();

  const {
    allContentfulMyPage: { nodes: projects },
  } = useStaticQuery(graphql`
    query MyQuery {
      allContentfulMyPage(
        sort: { order: DESC }
        filter: { node_locale: { in: ["pl", "en-US"] } }
      ) {
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
          node_locale
        }
      }
    }
  `);

  // Filter projects based on the current language
  const filteredProjects = projects.filter(
    (project) =>
      (language === "en" && project.node_locale === "en-US") ||
      (language === "pl" && project.node_locale === "pl")
  );

  const projectsToShow =
    filteredProjects.length > 0 ? filteredProjects : projects;
  return (
    <StyledProjects id="projects">
      {projectsToShow.map((project, indx) => {
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
                {project.www != undefined ? (
                  <a href={project.www} rel="noreferrer" target="_blank">
                    <BiCodeCurly />
                  </a>
                ) : (
                  ""
                )}
                <a href={project.sourceCode} rel="noreferrer" target="_blank">
                  <BsGithub />
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </StyledProjects>
  );
};

export default ProjectsSection;

const StyledProjects = styled.section`
  width: 990px;
  height: auto;
  grid-area: projects;
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-size: 1.9rem;
  align-self: center;
  justify-self: center;
  padding: 30px;

  .project {
    width: 100%;
    height: 360px;
    display: flex;
    margin-top: 50px;
    transform: scale(0.7);
    transition: transform 1s;
  }

  .project.active {
    transform: scale(1);
  }
  .project:nth-of-type(1) {
    margin-top: unset;
  }
  .projectInfo {
    width: 495px;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-self: center;
    padding: 30px;
    background-color: ${(props) => props.theme.color.primary};
    backdrop-filter: blur(5px);
    clip-path: polygon(
      0 0,
      90% 0,
      100% 22%,
      100% 100%,
      80% 100%,
      50% 100%,
      11% 100%,
      0 82%,
      0% 35%,
      0 12%
    );
  }
  .project .projectTitle {
    font-size: 1.9rem;
    margin-bottom: 5px;
  }
  .project .projectDesc {
    font-size: 1rem;
    margin-bottom: 25px;
  }
  .project .projectTechStack {
    font-size: 1.2rem;
    text-transform: lowercase;
    list-style: square;
  }
  .project .projectTechStack li {
    margin-top: 3px;
  }
  .project .projectSource {
    text-align: end;
    align-items: center;
    font-size: 1.7rem;
  }
  .project .projectSource a {
    padding: 10px;
    color: inherit;
  }
  .project .projectTechStack span::after {
    content: " | ";
  }
  .project .projectTechStack span:last-of-type::after {
    content: "";
  }
  .projectThumb {
    width: 495px;
    margin-right: 15px;
  }
  .project img {
    width: 100%;
  }

  ${(props) => props.theme.mq.lg} {
    width: 90%;
    padding: 0;
    .project {
      width: 100%;
    }
  }
  ${(props) => props.theme.mq.sm} {
    width: 100%;
    height: auto;
    justify-self: center;
    .project {
      height: auto;
      flex-direction: column;
    }
    .projectInfo {
      height: auto;
      width: 100%;
      font-size: 1.2rem;
    }
    .project > .projectThumb {
      height: auto;
      width: 100%;
      margin-right: 0;
    }
    .project img {
      width: 100%;
    }
  }
`;
