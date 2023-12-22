import { useState } from "react";

function About() {
  const [,] = useState();

  return (
    <section id="About">
      <h1 id="Name">
        Luke <br /> Riches
      </h1>

      <section id="Introduction">
        <h2 className="Section-Title">Introduction</h2>
        <h3 className="Subheading opening">
          Hi, I'm an aspiring Junior Developer!
        </h3>
        <p id="About-Me" className="Body opening">
          I’m eager to embark on a career In the ever-evolving tech landscape.
          My love for innovation and positive change drives me to seek
          opportunities at companies where I can contribute to meaningful
          projects that make a real world impact. My goal is not only to excel
          as a professional but also to evolve into the best version of myself,
          both personally and technically.
        </p>
      </section>
    </section>
  );
}

export default About;
