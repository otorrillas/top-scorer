import React from 'react';
import { connect } from 'react-redux';

import _has from 'lodash/has';

import { fetchGamesList, fetchRuns } from 'Store/actions';

import GameDetails from 'Components/molecules/GameDetails';
import Error from 'Components/atoms/Error';

class Game extends React.Component {
  static async getInitialProps(props) {
    const {
      store,
      query: { id }
    } = props.ctx;

    let games = store.getState().games;
    if (games.length === 0) {
      // We need to fetch the games list first
      // that contains information such as game assets
      // and the runs url
      await store.dispatch(fetchGamesList());
      games = store.getState().games;
    }

    if (_has(games, id)) {
      const game = games[id];

      if (!game.runs) {
        await store.dispatch(fetchRuns(id));
      }

      return {
        id
      };
    }

    return {
      err: 'Not found'
    };
  }

  render() {
    const { id, err } = this.props;
    return err ? <Error message={err} /> : <GameDetails id={id} />;
  }
}

export default connect()(Game);
