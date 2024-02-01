import React from 'react';
import './MusicCard.css'; // Файл со стилями
import playIcon from '../../UI/Player/play.svg';

function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  if (hours > 0) {
    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    return formattedHours + ':' + formattedMinutes + ':' + formattedSeconds;
  } else {
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    return formattedMinutes + ':' + formattedSeconds;
  }
}

const MusicCard = (props) => {
  const { title, artist, duration } = props.musicItem;
  const durationFormatted = formatTime(duration);
  return (
    <div className="music-card">
      <div className="music-icon">
        <img src={playIcon} alt="Music Icon" />
      </div>
      <div className="music-content">
        <h3 className="music-title">{title}</h3>
        <p className="music-artist">{artist}</p>
      </div>
      <p className="music-duration">{durationFormatted}</p>
    </div>
  );
};

export default MusicCard;
