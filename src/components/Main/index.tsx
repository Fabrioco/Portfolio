import { Center } from "./components/center";
import Left from "./components/left";
import Right from "./components/right";
import "./Home.css";

export function Home() {
  return (
    <div className="home-container">
      <Left />
      <Center />
      <Right />
    </div>
  );
}
