import "./VideoCard.css";

const VideoCard = ({ src, title, overlayText }) => {
  return (
    <div className="video-card">
      <div className="video-wrapper">
        <video autoPlay loop muted playsInline className="background-video">
          <source src={src} type="video/mp4" />
          Tu navegador no soporta video.
        </video>
        <div className="overlay-text">{overlayText}</div>
      </div>
      <h2>{title}</h2>
    </div>
  );
};

export default VideoCard;
