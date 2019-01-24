import React from 'react';
import { connect } from 'react-redux';

import _map from 'lodash/map';

import { getGames } from '../store/selectors';

import GameItem from './GameItem';

import styles from './GameList.css';

const GameList = ({ games }) => {
  console.log(games);
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

const mapStateToProps = state => ({
  games: getGames(state)
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameList);
