import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { Description } from '../Description';

it('renders correctly', () => {
    const tree = renderer
      .create(<Description />)
      .toJSON();
    expect('Description').toMatchSnapshot('hello');
  });