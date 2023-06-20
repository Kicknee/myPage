import React, { useState, useEffect } from "react";
import { Link } from "gatsby";

const Navbar = () => {
  const [currentSection, setCurrentSection] = useState("");

  const activeLink = {
    color: "#ff9933",
  };

  useEffect(() => {
    const sections = [...document.querySelectorAll("section")];
    sections.shift();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id !== "presentation") {
            setCurrentSection(entry.target.id);
          } else {
            setCurrentSection("presentation");
          }
        });
      },
      {
        root: document.querySelector(".container"),
        threshold: 0.4,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });
  }, []);

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link
            to="/"
            id="presentation-link"
            style={currentSection === "presentation" ? activeLink : {}}
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
