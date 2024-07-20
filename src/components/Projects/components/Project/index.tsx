import { FaGithub } from "react-icons/fa";
import "./project.css";

interface ProjectProps {
  title: string;
  img: string;
  link: string;
}

export default function Project({ title, img, link }: ProjectProps) {
  return (
    <div className="project">
      <span className="title">{title}</span>
      <div className="project-img">
        <img src={img} alt={title} className="img" />
        <p className="link">
          <a href={link}>
            Ver código &rarr; <FaGithub />
          </a>
        </p>
        <p>{}</p>
      </div>
    </div>
  );
}
