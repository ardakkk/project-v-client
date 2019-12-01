import { shallow } from 'enzyme';
import * as React from 'react';
import { Provider } from 'react-redux';

import store from '../../../../store';
import MobileMenu from '../MobileMenu';

describe('MobileMenu component.', () => {
    it('Snapshot should match.', () => {
        const component = shallow(
            <Provider store={store}>
                <MobileMenu />
            </Provider>
        );

        expect(component).toMatchSnapshot();
    });
});
