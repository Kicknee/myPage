import React from "react";
import { BsGithub } from "react-icons/bs";
import { BiCodeCurly } from "react-icons/bi";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

const ProjectsSection = () => {
  const {
    allContentfulMyPage: { nodes: projects },
  } = useStaticQuery(graphql`
    query MyQuery {
      allContentfulMyPage(sort: { order: DESC }) {
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
  `);

  return (
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
                {project.title !== "MyPage" ||
                project.title !== "BonjourScanner App" ? (
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
  );
};

export default ProjectsSection;
