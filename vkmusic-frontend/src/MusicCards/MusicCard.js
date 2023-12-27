import React from 'react';
import './MusicCard.css'; // Файл со стилями

const MusicCard = ({ imageUrl, title, author }) => {
  return (
    <div className="music-card">
      <img src={imageUrl} alt="Album Cover" className="music-avatar" />
      <div className="music-content">
        <h3 className="music-title">{title}</h3>
        <p className="music-author">{author}</p>
      </div>
      <button className="play-button">Play</button>
    </div>
  );
};

export default MusicCard;
