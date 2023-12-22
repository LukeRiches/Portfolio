import { useState } from "react";
// import logo from "../assets/ALT-LOGO.png";
// import logo from "../assets/Long-Logo.png";
// import logo from "../assets/Logo-Dark.png";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

function Header() {
  const [,] = useState();

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
          {/*   <img
             src={logo}
             alt="My logo which has an icon of a code editor and beneath that 'Luke Riches Junior Developer'  "
             width="250"
             length="225"
           /> */}
        </Link>

        <nav>
          <HashLink
            className="Link"
            // activeClassName="active"
            // activeStyle={{ color: "red" }}
            to="#About"
            smooth
          >
            About
          </HashLink>
          <HashLink
            className="Link"
            // activeClassName="active"
            to="#Skills"
            smooth
          >
            Skills
          </HashLink>
          <HashLink
            className="Link"
            // activeClassName="active"
            to="#Projects"
            smooth
          >
            Projects
          </HashLink>
          <HashLink
            className="Link"
            // activeClassName="active"
            to="#Contact"
            smooth
          >
            Contact
          </HashLink>
        </nav>
      </section>
    </header>
  );
}

export default Header;
