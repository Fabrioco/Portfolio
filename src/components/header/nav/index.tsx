import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

interface NavigationProps {
  scrollToMain: () => void;
  scrollToAbout: () => void;
  scrollToProjects: () => void;
  scrollToContacts: () => void;
}

export default function Navigation({
  scrollToMain,
  scrollToAbout,
  scrollToProjects,
  scrollToContacts,
}: NavigationProps) {
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (width < 768) {
    return <RxHamburgerMenu size={30} color="#fff" className="menu" />;
  }

  return (
    <nav>
      <ul>
        <li className="link" onClick={scrollToMain}>
          <a href="#">Main</a>
        </li>
        <li className="link" onClick={scrollToAbout}>
          <a href="#">Portfólio</a>
        </li>
        <li className="link" onClick={scrollToProjects}>
          <a href="#">Meus Serviços</a>
        </li>
        <li className="link" onClick={scrollToContacts}>
          <a href="#">Contatos</a>
        </li>
      </ul>
    </nav>
  );
}
