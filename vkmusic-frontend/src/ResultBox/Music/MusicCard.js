import React from 'react';
import './MusicCard.css'; // Файл со стилями

const MusicCard = (props) => {
  const { title, artist, duration } = props.musicItem;
  return (
    <div className="music-card">
      <div className="music-icon">
        <img src={icon} alt="Music Icon" />
      </div>
      <div className="music-content">
        <h3 className="music-title">{title}</h3>
        <p className="music-artist">{artist}</p>
        <p className="music-duration">{duration}</p>
      </div>
    </div>
  );
};

export default MusicCard;
