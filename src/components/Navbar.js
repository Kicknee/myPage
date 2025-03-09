import React from "react";
import { Link } from "gatsby";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
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
    </nav>
  );
};

export default Navbar;
