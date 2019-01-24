import React from 'react';
import renderer from 'react-test-renderer';

import Error from './Error';

describe('<Error />', () => {
  const renderComponent = props => renderer.create(<Error {...props} />);

  describe('@render', () => {
    it('default', () => {
      const tree = renderComponent({
        message: 'An unexpected error'
      });
      expect(tree).toMatchSnapshot();
    });
  });
});
