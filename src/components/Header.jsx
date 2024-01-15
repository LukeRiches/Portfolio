import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

function Header() {
  const logo = "{LJR}";

  return (
    <header>
      <section id="Top">
        <Link
          to="/"
          onClick={() => {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
          id="Logo"
        >
          <h1>{logo}</h1>
        </Link>

        <nav>
          <HashLink className="Link" to="#About" smooth>
            About
          </HashLink>
          <HashLink className="Link" to="#Skills" smooth>
            Skills
          </HashLink>
          <HashLink className="Link" to="#Projects" smooth>
            Projects
          </HashLink>
          <HashLink className="Link" to="#Contact" smooth>
            Contact
          </HashLink>
        </nav>
      </section>
    </header>
  );
}

export default Header;
