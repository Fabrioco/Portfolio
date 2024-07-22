import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./right.css";

export default function Right() {
  return (
    <div className="right-content">
      <div className="job">
        <h2>Desenvolvedor Front-End</h2>
        <p>Fabriciooliveiralopes50@gmail.com</p>
        <p>+55 11 96016-8159</p>
      </div>
      <nav className="icons">
        <a
          href="https://www.linkedin.com/in/fabrício-oliveira-lopes-b713892bb"
          className="icon"
        >
          <FaLinkedin size={30} />
        </a>
        <a href="https://github.com/Fabrioco" className="icon">
          <FaGithub size={30} />
        </a>
      </nav>
    </div>
  );
}
