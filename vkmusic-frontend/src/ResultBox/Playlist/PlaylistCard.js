import React from 'react';
import './PlaylistCard.css';
import defaultIcon from '../../UI/Defaults/playlist.svg';

const PlaylistCard = (props) => {
  const { title, photo } = props.musicItem;
  const photoUrl = photo !== '' ? photo : defaultIcon;

  return (
    <div className="playlist-card">
      <img
        className="playlist-photo"
        src={photoUrl}
        alt="Song image"
      />
      <h3 className="playlist-title">{title}</h3>
    </div>
  );
};

export default PlaylistCard;
