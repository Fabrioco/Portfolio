import Project from "../Project";
import "./styles.css";
import loja from "../../../../assets/images/loja.png";
import dog from "../../../../assets/images/dog.png";
import hotmart from "../../../../assets/images/hotmart.png";
import ecommerce from "../../../../assets/images/ecommerce.png";
import barber from "../../../../assets/images/barber.png";

export default function ListProjects() {
  return (
    <div className="list">
      <Project
        title="Loja Papelaria"
        img={loja}
        link="https://github.com/Fabrioco/Loja"
        desc="E-commerce"
      />
      <Project
        title="Dog Imperador"
        img={dog}
        link="https://github.com/Fabrioco/dog-imperador"
        desc="Landing Page"
      />
      <Project
        title="Hotmart"
        img={hotmart}
        link="https://github.com/Fabrioco/hotmart"
        desc="Venda de cursos"
      />
      <Project
        title="E-commerce"
        img={ecommerce}
        link="https://github.com/Fabrioco/e-commerce-fullstack"
        desc="E-commerce Full stack"
      />
      <Project
        title="Agendamento Barbearia"
        img={barber}
        link="https://github.com/Fabrioco/Site-Barbearia"
        desc="Landing Page"
      />
    </div>
  );
}
