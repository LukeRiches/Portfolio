import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import NCNEWSPreview from "./assets/NC-NEWS-Preview.png";
import NCNEWSAPIPreview from "./assets/NC-NEWS-API.png";
import PixelPlungePreview from "./assets/Pixel-Plunge-Preview.mp4";
import Phaser from "./assets/Phaser-Logo.png";
import Piskel from "./assets/piksel-logo.png";
import Tiled from "./assets/tiled-logo.png";
import { useMediaQuery } from "react-responsive";
import "animate.css";
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

function App() {
  const [setSkill, skill] = useState("General");

  const skills = [
    [
      {
        icon: <DiGit />,
        icon2: <FaGithub />,
        title: "Git and GitHub",
        description: "",
      },

      {
        icon: <SiJavascript />,
        icon2: <FaNode />,
        title: "JavaScript Node.JS",
        description: "",
      },

      {
        icon: <SiJest />,
        title: "Test Driven Development",
        description: "With Jest",
      },

      {
        icon: <DiNpm />,
        title: "NPM",
        description: "",
      },

      {
        icon: <DiTrello />,
        title: "Kanban and Sprint planning",
        description: "Through Trello",
      },

      {
        icon: <DiScrum />,
        title: "Scrum Methodologies",
        description: "",
      },

      {
        icon: <MdPeopleOutline />,
        title: "Paired Programming",
        description: "",
      },
    ],
    [
      {
        icon: <FaReact />,
        title: "React.JS",
        description: "",
      },
      {
        icon: <DiHtml5 />,
        title: "HTML",
        description: "",
      },
      {
        icon: <DiCss3 />,
        title: "CSS",
        description: "",
      },
      {
        icon: <SiLighthouse />,
        title: "Lighthouse",
        description: "Accessibility Testing",
      },
      {
        icon: <MdOutlineDesignServices />,
        title: "UI/UX Design",
        description: "",
      },
      {
        icon: <SiAxios />,
        title: "API Calls",
        description: "With Axios",
      },
      {
        icon: <DiNpm />,
        title: "NPM Packages",
        description:
          "react-router-dom, react-spinners, react-animations, react-icons, react-router-hash-link",
      },
    ],
    [
      {
        icon: <DiStreamline />,
        icon2: <DiPostgresql />,
        title: "SQL and PostgresSQL",
        description: "",
      },

      {
        icon: <SiExpress />,
        title: "Express",
        description: "",
      },
      {
        icon: <DiNpm />,
        title: "NPM Packages",
        description: "node-postgres, PG-Format, supertest",
      },
      {
        icon: <SiDotenv />,
        title: ".ENV",
        description: "Environment testing",
      },
      {
        icon: <SiInsomnia />,
        title: "Insomnia",
        description: "Endpoint testing",
      },
    ],
    [
      {
        icon: Phaser,
        title: "Phaser",
        description: "",
      },
      {
        icon: Piskel,
        title: "Piskel",
        description: "",
      },
      {
        icon: Tiled,
        title: "Tiled",
        description: "",
      },
    ],
  ];

  const projects = [
    [
      {
        image: NCNEWSAPIPreview,
        title: "NC NEWS API",
        description: [
          "PSQL",
          "pg-format",
          "Express",
          "node-postgres",

          "dotenv",
        ],
        hostedLink: "https://northcoders-news-api-phe8.onrender.com/api",
        repoLink: "https://github.com/LukeRiches/Northcoders-News-API",
      },
      {
        image: NCNEWSPreview,
        title: "NC NEWS",
        description: ["Vite", "React", "CSS", "React-Router-Dom"],
        hostedLink: "https://nc-news-luke-riches.netlify.app",
        repoLink: "https://github.com/LukeRiches/NC-News",
      },
    ],
    [
      {
        video: PixelPlungePreview,
        title: "Pixel Plunge",
        description: ["React", "Phaser", "Tiled", "Piskel", "Firebase"],
        hostedLink: "https://pixel-plunge.netlify.app",
        repoLink: "https://github.com/sting-arrays/pixel-plunge",
      },
    ],
  ];

  const collumn = useMediaQuery({
    query: "(min-width: 992px)",
  });

  console.log(collumn);

  return (
    <>
      <Header></Header>
      <main>
        <Home></Home>
        <Skills skills={skills}></Skills>
        <Projects projects={projects} collumn={collumn}></Projects>
        <Contact></Contact>
      </main>
    </>
  );
}

export default App;
