import React from 'react';

import GameDetails from '../components/GameDetails';

export default class extends React.Component {
  static async getInitialProps({ query: { id } }) {
    const runUrl = `https://www.speedrun.com/api/v1/runs?game=${id}`;

    const res = await fetch(runUrl);
    const json = await res.json();

    return { topRun: json.data[0] };
  }

  render() {
    const {
      topRun: {
        videos,
        players,
        times: { primary_t }
      }
    } = this.props;
    return (
      <GameDetails
        time={primary_t}
        video={videos.links[0].uri}
        player={players[0].id}
      />
    );
  }
}
