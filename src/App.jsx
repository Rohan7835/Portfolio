import { useState } from "react";
import Navbar from "./Components/Layout/Navbar";
import "./App.css";
import RoutesComp from "./Routes/Routes";

function App() {
  const [cursorPos, setCursorPos] = useState({ x: 173, y: 319 });
  const [darkTheme, setDarkTheme] = useState(false);

  const changeCursor = (e) => {
    setCursorPos({ x: e.pageX, y: e.pageY });
  };
  return (
    <div
      className={`${
        darkTheme ? "dark" : "light"
      } body main-container cursor-none`}
      onMouseMove={(e) => changeCursor(e)}
    >
      <button
        className="toggle-btn"
        onClick={() => setDarkTheme((prv) => !prv)}
      >
        Toggle
      </button>
      <div
        className="cursor"
        style={{ left: cursorPos.x, top: cursorPos.y }}
      ></div>
      <Navbar />
      <RoutesComp />
    </div>
  );
}

export default App;
