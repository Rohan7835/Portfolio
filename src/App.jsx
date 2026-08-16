import { useEffect, useRef, useState } from "react";
import Navbar from "./Components/Layout/Navbar";
import RoutesComp from "./Routes/Routes";
import "./App.css";

const getInitialTheme = () => {
  const savedTheme = window.localStorage.getItem("rohan-portfolio-theme");
  if (savedTheme) return savedTheme;
  return "light";
};

function App() {
  const [theme, setTheme] = useState(getInitialTheme);
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("rohan-portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    const updateCursor = (event) => {
      const position = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      if (cursorRef.current) cursorRef.current.style.transform = position;
      if (cursorDotRef.current) cursorDotRef.current.style.transform = position;
    };

    const updateProgress = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = height > 0 ? window.scrollY / height : 0;
      document.documentElement.style.setProperty("--scroll-progress", progress);
    };

    window.addEventListener("pointermove", updateCursor, { passive: true });
    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();

    return () => {
      window.removeEventListener("pointermove", updateCursor);
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="noise" aria-hidden="true" />
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="scroll-progress" aria-hidden="true" />
      <div ref={cursorRef} className="cursor-ring" aria-hidden="true" />
      <div ref={cursorDotRef} className="cursor-dot" aria-hidden="true" />
      <Navbar
        theme={theme}
        onThemeToggle={() =>
          setTheme((current) => (current === "dark" ? "light" : "dark"))
        }
      />
      <RoutesComp />
    </div>
  );
}

export default App;
