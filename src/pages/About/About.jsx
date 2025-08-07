import Carrusel from "../../components/Carrusel/Carrusel";
import image_1 from "../../assets/erlea.jpg";
import image_2 from "../../assets/ahuntza.jpg";
import image_3 from "../../assets/Erleak.jpg";
import image_4 from "../../assets/kuboak.jpg";

const About = () => {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      <p>This is the about page content.</p>
      <Carrusel
        images={[{ image_1 }, { image_2 }, { image_3 }, { image_4 }]}
      ></Carrusel>
    </div>
  );
};

export default About;
