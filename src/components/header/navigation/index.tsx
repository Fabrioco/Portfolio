import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navigation() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    setWidth(window.innerWidth);
    console.log(width);
  }, [window.innerWidth]);

  console.log(width);

  if (width < 768) {
    return <RxHamburgerMenu size={30} color="#fff" className="menu" />;
  }

  if (width > 768) {
    return (
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
    );
  }
}
