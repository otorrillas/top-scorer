import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import _map from 'lodash/map';

import { getGames } from 'Store/selectors';

import { GameShape } from 'Utils/propTypes';

import GameItem from '../atoms/GameItem';

import styles from './GameList.css';

export const GameListView = ({ games }) => {
  return (
    <ul className={styles.gameList}>
      {_map(games, ({ id, abbreviation: name, assets }) => (
        <li key={id} className={styles.gameListItem}>
          <GameItem id={id} name={name} logo={assets['cover-medium'].uri} />
        </li>
      ))}
    </ul>
  );
};

GameListView.propTypes = {
  games: PropTypes.objectOf(GameShape)
};

const mapStateToProps = state => ({
  games: getGames(state)
});

export default connect(
  mapStateToProps,
  null
)(GameListView);
