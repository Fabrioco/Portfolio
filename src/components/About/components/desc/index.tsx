import profile from "../../../../assets/images/foto perfil.jpg";
import "./desc.css";
export function Desc() {
  return (
    <div className="desc">
      <p className="text">
        Tenho 21 anos e sou programador front-end especializado em JavaScript,
        ReactJS, React Native, Tailwind, e TypeScript. Desenvolvi diversas
        aplicações web e móveis, criando interfaces de usuário intuitivas e
        responsivas. Com ReactJS e React Native, construí componentes
        reutilizáveis e aplicativos móveis nativos. Tailwind me ajuda a
        estilizar rapidamente, garantindo um design moderno, enquanto TypeScript
        assegura a robustez dos meus projetos. Estou sempre buscando novos
        desafios para crescer profissionalmente e desenvolver soluções
        inovadoras.
      </p>
      <img src={profile} alt="Foto de perfil" className="profile" />
    </div>
  );
}
