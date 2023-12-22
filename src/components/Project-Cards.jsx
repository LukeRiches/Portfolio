import { useState, useEffect } from "react";
// import { fadeInRight } from "react-animations";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCards({ project, projectList }) {
  // console.log(projectList);
  // console.log(projectIsLoading);

  // const projects = [
  //   [
  //     {
  //       video: "🌳",
  //       title: "NC NEWS API",
  //       description: "Test",
  //       hostedLink: "https://northcoders-news-api-phe8.onrender.com/api",
  //       repoLink: "https://github.com/LukeRiches/Northcoders-News-API",
  //     },
  //   ]
  // ]

  // animate__animated animate__fadeInRight

  return (
    <ol className="Card-Row">
      {projectList.map((project) => {
        if (project.image) {
          return (
            <li
              className="Project-Card animate__animated animate__fadeIn"
              key={project.title}
            >
              {/* <section id="Project-Card-Content"> */}
              <section id="Links">
                <a
                  href={project.repoLink}
                  target="_blank"
                  className="icon Icon-Link"
                >
                  <FaGithub />
                </a>
                <a
                  href={project.hostedLink}
                  target="_blank"
                  className="icon Icon-Link"
                  id="External-Link"
                >
                  <FaExternalLinkAlt />
                </a>
              </section>
              <section className="Project-Body">
                <p className="project" id="Title">
                  {project.title}
                </p>
              </section>
              <img
                src={project.image}
                alt=""
                width="234"
                length="253"
                id="Project-Preview"
              />
              <ol className="Project-Description">
                {project.description.map((skill) => {
                  return (
                    <li key={skill} id="skill">
                      {skill}
                    </li>
                  );
                })}
              </ol>
              {/* </section> */}
            </li>
          );
        }
        if (project.video) {
          return (
            <li
              className="Project-Card  animate__animated animate__fadeIn"
              key={project.title}
            >
              <section id="Links">
                <a
                  href={project.repoLink}
                  target="_blank"
                  className="icon Icon-Link"
                >
                  <FaGithub />
                </a>
                <a
                  href={project.hostedLink}
                  target="_blank"
                  className="icon Icon-Link"
                  id="External-Link"
                >
                  <FaExternalLinkAlt />
                </a>
              </section>

              <section className="Project-Body">
                <p className="project" id="Title">
                  {project.title}
                </p>
              </section>

              <video controls playsInline autoPlay loop>
                <source
                  src={project.video}
                  type="video/mp4"
                  id="Project-Preview"
                />
                <p>
                  Your browser doesn't support HTML video :( Here is a
                  <a href="https://www.youtube.com/watch?v=4BQfUEp9Z8c&t=3s">
                    link to the full demo video
                  </a>{" "}
                  instead.
                </p>
              </video>
              <ol className="Project-Description">
                {project.description.map((skill) => {
                  return (
                    <li key={skill} id="skill">
                      {skill}
                    </li>
                  );
                })}
              </ol>
            </li>
          );
        }
      })}
    </ol>
  );
}

export default ProjectCards;
