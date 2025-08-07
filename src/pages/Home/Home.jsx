import "./Home.css";
import { useState } from "react";
import VideoCard from "../../components/VideoCard/VideoCard";
import VideoPromo from "../../assets/bideo_promo.mp4";

const Home = () => {
  return (
    <div className="home-container">
      <VideoCard src={VideoPromo}></VideoCard>
      <p>This is the main content of the home page.</p>
    </div>
  );
};

export default Home;
