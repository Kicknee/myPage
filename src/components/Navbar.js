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
          <Link to="#skills">Umiejętności</Link>
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
