function ProjectDescription({ project }) {
  // console.log(project);
  // className = "animate__animated animate__fadeIn";
  if (project === "NC NEWS") {
    return (
      <section id="Description">
        <h2 className="Section-Title">Projects</h2>
        <section className="animate__animated animate__fadeIn">
          <h3 className="Subheading animate__animated animate__fadeIn">
            NC NEWS
          </h3>
          <p className="Body animate__animated animate__fadeIn">
            NC News is a forum-style news site that show cases both my Backend
            and Frontend development. <br />
            <br /> The Backend is a REST API built with JavaScript and
            PostgreSQL, Featuring essential CRUD operations. Follows an MVC
            build pattern. The framework was built with express and makes use of
            node-postgres. Secured through pg-format to prevent SQL injection.
            The backend also includes built-in and custom error handling as well
            as pagination. <br />
            <br /> On the Frontend, a minimalist-styled CRUD application that
            seamlessly connects to the backend using Axios. It features
            parametric endpoints, visual cues like active link buttons and
            loading bars to enhance the user experience. The application
            showcases thoughtful design choices, including conditional rendering
            for comments, optimistic rendering for votes, and accessibility
            features like semantic HTML and tab controls.
          </p>
        </section>
      </section>
    );
  }
  if (project === "Pixel Plunge") {
    return (
      <section id="Description">
        <h2 className="Section-Title">Projects</h2>
        <section className="animate__animated animate__fadeIn">
          <h3 className="Subheading animate__animated animate__fadeIn">
            Pixel Plunge
          </h3>
          <p className="Body animate__animated animate__fadeIn">
            Pixel Plunge is a browser-based desktop game built with Phaser,
            completed as a final group project at NorthCoders. My primary focus
            was in the games development such as, movement mechanics, animation
            work, game over and endgame functionality along with their
            associated UIs. Despite the 10-day timeframe for planning and
            development, I take immense pride in our collective achievement. The
            day-to-day responsibilities on this project, driven by our shared
            passion, made it an enjoyable and a rewarding experience.
          </p>
        </section>
      </section>
    );
  }
}

export default ProjectDescription;
