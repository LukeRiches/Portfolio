import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <Home></Home>
        <Skills></Skills>
        <Projects></Projects>
        <Contact></Contact>
      </main>
    </>
  );
}

export default App;
