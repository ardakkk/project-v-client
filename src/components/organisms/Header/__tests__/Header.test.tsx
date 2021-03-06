import { shallow } from 'enzyme';
import * as React from 'react';

import { Header } from '../Header';

describe('Header component.', () => {
    it('Snapshot should match.', () => {
        const component = shallow(<Header />);

        expect(component).toMatchSnapshot();
    });
});
