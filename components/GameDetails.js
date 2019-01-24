import React from 'react';
import PropTypes from 'prop-types';

import _find from 'lodash/head';
import _head from 'lodash/head';

import { connect } from 'react-redux';

import { getGames } from '../store/selectors';

const TotalTime = ({ time }) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <>
      {minutes} minutes and {seconds} seconds
    </>
  );
};

const GameDetails = ({ games, id, error }) => {
  if (error) {
    return (
      <>
        <h1>Error</h1>
        <p>{error}</p>
      </>
    );
  }

  const game = games[id];
  const { abbreviation: name, assets, runs } = game;

  const {
    videos,
    players,
    times: { primary_t }
  } = _head(runs);

  const playerName = _head(players).id;
  const videoSrc = _head(videos.links).uri;
  const logoSrc = assets['cover-medium'].uri;

  return (
    <>
      <h1>{name}</h1>
      <img src={logoSrc} alt={`${name} logo`} />

      <p>
        <b>Time:</b> <TotalTime time={primary_t} />
      </p>
      <p>
        <b>Player:</b> {playerName}
      </p>

      <button>
        <a href={videoSrc} target="_blank" rel="noopener noreferrer">
          Watch run video
        </a>
      </button>
    </>
  );
};

GameDetails.propTypes = {
  // time: PropTypes.number.isRequired,
  // video: PropTypes.string.isRequired,
  // player: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  games: getGames(state)
});

export default connect(
  mapStateToProps,
  null
)(GameDetails);
