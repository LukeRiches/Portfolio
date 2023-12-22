import { useState } from "react";
import headshot from "../assets/Headshot-Square.png";
import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  const [,] = useState();

  return (
    <section id="Contact">
      <section id="Me">
        <section id="Headshot-Name">
          <section id="Left-Side-Contact">
            <h2 className="Section-Title">Contact Details</h2>
            <img
              id="Headshot"
              src={headshot}
              alt="A headshot photograph of myself"
              width="146"
              length="195"
            />
          </section>

          <section id="Contact-Details">
            <h3 id="Name-Contact" className="Subheading opening">
              Luke Riches
            </h3>
            <p id="Role" className="Body opening">
              Aspiring Junior Developer
            </p>
            <section id="Social-platforms"></section>
          </section>
        </section>
      </section>

      <section id="Contact-Details">
        <h3 id="Get-In-Touch" className="Subheading">
          Get in touch
        </h3>
        <section id="Contact-Methods">
          <section id="Email">
            <h4>Email:</h4>
            <a href="mailto:Lukejr2603@gmail.com" id="Email-Link">
              Lukejr2603@gmail.com {/* <section id="Arrow"> */}
              <FaArrowRight id="Arrow" />
              {/* </section> */}
            </a>
          </section>
          <section id="Social-Platforms">
            <h4>Feel free to connect:</h4>
            <section id="icons">
              <a
                id="Icon"
                className="icon"
                target="_blank"
                href="https://www.linkedin.com/in/lukejosephriches"
              >
                <FaLinkedin />
              </a>
              {"   "}
              <a
                id="Icon"
                className="icon"
                target="_blank"
                href="https://github.com/LukeRiches"
              >
                <FaGithub />
              </a>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
}

export default Contact;
