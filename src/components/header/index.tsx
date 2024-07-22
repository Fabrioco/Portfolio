import laptop from "../../assets/images/laptop.svg";
import "./header.css";
import Navigation from "./navigation";

export function Header() {
  return (
    <header>
      <main>
        <img src={laptop} alt="Laptop.svg" />
        <h1 className="titleHeader">Fabrício Lopes</h1>
      </main>
      <Navigation />
    </header>
  );
}
