import "./Header.css";
import { useTheme } from "../../context/themeContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/Erleaerle_logo_2.png";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  // Función para manejar navegación y cerrar menú
  const handleNavClick = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <nav className="nav-bar">
        <button
          className="logo-btn"
          onClick={() => handleNavClick("/")}
          aria-label="Inicio"
        >
          <img src={logo} width="120" alt="Erleaerle Logo" />
        </button>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          ☰
        </button>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <button
              className="nav-btn"
              onClick={() => handleNavClick("/about")}
            >
              Nor gara
            </button>
          </li>
          <li>
            <button
              className="nav-btn"
              onClick={() => handleNavClick("/products")}
            >
              Produktuak
            </button>
          </li>
          <li>
            <button
              className="nav-btn"
              onClick={() => handleNavClick("/contact")}
            >
              Kontaktua
            </button>
          </li>
        </ul>

        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </nav>
    </header>
  );
};

export default Header;
