import { useState, useEffect } from "react";

function SkillCards({ skill, skillList }) {
  // console.log(skillList);
  // console.log(skillIsLoading);

  // {
  //   icon: 💻,
  //   title: JavaScript,
  //   description: ,
  // }

  // animate__animated animate__fadeInRight

  return (
    <ol id="Skill-Cards">
      {skillList.map((skill) => {
        if (!skill.icon) {
          return (
            <li
              className="card-no-icon animate__animated animate__fadeIn"
              key={skill.title}
            >
              <section>
                <p className="skill" id="Title">
                  {skill.title}
                </p>
              </section>

              <p className="skill" id="Skill-Description">
                {skill.description}
              </p>
            </li>
          );
        }

        if (skill.icon2 && skill.description.length === 0) {
          return (
            <li
              className="card-no-description animate__animated animate__fadeIn"
              key={skill.title}
            >
              <section>
                <section id="Icons">
                  <p className="skill" id="Icon">
                    {skill.icon}
                  </p>
                  <p className="skill" id="Icon">
                    {skill.icon2}
                  </p>
                </section>

                <p className="skill" id="Title">
                  {skill.title}
                </p>
              </section>
            </li>
          );
        }
        if (skill.title === "Piskel") {
          return (
            <li
              className="card animate__animated animate__fadeIn"
              key={skill.title}
            >
              <section>
                <section id="Icons">
                  <img
                    src={skill.icon}
                    alt={`${skill.title}'s logo`}
                    className="skill"
                    id="Piskel"
                    // style="filter"
                  />
                </section>

                <p className="skill" id="Title-With-Image">
                  {skill.title}
                </p>
              </section>

              <p className="skill" id="Skill-Description">
                {skill.description}
              </p>
            </li>
          );
        }
        if (skill.title === "Phaser") {
          return (
            <li
              className="card animate__animated animate__fadeIn"
              key={skill.title}
            >
              <section>
                <section id="Icons">
                  <img
                    src={skill.icon}
                    alt={`${skill.title}'s logo`}
                    className="skill"
                    id="Phaser"
                    // style="filter"
                  />
                </section>

                <p className="skill" id="Title-With-Image">
                  {skill.title}
                </p>
              </section>

              <p className="skill" id="Skill-Description">
                {skill.description}
              </p>
            </li>
          );
        }
        if (skill.title === "Tiled") {
          return (
            <li
              className="card animate__animated animate__fadeIn"
              key={skill.title}
            >
              <section>
                <section id="Icons">
                  <img
                    src={skill.icon}
                    alt={`${skill.title}'s logo`}
                    className="skill"
                    id="Tiled"
                    // style="filter"
                  />
                </section>

                <p className="skill" id="Title-With-Image">
                  {skill.title}
                </p>
              </section>

              <p className="skill" id="Skill-Description">
                {skill.description}
              </p>
            </li>
          );
        }
        if (skill.description.length === 0) {
          return (
            <li
              className="card-no-description animate__animated animate__fadeIn"
              key={skill.title}
            >
              <section>
                <section id="Icons">
                  <p className="skill" id="Icon">
                    {skill.icon}
                  </p>
                </section>

                <p className="skill" id="Title">
                  {skill.title}
                </p>
              </section>
            </li>
          );
        }
        if (skill.icon2) {
          return (
            <li
              className="card animate__animated animate__fadeIn"
              key={skill.title}
            >
              <section>
                <section id="Icons">
                  <p className="skill" id="Icon">
                    {skill.icon}
                  </p>
                  <p className="skill" id="Icon">
                    {skill.icon2}
                  </p>
                </section>

                <p className="skill" id="Title">
                  {skill.title}
                </p>
              </section>

              <p className="skill" id="Skill-Description">
                {skill.description}
              </p>
            </li>
          );
        }
        if (skill.icon2) {
          return (
            <li
              className="card animate__animated animate__fadeIn"
              key={skill.title}
            >
              <section>
                <section id="Icons">
                  <p className="skill" id="Icon">
                    {skill.icon}
                  </p>
                  <p className="skill" id="Icon">
                    {skill.icon2}
                  </p>
                </section>

                <p className="skill" id="Title">
                  {skill.title}
                </p>
              </section>

              <p className="skill" id="Skill-Description">
                {skill.description}
              </p>
            </li>
          );
        } else {
          return (
            <li
              className="card animate__animated animate__fadeIn"
              key={skill.title}
            >
              <section>
                <p className="skill" id="Icon">
                  {skill.icon}
                </p>
                <p className="skill" id="Title">
                  {skill.title}
                </p>
              </section>

              <p className="skill " id="Skill-Description">
                {skill.description}
              </p>
            </li>
          );
        }
      })}
    </ol>
  );
}

export default SkillCards;
