import React from "react";
import { Link } from "gatsby";

const Navbar = ({ currentSection }) => {
  console.log(currentSection);
  const activeLink = {
    color: "#ff9933",
  };
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link
            to="/"
            id="presentaion-link"
            style={currentSection === "" ? activeLink : {}}
          >
            Główna
          </Link>
        </li>
        <li>
          <Link
            to="#skills"
            style={currentSection === "#skills" ? activeLink : {}}
          >
            Umiejętności
          </Link>
        </li>
        <li>
          <Link
            to="#projects"
            style={currentSection === "#projects" ? activeLink : {}}
          >
            Projekty
          </Link>
        </li>
        <li>
          <Link
            to="#contact"
            style={currentSection === "#contact" ? activeLink : {}}
          >
            Kontakt
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
