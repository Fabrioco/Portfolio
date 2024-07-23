import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import "./nav.css";
import { FaGithub, FaLinkedin, FaX } from "react-icons/fa6";

interface NavigationProps {
  scrollToMain: () => void;
  scrollToAbout: () => void;
  scrollToProjects: () => void;
  scrollToContacts: () => void;
}

export default function Navigation({
  scrollToMain,
  scrollToAbout,
  scrollToProjects,
  scrollToContacts,
}: NavigationProps) {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (width < 768) {
    return (
      <>
        <RxHamburgerMenu
          onClick={() => setIsOpen(!isOpen)}
          size={30}
          color="#fff"
          className="menu"
        />
        <div className={isOpen ? "modal open" : "modal"}>
          <FaX size={30} onClick={() => setIsOpen(!isOpen)} color="#fefefe" />
          <nav>
            <ul className="links">
              <li className="link" onClick={scrollToMain}>
                <span onClick={() => setIsOpen(!isOpen)}>Main</span>
              </li>
              <li className="link" onClick={scrollToAbout}>
                <span onClick={() => setIsOpen(!isOpen)}>Portfólio</span>
              </li>
              <li className="link" onClick={scrollToProjects}>
                <span onClick={() => setIsOpen(!isOpen)}>Meus Serviços</span>
              </li>
              <li className="link" onClick={scrollToContacts}>
                <span onClick={() => setIsOpen(!isOpen)}>Contatos</span>
              </li>
            </ul>
          </nav>
          <div className="icons">
            <a
              href="https://www.linkedin.com/in/fabrício-oliveira-lopes-b713892bb"
              className="icon"
            >
              <FaLinkedin size={30} />
            </a>
            <a href="https://github.com/Fabrioco" className="icon">
              <FaGithub size={30} />
            </a>
          </div>
          <div className="job">
            <p>Fabriciooliveiralopes50@gmail.com</p>
            <p>+55 11 96016-8159</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <nav>
      <ul>
        <li className="link" onClick={scrollToMain}>
          <a href="#">Main</a>
        </li>
        <li className="link" onClick={scrollToAbout}>
          <a href="#">Portfólio</a>
        </li>
        <li className="link" onClick={scrollToProjects}>
          <a href="#">Meus Serviços</a>
        </li>
        <li className="link" onClick={scrollToContacts}>
          <a href="#">Contatos</a>
        </li>
      </ul>
    </nav>
  );
}
