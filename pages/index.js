import React from 'react';

import 'isomorphic-unfetch';

import GameItem from '../components/GameItem';
import endpoints from '../services/endpoints.json';

import styles from './index.css';

export default class GameList extends React.Component {
  static async getInitialProps() {
    const res = await fetch(endpoints.gameList);
    const json = await res.json();

    return { games: json.data };
  }

  render() {
    const { games } = this.props;

    return (
      <ul className={styles.gameList}>
        {games.map(game => {
          const { id, abbreviation: name, assets } = game;
          return (
            <li key={id} className={styles.gameListItem}>
              <GameItem id={id} name={name} logo={assets['cover-medium'].uri} />
            </li>
          );
        })}
      </ul>
    );
  }
}
