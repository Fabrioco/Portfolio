import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./right.css";

export default function Right() {
  return (
    <div className="right-content">
      <div className="job">
        <h2>Desenvolvedor Front-End</h2>
        <p>Fabriciooliveiralopes50@gmail.com</p>
        <p>+55 11 96016-8159</p>
      </div>
      <nav>
        <div className="border-icon">
          <i className="icon">
            <FaInstagram size={30} />
          </i>
        </div>
        <div className="border-icon">
          <i className="icon">
            <FaLinkedin size={30} />
          </i>
        </div>
        <div className="border-icon">
          <i className="icon">
            <FaGithub size={30} />
          </i>
        </div>
      </nav>
    </div>
  );
}
