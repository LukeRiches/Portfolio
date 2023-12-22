import { useState } from "react";
import ProjectDescription from "./Project-Description";
import ProjectCards from "./Project-Cards";
import { IoRemoveOutline } from "react-icons/io5";
import { RxDividerVertical } from "react-icons/rx";
import ProjectsPagination from "./Projects-Pagination";
{
  /* <RxDividerVertical /> */
}

function Projects({ projects, collumn }) {
  const [project, setProject] = useState("NC NEWS");
  const [projectList, setProjectList] = useState(projects[0]);

  function setProjectToNC() {
    setProjectList(projects[0]);
    setProject("NC NEWS");
  }

  function setProjectToPixelPlunge() {
    setProjectList(projects[1]);
    setProject("Pixel Plunge");
  }

  return (
    <section id="Projects">
      <section id="Left-Side">
        <ProjectDescription project={project}></ProjectDescription>
      </section>

      <section id="project-pagination">
        <button
          className="Projects-Button"
          id={project === "NC NEWS" ? "active" : ""}
          onClick={setProjectToNC}
        ></button>

        <ProjectsPagination collumn={collumn} />

        <button
          className="Projects-Button"
          id={project === "Pixel Plunge" ? "active" : ""}
          onClick={setProjectToPixelPlunge}
        ></button>
      </section>

      <section id="Project-Cards">
        <section className="Card-Row">
          {/* <div className="Project-Card">
            <p>💽</p>
            <p>Test</p>
          </div>
          <div className="Project-Card">
            <p>💽</p>
            <p>Test</p>
          </div> */}
          <ProjectCards projectList={projectList}></ProjectCards>
        </section>
      </section>
    </section>
  );
}

export default Projects;
