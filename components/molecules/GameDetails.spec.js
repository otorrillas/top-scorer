import React from 'react';
import renderer from 'react-test-renderer';

import { GameDetailsView } from './GameDetails';

export const mockGames = {
  '1234': {
    abbreviation: 'test',
    assets: {
      'cover-medium': {
        uri: 'https://cover-medium-url'
      }
    },
    runs: [
      {
        videos: { links: [{ uri: 'https://video-url' }] },
        players: [{ id: 'playerId' }],
        times: { primary_t: 450 }
      }
    ]
  }
};

describe('<GameDetails />', () => {
  const renderComponent = props =>
    renderer.create(<GameDetailsView {...props} />);

  describe('@render', () => {
    it('default', () => {
      const tree = renderComponent({
        games: mockGames,
        id: '1234'
      });
      expect(tree).toMatchSnapshot();
    });
  });
});
