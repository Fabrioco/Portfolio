import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { CgFigma } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FaGitAlt } from "react-icons/fa";

import './carrousel.css'

export function Carrousel() {
  return (
    <div  className="carrousel-container">
      <FaReact className="carrousel" color="#61DBFB" />
      <SiTailwindcss className="carrousel" color="#00B9D8" />
      <SiTypescript className="carrousel" color="#007ACC" />
      <CgFigma className="carrousel" color="#F24E1E" />
      <FaGitAlt className="carrousel" color="#F34F29" />
      <BsGithub className="carrousel" color="#000000" />
    </div>
  );
}
