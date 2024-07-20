import Project from "../Project";
import "./styles.css";
import loja from "../../../../assets/images/loja.png";
import dog from "../../../../assets/images/dog.png";
import flix from "../../../../assets/images/flix.png";
import devfood from "../../../../assets/images/devfood.png";

export default function ListProjects() {
  return (
    <div className="list">
      <Project
        title="E-commerce Virtual"
        img={loja}
        link="https://github.com/Fabrioco/Loja"
      />
      <Project
        title="Dog Imperador"
        img={dog}
        link="https://github.com/Fabrioco/dog-imperador"
      />
      <Project
        title="Prime-Flix"
        img={flix}
        link="https://github.com/Fabrioco/Prime-Flix"
      />
      <Project
        title="DevFood"
        img={devfood}
        link="https://github.com/Fabrioco/DevFood"
      />
    </div>
  );
}
