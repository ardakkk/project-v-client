import { shallow } from 'enzyme';
import * as React from 'react';

import { MobileSideBar } from '../MobileSideBar';

describe('MobileSideBar component.', () => {
    it('Snapshot should match.', () => {
        const component = shallow(
            <MobileSideBar
                isOpenLeftSideBar={true}
                toggleLeftSideBarDrawer={() => {}}
            />
        );

        expect(component).toMatchSnapshot();
    });
});
