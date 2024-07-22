import { Header } from "./components/header";
import { Home } from "./components/Main";
import About from "./components/About";
import Projects from "./components/Projects";
import { Carrousel } from "./components/Carroussel";
import { Contact } from "./components/Contact";
import { Footer } from "./components/footer";
import React from "react";

export default function App() {
  const homeRef = React.useRef<HTMLDivElement>(null);
  const aboutRef = React.useRef<HTMLDivElement>(null);
  const projectsRef = React.useRef<HTMLDivElement>(null);
  const contactRef = React.useRef<HTMLDivElement>(null);

  const scrollToMain = () => {
    if (homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContacts = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      <div className="border-left"></div>
      <div className="border-right"></div>
      <Header
        scrollToMain={scrollToMain}
        scrollToAbout={scrollToAbout}
        scrollToProjects={scrollToProjects}
        scrollToContacts={scrollToContacts}
      />
      <div className="home-container" ref={homeRef}>
        <Home />
      </div>
      <div className="about-container" ref={aboutRef}>
        <About />
      </div>
      <div className="projects-container" ref={projectsRef}>
        <Projects />
      </div>
      <Carrousel />
      <div className="contact" ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
