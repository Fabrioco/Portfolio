import { Header } from "./components/header";
import "./assets/styles/GlobalStyles.css";
import "./assets/styles/Root.css";
import { Home } from "./components/Main";
import About from "./components/About";
import Projects from "./components/Projects";

export default function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Projects />
    </div>
  );
}
