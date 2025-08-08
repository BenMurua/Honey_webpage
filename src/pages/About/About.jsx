import Carrusel from "../../components/Carrusel/Carrusel";
import image_1 from "../../assets/erlea.jpg";
import image_2 from "../../assets/ahuntza.jpg";
import image_3 from "../../assets/Erleak.jpg";
import image_4 from "../../assets/kuboak.jpg";
import "./About.css";

const About = () => {
  return (
    <div
      className="about-page"
      style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}
    >
      <div style={{ flex: "1 1 300px" }}>
        <Carrusel images={[image_1, image_2, image_3, image_4]} />
      </div>
      <div style={{ flex: "1 1 300px" }}>
        <h1>Guri buruz</h1>
        <p>
          Hernani eta Nafarroan, modu ekologikoan egindako eztia.
          <br />
          <br />
          Kaixo, Asier naiz. Duela lau urte hasi nintzen eztia egiteko bidea
          nire aitaren terrenoetan. Betidanik gustatu izan zait natura eta
          bertako produktu ekologikoak lantzea, eta eztiaren mundu honetan
          murgildu nintzen pasio handi batekin.
          <br />
          <br />
          Gure lurraldeko lore eta zuhaitz ezberdinetatik jasotzen ditugu
          eztiak, betiere ingurumena zainduz eta abereen ongizatea lehenesten.
          Modu tradizionalean eta ekologikoki egindako gure eztiak kalitate
          handiko produktu naturalak dira, osasuntsuak eta zapore paregabea
          dutenak.
          <br />
          <br />
          Eztia ez da soilik gure lanbidea, baita bizimodu bat ere: naturarekiko
          errespetua eta jasangarritasuna lehenesten ditugu egunero. Hori dela
          eta, gure produktuak ziurtagiri ekologikoarekin eta kalitate kontrol
          zorrotzekin bermatzen ditugu.
          <br />
          Gure helburua ez da bakarrik eztia eskaintzea, baizik eta gure
          lurretako naturaren eta apikulturaren balioa zabaltzea, eta bezeroekin
          konfiantza eta gertutasun harreman bat eraikitzea.
          <br />
          Zatoz eta ezagutu gure eztia, bertako zapore eta kalitatea zure etxera
          eramateko.
        </p>
      </div>
    </div>
  );
};

export default About;
