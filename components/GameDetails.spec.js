import React from 'react';
import renderer from 'react-test-renderer';

import GameDetails from './GameDetails';

describe('<GameDetails />', () => {
  const renderComponent = props => renderer.create(<GameDetails {...props} />);

  describe('@render', () => {
    it('default', () => {
      const tree = renderComponent({
        time: 1234,
        video: 'https://someVideoUrl',
        player: 'SomePlayer'
      });
      expect(tree).toMatchSnapshot();
    });
  });
});
