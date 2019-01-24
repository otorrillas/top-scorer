import React from 'react';
import renderer from 'react-test-renderer';

import TotalTime from './TotalTime';

describe('<TotalTime />', () => {
  const renderComponent = props => renderer.create(<TotalTime {...props} />);

  describe('@render', () => {
    it('default', () => {
      const tree = renderComponent({
        time: 450
      });
      expect(tree).toMatchSnapshot();
    });
  });
});
