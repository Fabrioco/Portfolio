import ListProjects from "./components/listProject";
import "./styles.css";

export default function Projects() {
  return (
    <div className="projects-container">
      <h1 className="title">Meus Projetos</h1>
      <ListProjects />
    </div>
  );
}