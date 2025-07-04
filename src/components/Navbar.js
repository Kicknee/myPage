import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Navbar = () => {
  return (
    <StyledNavigation>
      <ul>
        <li>
          <Link to="/" id="presentation-link">
            Główna
          </Link>
        </li>
        <li>
          <Link to="#skills" id="skills-link">
            Umiejętności
          </Link>
        </li>
        <li>
          <Link to="#projects" id="projects-link">
            Projekty
          </Link>
        </li>
        <li>
          <Link to="#contact" id="contact-link">
            Kontakt
          </Link>
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

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: ${(props) => props.theme.color.primary};
    z-index: -1;
    backdrop-filter: blur(5px);
  }
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
