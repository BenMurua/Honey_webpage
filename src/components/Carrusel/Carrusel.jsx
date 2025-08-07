// src/components/Carrusel/Carrusel.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Carrusel.css";

const Carrusel = ({ images }) => {
  return (
    <div className="carrusel">
      <Swiper spaceBetween={10} slidesPerView={1} loop={true}>
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`slide-${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carrusel;
