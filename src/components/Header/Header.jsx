import "./Header.css";
import { useTheme } from "../../context/themeContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/Erleaerle_logo_2.png";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  // Función para manejar navegación y cerrar menú
  const handleNavClick = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  // Función para cambiar el idioma
  const toggleLanguage = () => {
    const newLang = i18n.language === "eus" ? "es" : "eus";
    i18n.changeLanguage(newLang);
  };

  return (
    <header className="header">
      <nav className="nav-bar">
        <button
          className="logo-btn"
          onClick={() => handleNavClick("/")}
          aria-label={t("Header.homeAria")}
        >
          <img src={logo} width="120" alt="Erleaerle Logo" />
        </button>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={t("Header.menuAria")}
        >
          ☰
        </button>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <button
              className="nav-btn"
              onClick={() => handleNavClick("/about")}
            >
              {t("Header.about")}
            </button>
          </li>
          <li>
            <button
              className="nav-btn"
              onClick={() => handleNavClick("/products")}
            >
              {t("Header.products")}
            </button>
          </li>
          <li>
            <button
              className="nav-btn"
              onClick={() => handleNavClick("/contact")}
            >
              {t("Header.contact")}
            </button>
          </li>
        </ul>

        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={t("Header.themeToggleAria")}
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>

        <button
          className="lang-toggle"
          onClick={toggleLanguage}
          aria-label="Aldatu hizkuntza / Cambiar idioma"
        >
          {i18n.language === "eus" ? "ES" : "EUS"}
        </button>
      </nav>
    </header>
  );
};

export default Header;
