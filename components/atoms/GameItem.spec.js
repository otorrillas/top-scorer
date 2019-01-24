import React from 'react';
import renderer from 'react-test-renderer';

import GameItem from './GameItem';

describe('<GameItem />', () => {
  const renderComponent = props => renderer.create(<GameItem {...props} />);

  describe('@render', () => {
    it('default', () => {
      const tree = renderComponent({
        name: 'test game',
        logo: 'https://sample.com/img.jpg',
        id: 1234
      });
      expect(tree).toMatchSnapshot();
    });
  });
});
