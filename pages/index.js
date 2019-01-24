import React from 'react';
import { connect } from 'react-redux';

import { fetchGamesList } from 'Store/actions';

import GameList from 'Components/molecules/GameList';

class Index extends React.Component {
  static async getInitialProps(props) {
    const { store } = props.ctx;

    if (store.getState().games.length === 0) {
      await store.dispatch(fetchGamesList());
    }

    return {};
  }

  render() {
    return <GameList />;
  }
}

export default connect()(Index);
