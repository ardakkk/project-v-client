import { shallow } from 'enzyme';
import * as React from 'react';

import { MobileMenu } from '../MobileMenu';

describe('MobileMenu component.', () => {
    it('Snapshot should match.', () => {
        const component = shallow(<MobileMenu />);

        expect(component).toMatchSnapshot();
    });
});
