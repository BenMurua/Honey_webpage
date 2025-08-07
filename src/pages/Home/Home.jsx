import "./Home.css";
import { useState } from "react";
import VideoCard from "../../components/VideoCard/VideoCard";

const Home = () => {
  return (
    <div className="home-container">
      <VideoCard src="src/assets/bideo_promo.mp4"></VideoCard>
      <p>This is the main content of the home page.</p>
    </div>
  );
};

export default Home;
