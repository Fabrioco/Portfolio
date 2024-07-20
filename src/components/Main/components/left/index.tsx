import "./index.css";
import curriculo from "../../../../assets/files/curriculo-fabricio-lopes.pdf";

export default function Left() {
  return (
    <div className="main-content">
      <h1>Fabrício Lopes</h1>
      <p>
        Desenvolvedor Front-End com experiência em criar interfaces modernas e
        responsivas. Apaixonado por aprender novas tecnologias e enfrentar
        desafios complexos.
      </p>
      <a href={curriculo} download>
        Baixar Curriculo
      </a>
    </div>
  );
}
