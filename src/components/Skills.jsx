import { useState, useEffect, useRef } from "react";
import Phaser from "../assets/Phaser-Logo.png";
import Piskel from "../assets/piksel-logo.png";
import Tiled from "../assets/tiled-logo.png";
import { FaGithub, FaNode, FaReact } from "react-icons/fa";
import {
  SiAxios,
  SiDotenv,
  SiExpress,
  SiInsomnia,
  SiJavascript,
  SiJest,
  SiLighthouse,
} from "react-icons/si";
import {
  DiCss3,
  DiGit,
  DiHtml5,
  DiNpm,
  DiPostgresql,
  DiScrum,
  DiStreamline,
  DiTrello,
} from "react-icons/di";
import { BsKanbanFill } from "react-icons/bs";
import { MdOutlineDesignServices, MdPeopleOutline } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";

function Skills() {
  return (
    <section id="Skills">
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="Skills-Swiper"
        grabCursor={true}
        autoHeight={true}
        keyboard={true}
      >
        <SwiperSlide>
          <section id="Left-Side">
            <section id="Description">
              <h2 className="Section-Title">Skills</h2>
              <h3 className="Subheading animate__animated animate__fadeIn">
                General
              </h3>
              <p className="Body animate__animated animate__fadeIn">
                Throughout my time at Northcoders I was introduced to many
                coding principles such as version control through Git and
                GitHub. The language which has been the foundation to everything
                I have learnt so far is JavaScript, run through Node.JS. Test
                Driven Development, through Jest, is an integral principal that
                leads my development to guarantee a high standard of code.
              </p>
            </section>
          </section>

          <ol id="Skill-Cards">
            <li
              className="card-no-description animate__animated animate__fadeIn"
              key="Git and GitHub"
            >
              <section>
                <section id="Icons">
                  <p className="skill" id="Icon">
                    <DiGit />
                  </p>
                  <p className="skill" id="Icon">
                    <FaGithub />
                  </p>
                </section>

                <p className="skill" id="Title">
                  Git and GitHub
                </p>
              </section>
            </li>
            <li
              className="card-no-description animate__animated animate__fadeIn"
              key="JavaScript Node.JS"
            >
              <section>
                <section id="Icons">
                  <p className="skill" id="Icon">
                    <SiJavascript />
                  </p>
                  <p className="skill" id="Icon">
                    <FaNode />
                  </p>
                </section>

                <p className="skill" id="Title">
                  JavaScript Node.JS
                </p>
              </section>
            </li>

            <li
              className="card animate__animated animate__fadeIn"
              key="Test Driven Development"
            >
              <section>
                <p className="skill" id="Icon">
                  <SiJest />
                </p>
                <p className="skill" id="Title">
                  Test Driven Development
                </p>
              </section>

              <p className="skill " id="Skill-Description">
                With Jest
              </p>
            </li>

            <li
              className="card-no-description animate__animated animate__fadeIn"
              key="NPM"
            >
              <section>
                <section id="Icons">
                  <p className="skill" id="Icon">
                    <DiNpm />
                  </p>
                </section>

                <p className="skill" id="Title">
                  NPM
                </p>
              </section>
            </li>

            <li
              className="card animate__animated animate__fadeIn"
              key="Kanban and Sprint planning"
            >
              <section>
                <p className="skill" id="Icon">
                  <DiTrello />
                </p>
                <p className="skill" id="Title">
                  Kanban and Sprint planning
                </p>
              </section>

              <p className="skill " id="Skill-Description">
                Through Trello
              </p>
            </li>

            <li
              className="card-no-description animate__animated animate__fadeIn"
              key="Scrum Methodologies"
            >
              <section>
                <section id="Icons">
                  <p className="skill" id="Icon">
                    <DiScrum />
                  </p>
                </section>

                <p className="skill" id="Title">
                  Scrum Methodologies
                </p>
              </section>
            </li>

            <li
              className="card-no-description animate__animated animate__fadeIn"
              key="Paired Programming"
            >
              <section>
                <section id="Icons">
                  <p className="skill" id="Icon">
                    <MdPeopleOutline />
                  </p>
                </section>

                <p className="skill" id="Title">
                  Paired Programming
                </p>
              </section>
            </li>
          </ol>
        </SwiperSlide>

        <SwiperSlide>
          <section id="Left-Side">
            <section id="Description">
              <h2 className="Section-Title">Skills</h2>
              <h3 className="Subheading">Frontend</h3>
              <p className="Body animate__animated animate__fadeIn">
                So far my frontend development has centred around React,
                leveraging it with packages like react-dom, react-router-dom,
                and react spinners. Complemented by a solid understanding of
                HTML and DOM manipulation, I prioritise crafting seamless user
                interfaces and engaging user experiences.
                <br />
                <br />
                Recognising the pivotal role of UI/UX design in user engagement,
                I emphasise its importance in every project. I am attuned to the
                significance of accessibility, employing semantic HTML and tab
                controls to ensure inclusivity. Rigorous testing using tools
                like Lighthouse is integral to guaranteeing a high standard of
                accessibility in all my applications.
              </p>
            </section>
          </section>

          <ol id="Skill-Cards">
            <li
              className="card-no-description animate__animated animate__fadeIn"
              key="React.JS"
            >
              <section>
                <section id="Icons">
                  <p className="skill" id="Icon">
                    <FaReact />
                  </p>
                </section>

                <p className="skill" id="Title">
                  React.JS
                </p>
              </section>
            </li>

            <li
              className="card-no-description animate__animated animate__fadeIn"
              key="HTML"
            >
              <section>
                <section id="Icons">
                  <p className="skill" id="Icon">
                    <DiHtml5 />
                  </p>
                </section>

                <p className="skill" id="Title">
                  HTML
                </p>
              </section>
            </li>

            <li
              className="card-no-description animate__animated animate__fadeIn"
              key="CSS"
            >
              <section>
                <section id="Icons">
                  <p className="skill" id="Icon">
                    <DiCss3 />
                  </p>
                </section>

                <p className="skill" id="Title">
                  CSS
                </p>
              </section>
            </li>

            <li
              className="card animate__animated animate__fadeIn"
              key="Lighthouse"
            >
              <section>
                <p className="skill" id="Icon">
                  <SiLighthouse />
                </p>
                <p className="skill" id="Title">
                  Lighthouse
                </p>
              </section>

              <p className="skill " id="Skill-Description">
                Accessibility Testing
              </p>
            </li>

            <li
              className="card animate__animated animate__fadeIn"
              key="API Calls"
            >
              <section>
                <p className="skill" id="Icon">
                  <SiAxios />
                </p>
                <p className="skill" id="Title">
                  API Calls
                </p>
              </section>

              <p className="skill " id="Skill-Description">
                With Axios
              </p>
            </li>

            <li
              className="card animate__animated animate__fadeIn"
              key="NPM Packages"
            >
              <section>
                <p className="skill" id="Icon">
                  <DiNpm />
                </p>
                <p className="skill" id="Title">
                  NPM Packages
                </p>
              </section>

              <p className="skill " id="Skill-Description">
                react-router-dom, react-spinners, react-animations, react-icons,
                react-router-hash-link
              </p>
            </li>

            <li
              className="card-no-description animate__animated animate__fadeIn"
              key="UI/UX Design"
            >
              <section>
                <section id="Icons">
                  <p className="skill" id="Icon">
                    <MdOutlineDesignServices />
                  </p>
                </section>

                <p className="skill" id="Title">
                  UI/UX Design
                </p>
              </section>
            </li>
          </ol>
        </SwiperSlide>

        <SwiperSlide>
          <section id="Left-Side">
            <section id="Description">
              <h2 className="Section-Title">Skills</h2>
              <h3 className="Subheading animate__animated animate__fadeIn">
                Backend
              </h3>
              <p className="Body animate__animated animate__fadeIn">
                Through JavaScript and PostgreSQL I can build RESTful API’s that
                feature essential CRUD operations and follow an MVC build
                pattern. Frameworks are built with express and makes use of
                node-postgres. Secured through pg-format to prevent SQL
                injection. Includes built-in and custom error handling as well
                as pagination.
                <br />
                <br />
                Throughout the build I maintain a commitment to rigorous
                testing, utilising dotenv for testing environments. Once hosted
                endpoints are tested through Insomnia, ensuring the reliability.
              </p>
            </section>
          </section>

          <ol id="Skill-Cards">
            <li
              className="card-no-description animate__animated animate__fadeIn"
              key="SQL and PostgresSQL"
            >
              <section>
                <section id="Icons">
                  <p className="skill" id="Icon">
                    <DiStreamline />
                  </p>
                  <p className="skill" id="Icon">
                    <DiPostgresql />
                  </p>
                </section>

                <p className="skill" id="Title">
                  SQL and PostgresSQL
                </p>
              </section>
            </li>

            <li
              className="card-no-description animate__animated animate__fadeIn"
              key="Express"
            >
              <section>
                <section id="Icons">
                  <p className="skill" id="Icon">
                    <SiExpress />
                  </p>
                </section>

                <p className="skill" id="Title">
                  Express
                </p>
              </section>
            </li>

            <li
              className="card animate__animated animate__fadeIn"
              key="NPM Packages"
            >
              <section>
                <p className="skill" id="Icon">
                  <DiNpm />
                </p>
                <p className="skill" id="Title">
                  NPM Packages
                </p>
              </section>

              <p className="skill " id="Skill-Description">
                node-postgres, PG-Format, supertest
              </p>
            </li>

            <li className="card animate__animated animate__fadeIn" key=".ENV">
              <section>
                <p className="skill" id="Icon">
                  <SiDotenv />
                </p>
                <p className="skill" id="Title">
                  .ENV
                </p>
              </section>

              <p className="skill " id="Skill-Description">
                Environment testing
              </p>
            </li>

            <li
              className="card animate__animated animate__fadeIn"
              key="Insomnia"
            >
              <section>
                <p className="skill" id="Icon">
                  <SiInsomnia />
                </p>
                <p className="skill" id="Title">
                  Insomnia
                </p>
              </section>

              <p className="skill " id="Skill-Description">
                Endpoint testing
              </p>
            </li>
          </ol>
        </SwiperSlide>

        <SwiperSlide>
          <section id="Left-Side">
            <section id="Description">
              <h2 className="Section-Title">Skills</h2>
              <h3 className="Subheading animate__animated animate__fadeIn">
                Game Development
              </h3>
              <p className="Body animate__animated animate__fadeIn">
                This has always been something that has sparked my curiosity due
                to video games dominating my childhood, but I always felt it
                would be too complex to attempt. So having created a game it
                feels surreal, my introduction to game development was through
                Phaser which applied concepts like Object Orientated
                Programming. Another part I really enjoyed was Sprite work which
                has furthered my respect for games artists.This is something I
                thoroughly enjoy and will continue.
              </p>
            </section>
          </section>

          <ol id="Skill-Cards">
            <li className="card animate__animated animate__fadeIn" key="Phaser">
              <section>
                <section id="Icons">
                  <img
                    src={Phaser}
                    alt={`Phaser's logo`}
                    className="skill"
                    id="Phaser"
                  />
                </section>

                <p className="skill" id="Title-With-Image">
                  Phaser
                </p>
              </section>

              <p className="skill" id="Skill-Description"></p>
            </li>

            <li className="card animate__animated animate__fadeIn" key="Piskel">
              <section>
                <section id="Icons">
                  <img
                    src={Piskel}
                    alt={`Piskel's logo`}
                    className="skill"
                    id="Piskel"
                  />
                </section>

                <p className="skill" id="Title-With-Image">
                  Piskel
                </p>
              </section>

              <p className="skill" id="Skill-Description"></p>
            </li>

            <li className="card animate__animated animate__fadeIn" key="Tiled">
              <section>
                <section id="Icons">
                  <img
                    src={Tiled}
                    alt={`Tiled's logo`}
                    className="skill"
                    id="Tiled"
                  />
                </section>

                <p className="skill" id="Title-With-Image">
                  Tiled
                </p>
              </section>

              <p className="skill" id="Skill-Description"></p>
            </li>
          </ol>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Skills;
