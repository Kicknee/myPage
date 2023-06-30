import React, { useState, useEffect } from "react";
import { Link } from "gatsby";

const Navbar = () => {
  const [currentSection, setCurrentSection] = useState("");

  const activeLink = {
    color: "#ff9933",
  };

  //DO ZMIANY!!

  // useEffect(() => {
  //   const sections = [...document.querySelectorAll("section")];
  //   sections.shift();

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         console.log(entry.target.id);
  //         if (entry.isIntersecting) {
  //           console.log(entry.target.id, entry.target.offsetTop);
  //           setCurrentSection(entry.target.id);
  //         }

  //         if (
  //           (!entry.isIntersecting && entry.target.id === "skills") ||
  //           (!entry.isIntersecting && entry.target.id === "projects") ||
  //           (!entry.isIntersecting && entry.target.id === "contact")
  //         ) {
  //           setCurrentSection("");
  //         }
  //       });
  //     },
  //     {
  //       root: document.querySelector(".container"),
  //       threshold: 0.9,
  //       rootMargin: "70px 0px 70px 0px ",
  //     }
  //   );

  //   sections.forEach((section) => {
  //     observer.observe(section);
  //   });
  // }, []);

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link
            to="/"
            id="presentation-link"
            // style={currentSection === "presentation" ? activeLink : {}}
          >
            Główna
          </Link>
        </li>
        <li>
          <Link
            to="#skills"
            style={currentSection === "skills" ? activeLink : {}}
          >
            Umiejętności
          </Link>
        </li>
        <li>
          <Link
            to="#projects"
            style={currentSection === "projects" ? activeLink : {}}
          >
            Projekty
          </Link>
        </li>
        <li>
          <Link
            to="#contact"
            style={currentSection === "contact" ? activeLink : {}}
          >
            Kontakt
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
