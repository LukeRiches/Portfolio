import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import NCNEWSPreview from "../assets/NC-NEWS-Preview.png";
import NCNEWSAPIPreview from "../assets/NC-NEWS-API.png";
import PortfolioPreview from "../assets/Portfolio-Wireframe.png";
import PixelPlungePreview from "../assets/Pixel-Plunge-Preview.mp4";
import CatchyPreview from "../assets/Catchy-Preview.png";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  return (
    <section id="Projects">
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="Projects-Swiper"
        grabCursor={true}
        autoHeight={true}
        keyboard={true}
      >
        <SwiperSlide>
          <section id="Left-Side">
            <section id="Description">
              <h2 className="Section-Title">Projects</h2>
              <section className="">
                <h3 className="Subheading ">Catchy</h3>
                <p className="Body ">
                  Catchy is my most exciting project yet! It is a music based
                  web app that’s goal is to bridge the current divide in the
                  music streaming industry. Right now you can checkout and
                  preview the Top 50 charts Globally, in the US and UK.
                  Currently in development is the apps user authentication for
                  fans and artists, which will then allow artists to share and
                  sell tickets for their upcoming gigs and for fans to browse
                  and buy.
                </p>
              </section>
            </section>
          </section>

          <section id="Project-Cards">
            <section className="Card-Row">
              <ol className="Card-Row">
                <li className="Project-Card-Video  " key="Catchy">
                  <section id="Links">
                    <a
                      href="https://thatscatchy.io"
                      target="_blank"
                      className="icon Icon-Link"
                      id="External-Link"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </section>

                  <section className="Project-Body">
                    <p className="project" id="Solo-Title">
                      Catchy
                    </p>
                  </section>
                  <img
                    src={CatchyPreview}
                    alt="A screenshot preview of the Catchy website"
                    width="234"
                    length="253"
                    id="Project-Preview"
                  />
                  <ol className="Project-Description">
                    <li key="React" id="skill">
                      React
                    </li>
                    <li key="Bootstrap" id="skill">
                      Bootstrap
                    </li>
                    <li key="Swiper" id="skill">
                      Swiper
                    </li>
                    <li key="Spotify" id="skill">
                      Spotify API
                    </li>
                    <li key="Firebase" id="skill">
                      Firebase
                    </li>
                  </ol>
                </li>
              </ol>
            </section>
          </section>
        </SwiperSlide>

        <SwiperSlide>
          <section id="Left-Side-Projects">
            <section id="Description">
              <h2 className="Section-Title">Projects</h2>
              <section className="">
                <h3 className="Subheading ">NC NEWS</h3>
                <p className="Body ">
                  NC News is a forum-style news site that show cases both my
                  Backend and Frontend development. <br />
                  <br /> The Backend is a REST API built with JavaScript and
                  PostgreSQL, Featuring essential CRUD operations. Follows an
                  MVC build pattern. The framework was built with express and
                  makes use of node-postgres. Secured through pg-format to
                  prevent SQL injection. The backend also includes built-in and
                  custom error handling as well as pagination. <br />
                  <br /> On the Frontend, a minimalist-styled CRUD application
                  that seamlessly connects to the backend using Axios. It
                  features parametric endpoints, visual cues like active link
                  buttons and loading bars to enhance the user experience. The
                  application showcases thoughtful design choices, including
                  conditional rendering for comments, optimistic rendering for
                  votes, and accessibility features like semantic HTML and tab
                  controls.
                </p>
              </section>
            </section>
          </section>

          <section id="Project-Cards">
            <section className="Card-Row">
              <ol className="Card-Row">
                <li className="Project-Card " key="NC NEWS">
                  <section id="Links">
                    <a
                      href="https://github.com/LukeRiches/NC-News"
                      target="_blank"
                      className="icon Icon-Link"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href="https://nc-news-luke-riches.netlify.app"
                      target="_blank"
                      className="icon Icon-Link"
                      id="External-Link"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </section>
                  <section className="Project-Body">
                    <p className="project" id="Title">
                      NC NEWS
                    </p>
                  </section>
                  <img
                    src={NCNEWSPreview}
                    alt="A screenshot preview of my NC News site"
                    width="234"
                    length="253"
                    id="Project-Preview"
                  />
                  <ol className="Project-Description">
                    <li key="Vite" id="skill">
                      Vite
                    </li>
                    <li key="React" id="skill">
                      React
                    </li>
                    <li key="CSS" id="skill">
                      CSS
                    </li>
                    <li key="React-Router-Dom" id="skill">
                      React-Router-Dom
                    </li>
                  </ol>
                </li>

                <li className="Project-Card " key="NC NEWS API">
                  <section id="Links">
                    <a
                      href="https://github.com/LukeRiches/Northcoders-News-API"
                      target="_blank"
                      className="icon Icon-Link"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href="https://northcoders-news-api-phe8.onrender.com/api"
                      target="_blank"
                      className="icon Icon-Link"
                      id="External-Link"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </section>
                  <section className="Project-Body">
                    <p className="project" id="Title">
                      NC NEWS API
                    </p>
                  </section>
                  <img
                    src={NCNEWSAPIPreview}
                    alt="A screenshot preview of my NC News API"
                    width="234"
                    length="253"
                    id="Project-Preview"
                  />
                  <ol className="Project-Description">
                    <li key="PSQL" id="skill">
                      PSQL
                    </li>
                    <li key="pg-format" id="skill">
                      pg-format
                    </li>
                    <li key="Express" id="skill">
                      Express
                    </li>
                    <li key="node-postgres" id="skill">
                      node-postgres
                    </li>
                    <li key="dotenv" id="skill">
                      dotenv
                    </li>
                  </ol>
                </li>
              </ol>
            </section>
          </section>
        </SwiperSlide>

        <SwiperSlide>
          <section id="Left-Side">
            <section id="Description">
              <h2 className="Section-Title">Projects</h2>
              <section className="">
                <h3 className="Subheading ">Pixel Plunge</h3>
                <p className="Body ">
                  Pixel Plunge is a browser-based desktop game built with
                  Phaser, completed as a final group project at NorthCoders. My
                  primary focus was in the games development such as, movement
                  mechanics, animation work, game over and endgame functionality
                  along with their associated UIs. Despite the 10-day timeframe
                  for planning and development, I take immense pride in our
                  collective achievement. The day-to-day responsibilities on
                  this project, driven by our shared passion, made it an
                  enjoyable and a rewarding experience.
                </p>
              </section>
            </section>
          </section>

          <section id="Project-Cards">
            <section className="Card-Row">
              <ol className="Card-Row">
                <li className="Project-Card-Video  " key="Pixel Plunge">
                  <section id="Links">
                    <a
                      href="https://github.com/sting-arrays/pixel-plunge"
                      target="_blank"
                      className="icon Icon-Link"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href="https://pixel-plunge.netlify.app"
                      target="_blank"
                      className="icon Icon-Link"
                      id="External-Link"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </section>

                  <section className="Project-Body">
                    <p className="project" id="Solo-Title">
                      Pixel Plunge
                    </p>
                  </section>

                  <video controls playsInline autoPlay loop>
                    <source
                      src={PixelPlungePreview}
                      type="video/mp4"
                      id="Project-Preview"
                    />
                    <p>
                      Your browser doesn't support HTML video :( Here is a
                      <a href="https://www.youtube.com/watch?v=4BQfUEp9Z8c&t=3s"></a>{" "}
                      link to the full demo video instead.
                    </p>
                  </video>
                  <ol className="Project-Description">
                    <li key="React" id="skill">
                      React
                    </li>
                    <li key="Phaser" id="skill">
                      Phaser
                    </li>
                    <li key="Tiled" id="skill">
                      Tiled
                    </li>
                    <li key="Piskel" id="skill">
                      Piskel
                    </li>
                    <li key="Firebase" id="skill">
                      Firebase
                    </li>
                  </ol>
                </li>
              </ol>
            </section>
          </section>
        </SwiperSlide>
        {/* <SwiperSlide>
          <section id="Left-Side">
            <section id="Description">
              <h2 className="Section-Title">Projects</h2>
              <section className="">
                <h3 className="Subheading ">Portfolio Site</h3>
                <p className="Body ">
                  I designed and created this portfolio site to showcase my
                  skills and expeirence in Software Development in search of my
                  first junior role. Throughout my journey I will update it with
                  noteworthy projects and on how my skills expand overtime. I'm
                  sure It will change a lot in terms of design over the years
                  :) But currently it is a single page application planned and
                  designed in Freeform, built with React and makes use of
                  Swiperjs and react-router-hash-link. Even from a simple one
                  page site I had a few learning curves, as seen in my plan I
                  initially wanted to give specific components a fixed height
                  but in doing so caused problems with navigation and
                  responsiveness instead I used auto height which worked perfect
                  for responsiveness.
                </p>
              </section>
            </section>
          </section>

          <section id="Project-Cards">
            <section className="Card-Row">
              <ol className="Card-Row">
                <li className="Project-Card" key="Portfolio Wireframe">
                  <section className="Project-Body">
                    <p className="project" id="Title">
                      Wireframe in FreeForm
                    </p>
                  </section>

                  <img
                    src={PortfolioPreview}
                    alt="Portfolio Wireframe"
                    id="Portfolio-Preview"
                  />
                </li>
              </ol>
            </section>
          </section>
        </SwiperSlide> */}
      </Swiper>
    </section>
  );
}

export default Projects;
