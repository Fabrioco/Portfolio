import laptop from "../../assets/images/laptop.svg";
import "./header.css";
import Navigation from "./nav";

export interface NavigationProps {
  scrollToMain: () => void;
  scrollToAbout: () => void;
  scrollToProjects: () => void;
  scrollToContacts: () => void;
}

export function Header({
  scrollToMain,
  scrollToAbout,
  scrollToProjects,
  scrollToContacts,
}: NavigationProps) {
  return (
    <header>
      <main>
        <img src={laptop} alt="Laptop.svg" />
        <h1 className="titleHeader">Fabrício Lopes</h1>
      </main>
      <Navigation
        scrollToMain={scrollToMain}
        scrollToAbout={scrollToAbout}
        scrollToProjects={scrollToProjects}
        scrollToContacts={scrollToContacts}
      />
    </header>
  );
}
