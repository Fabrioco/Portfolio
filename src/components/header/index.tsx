import laptop from "../../assets/images/laptop.svg";
import "./header.css";

export function Header() {
  return (
    <header>
      <main>
        <img src={laptop} alt="Laptop.svg" />
        <h1 className="titleHeader">Fabrício Lopes</h1>
      </main>
      <nav>
        <ul>
          <li className="link">
            <a href="#">Main</a>
          </li>
          <li className="link">
            <a href="#">Portfólio</a>
          </li>
          <li className="link">
            <a href="#">Meus Serviços</a>
          </li>
          <li className="link">
            <a href="#">Contatos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
