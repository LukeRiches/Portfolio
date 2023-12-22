function SkillDescription({ skill }) {
  // className = " animate__animated animate__fadeIn";

  if (skill === "General") {
    return (
      <section
        id="Description" /* className="animate__animated animate__fadeIn" */
      >
        <h2 className="Section-Title">Skills</h2>
        <h3 className="Subheading animate__animated animate__fadeIn">
          General
        </h3>
        <p className="Body animate__animated animate__fadeIn">
          Throughout my time at Northcoders I was introduced to many coding
          principles such as version control through Git and GitHub. The
          language which has been the foundation to everything I have learnt so
          far is JavaScript, run through Node.JS. Test Driven Development,
          through Jest, is an integral principal that leads my development to
          guarantee a high standard of code.
        </p>
      </section>
    );
  }
  if (skill === "Frontend") {
    return (
      <section
        id="Description" /* className="animate__animated animate__fadeIn" */
      >
        <h2 className="Section-Title">Skills</h2>
        <h3 className="Subheading">Frontend</h3>
        <p className="Body animate__animated animate__fadeIn">
          So far my frontend development has centred around React, leveraging it
          with packages like react-dom, react-router-dom, and react spinners.
          Complemented by a solid understanding of HTML and DOM manipulation, I
          prioritise crafting seamless user interfaces and engaging user
          experiences.
          <br />
          <br />
          Recognising the pivotal role of UI/UX design in user engagement, I
          emphasise its importance in every project. I am attuned to the
          significance of accessibility, employing semantic HTML and tab
          controls to ensure inclusivity. Rigorous testing using tools like
          Lighthouse is integral to guaranteeing a high standard of
          accessibility in all my applications.
        </p>
      </section>
    );
  }
  if (skill === "Backend") {
    return (
      <section
        id="Description" /* className="animate__animated animate__fadeIn" */
      >
        <h2 className="Section-Title">Skills</h2>
        <h3 className="Subheading animate__animated animate__fadeIn">
          Backend
        </h3>
        <p className="Body animate__animated animate__fadeIn">
          Through JavaScript and PostgreSQL I can build RESTful API’s that
          feature essential CRUD operations and follow an MVC build pattern.
          Frameworks are built with express and makes use of node-postgres.
          Secured through pg-format to prevent SQL injection. Includes built-in
          and custom error handling as well as pagination.
          <br />
          <br />
          Throughout the build I maintain a commitment to rigorous testing,
          utilising dotenv for testing environments. Once hosted endpoints are
          tested through Insomnia, ensuring the reliability.
        </p>
      </section>
    );
  }
  if (skill === "Game Development") {
    return (
      <section
        id="Description" /* className="animate__animated animate__fadeIn" */
      >
        <h2 className="Section-Title">Skills</h2>
        <h3 className="Subheading animate__animated animate__fadeIn">
          Game Development
        </h3>
        <p className="Body animate__animated animate__fadeIn">
          This has always been something that has sparked my curiosity due to
          video games dominating my childhood, but I always felt it would be too
          complex to attempt. So having created a game it feels surreal, my
          introduction to game development was through Phaser which applied
          concepts like Object Orientated Programming. Another part I really
          enjoyed was Sprite work which has furthered my respect for games
          artists.This is something I thoroughly enjoy and will continue.
        </p>
      </section>
    );
  }
}

export default SkillDescription;
