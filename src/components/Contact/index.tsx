import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./styles.css";
import CircularText from "../../shared/CircularText";
import { FaInstagram } from "react-icons/fa6";

export function Contact() {
  return (
    <>
      <h1 className="title">Formas de contato</h1>
      <div className="contact-content">
        <p>Fabriciooliveiralopes50@gmail.com</p>
        <p>+55 11 96016-8159</p>
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
          <a href="" className="icon">
            <FaInstagram  size={30}/>
          </a>
        </nav>
      </div>
      <CircularText
        text="VAMOS TRABALHAR JUNTOS! VAMOS TRABALHAR JUNTOS!"
        radius={120}
      />
    </>
  );
}
