import "./Home.css";
import { useState } from "react";
import VideoCard from "../../components/VideoCard/VideoCard";
import VideoPromo from "../../assets/bideo_promo.mp4";

const Home = () => {
  return (
    <div className="home-container">
      <VideoCard src={VideoPromo}></VideoCard>
    </div>
  );
};

export default Home;
