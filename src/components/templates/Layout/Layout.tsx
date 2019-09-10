import * as React from 'react';

import { Header } from '../../organisms/Header/Header';

interface ILayoutProps {}

export const Layout: React.FunctionComponent<ILayoutProps> = ({ children }) => {
    return (
        <div className='Layout'>
            <div className='Layout__header'>
                <Header />
            </div>
            <main>{children}</main>
        </div>
    );
};
