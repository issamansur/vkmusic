import React from 'react';
import './PlaylistCard.css'; // Файл со стилями

const PlaylistCard = (props) => {
  const { title, author, photo } = props.musicItem;
  return (
    <div className="music-card">
      <img src={photo} alt="Song image" className="music-avatar" />
      <div className="music-content">
        <h3 className="music-title">{title}</h3>
        <p className="music-author">{author}</p>
      </div>
      <button className="play-button">Play</button>
    </div>
  );
};

export default PlaylistCard;
