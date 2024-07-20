import { Header } from "./components/header";
import "./assets/styles/GlobalStyles.css";
import "./assets/styles/Root.css";
import { Home } from "./components/Main";
import About from "./components/About";
import Projects from "./components/Projects";
import { Carrousel } from "./components/Carroussel";
import { Contact } from "./components/Contact";
import { Footer } from "./components/footer";

export default function App() {
  return (
    <div>
      <div className="border-left"></div>
      <div className="border-right"></div>
      <Header />
      <Home />
      <About />
      <Projects />
      <Carrousel />
      <Contact />
      <Footer />
    </div>
  );
}
