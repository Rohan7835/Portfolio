import { useEffect, useState } from "react";
import "./navbar-style.css";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
];

const Navbar = ({ theme, onThemeToggle }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <a className="brand" href="#top" aria-label="Rohan Chauhan, home">
        <span className="brand-mark">RC</span>
        <span className="brand-copy">
          <strong>Rohan Chauhan</strong>
          <small>Senior Software Engineer</small>
        </span>
      </a>

      <nav className={`site-nav ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
        {navigation.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
        ))}
        <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>
          Let&apos;s talk <span aria-hidden="true">↗</span>
        </a>
      </nav>

      <div className="header-actions">
        <button
          className="theme-toggle"
          type="button"
          onClick={onThemeToggle}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
        >
          <span aria-hidden="true">{theme === "dark" ? "☼" : "◐"}</span>
        </button>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span /><span />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
