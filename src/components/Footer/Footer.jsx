import "./Footer.css";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} ErleaErle. 👣Pausoz pauso bertako
          erlearekin🐝
        </p>
        <p>{t("Footer.line1")}</p>
        <p>Gipuzkoa</p>
        <p>Jarraitu sare sozialetan!</p>
      </div>
      <div className="footer-links">
        <a
          href="https://www.instagram.com/erleaerle/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="footer-button">Instagram</button>
        </a>
        <a href="mailto:guillenasier@gmail.com">
          <button className="footer-button">
            <img
              src="src/assets/EmailBlack.svg"
              alt="Email Icon"
              className="footer-icon"
            />
          </button>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
