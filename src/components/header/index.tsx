import laptop from "../../assets/images/laptop.svg";
import "./header.css";

function Header() {
  return (
    <header>
      <main>
        <img src={laptop} alt="Laptop.svg" />
        <h1 className="titleHeader">Fabrício Lopes</h1>
      </main>
      <nav>
        <ul>
          <li className="link selecioned">
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
      <section>

        <span className="btnLanguage selecioned">Pt</span>
        <span className="btnLanguage">En</span>
      </section>
    </header>
  );
}

export default Header;
