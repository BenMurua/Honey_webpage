import Carrusel from "../../components/Carrusel/Carrusel";

const About = () => {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      <p>This is the about page content.</p>
      <Carrusel
        images={[
          "src/assets/erlea.jpg",
          "src/assets/ahuntza.jpg",
          "src/assets/Erleak.jpg",
          "src/assets/kuboak.jpg",
        ]}
      ></Carrusel>
    </div>
  );
};

export default About;
