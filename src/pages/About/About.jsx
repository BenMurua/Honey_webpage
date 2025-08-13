import Carrusel from "../../components/Carrusel/Carrusel";
import image_1 from "../../assets/erlea.jpg";
import image_2 from "../../assets/Erleak.jpg";
import image_3 from "../../assets/kuboak.jpg";
import "./About.css";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about-page">
      <div>
        <Carrusel images={[image_1, image_2, image_3]} />
      </div>
      <div className="about-text">
        <h1>{t("About.title")}</h1>
        {t("About.text")
          .split("\n\n")
          .map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
      </div>
    </div>
  );
};

export default About;
