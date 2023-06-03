import React from "react";
import { Link } from "gatsby";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/" className="presentaion-link">
            Główna
          </Link>
        </li>
        <li>
          <Link to="#skills" className="skills-link">
            Umiejętności
          </Link>
        </li>
        <li>
          <Link to="#projects">Projekty</Link>
        </li>
        <li>
          <Link to="#contact">Kontakt</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
