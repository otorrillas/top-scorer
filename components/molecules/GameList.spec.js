import React from 'react';
import renderer from 'react-test-renderer';

import mockGames from 'Utils/mocks';

import { GameListView } from './GameList';

describe('<GameList />', () => {
  const renderComponent = props => renderer.create(<GameListView {...props} />);

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
