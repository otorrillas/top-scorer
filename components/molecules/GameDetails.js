import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import _find from 'lodash/head';
import _head from 'lodash/head';

import { getGames } from 'Store/selectors';
import { GameShape } from 'Utils/propTypes';

import TotalTime from '../atoms/TotalTime';

export const GameDetailsView = ({ games, id }) => {
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

GameDetailsView.propTypes = {
  games: PropTypes.objectOf(GameShape).isRequired,
  id: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  games: getGames(state)
});

export default connect(
  mapStateToProps,
  null
)(GameDetailsView);
