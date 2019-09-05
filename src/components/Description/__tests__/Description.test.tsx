import * as React      from 'react';
import { shallow }     from 'enzyme';
import { Description } from '../Description';

describe('Description component', () => {
  it('renders correctly', () => {
      const component = shallow(<Description/>);

      expect(component).toMatchSnapshot();
  });
});