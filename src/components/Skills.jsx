import { useState } from "react";
import SkillCards from "./Skill-Cards";
import SkillDescription from "./Skill-Description";
import { IoRemoveOutline } from "react-icons/io5";

function Skills({ skills }) {
  // console.log(skills);
  // console.log(skills[0]);

  const [skill, setSkill] = useState("General");
  const [skillList, setSkillList] = useState(skills[0]);
  const [skillIsLoading, setSkillIsLoading] = useState(false);

  function setSkillToGeneral() {
    // setSkillIsLoading(true);
    setSkillList(skills[0]);
    setSkill("General");
  }

  function setSkillToFrontend() {
    // setSkillIsLoading(true);
    setSkillList(skills[1]);
    setSkill("Frontend");
  }

  function setSkillToBackend() {
    // setSkillIsLoading(true);
    setSkillList(skills[2]);
    setSkill("Backend");
  }

  function setSkillToGameDev() {
    // setSkillIsLoading(true);
    setSkillList(skills[3]);
    setSkill("Game Development");
  }

  return (
    <section id="Skills">
      <section id="Left-Side">
        <SkillDescription skill={skill}></SkillDescription>

        <section id="pagination">
          <button
            className="Skills-Button"
            id={skill === "General" ? "active" : ""}
            onClick={setSkillToGeneral}
          ></button>
          <IoRemoveOutline />

          <button
            className="Skills-Button"
            id={skill === "Frontend" ? "active" : ""}
            onClick={setSkillToFrontend}
          ></button>
          <IoRemoveOutline />

          <button
            className="Skills-Button"
            id={skill === "Backend" ? "active" : ""}
            onClick={setSkillToBackend}
          ></button>
          <IoRemoveOutline />

          <button
            className="Skills-Button"
            id={skill === "Game Development" ? "active" : ""}
            onClick={setSkillToGameDev}
          ></button>
        </section>
      </section>

      <SkillCards
        skill={skill}
        skillList={skillList}
        skillIsLoading={skillIsLoading}
        setSkillIsLoading={setSkillIsLoading}
      ></SkillCards>
    </section>
  );
}

export default Skills;
