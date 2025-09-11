import React from "react";
import styled from "styled-components";
import { useTranslationContext } from "../context/TranslationContext";
import { IoLanguage } from "react-icons/io5";

const Navbar = () => {
  const { t, language, setLanguage } = useTranslationContext();

  const handleLanguageChange = (lang) => {
    setLanguage(lang);

    const searchParams = new URLSearchParams(window.location.search);

    if (lang === "pl") {
      searchParams.set("lang", "pl");
    } else {
      searchParams.delete("lang");
    }

    const queryString = searchParams.toString();
    const newUrl = queryString
      ? `${window.location.pathname}?${queryString}`
      : window.location.pathname;

    window.history.pushState({}, "", newUrl);
  };

  return (
    <StyledNavigation id="home">
      <ul>
        <li>
          <a href="#home" id="presentation-link">
            {t("navbar.home")}
          </a>
        </li>
        <li>
          <a href="#skills" id="skills-link">
            {t("navbar.skills")}
          </a>
        </li>
        <li>
          <a href="#projects" id="projects-link">
            {t("navbar.projects")}
          </a>
        </li>
        <li>
          <a href="#contact" id="contact-link">
            {t("navbar.contact")}
          </a>
        </li>
        <li>
          <button
            onClick={() =>
              handleLanguageChange(language === "pl" ? "en" : "pl")
            }
          >
            <IoLanguage />
            {language === "en" ? "EN" : "PL"}
          </button>
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
  button {
    all: unset;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
    color: white;
    font-size: 1.3rem;
    border-left: 2px solid white;
    padding-left: 10px;
    &:hover {
      color: #f68c22;
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
