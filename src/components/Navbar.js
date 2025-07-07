import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <StyledNavigation id="home">
      <ul>
        <li>
          <a href="#home" id="presentation-link">
            Główna
          </a>
        </li>
        <li>
          <a href="#skills" id="skills-link">
            Umiejętności
          </a>
        </li>
        <li>
          <a href="#projects" id="projects-link">
            Projekty
          </a>
        </li>
        <li>
          <a href="#contact" id="contact-link">
            Kontakt
          </a>
        </li>
      </ul>
    </StyledNavigation>
  );
};

export default Navbar;

const StyledNavigation = styled.nav`
  position: fixed;
  top: 7vh;
  left: 50vw;
  width: 595px;
  height: 55px;
  z-index: 13;
  display: flex;
  justify-content: end;
  padding: 0 20px;
  background-color: ${(props) => props.theme.color.primary};
  backdrop-filter: blur(5px);

  ul {
    list-style: none;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  a {
    text-decoration: none;
    color: white;
    font-size: 1.3rem;
    &:hover {
      color: #f68c22;
    }
    &.active {
      color: #ff9933;
    }
  }

  ${(props) => props.theme.mq.xl} {
    width: 500px;
  }
  ${(props) => props.theme.mq.lg} {
    width: 100%;
    top: 10px;
    left: 0;
  }
  ${(props) => props.theme.mq.sm} {
    padding: 0 5px;

    a {
      font-size: 1.1rem;
    }
  }
`;
