import React from 'react';
import PropTypes from 'prop-types';

const GameDetails = ({ time, video, player }) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <>
      <p>
        <b>Time:</b> {minutes} minutes and {seconds} seconds
      </p>
      <p>
        <b>Player:</b> {player}
      </p>
      <button>
        <a href={video} target="_blank" rel="noopener noreferrer">
          Watch run video
        </a>
      </button>
    </>
  );
};

GameDetails.propTypes = {
  time: PropTypes.number.isRequired,
  video: PropTypes.string.isRequired,
  player: PropTypes.string.isRequired
};

export default GameDetails;
