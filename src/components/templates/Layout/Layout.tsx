import * as React from 'react';

import { Header } from '../../organisms/Header/Header';
import * as classes from './Layout.scss';

interface ILayoutProps {}

export const Layout: React.FunctionComponent<ILayoutProps> = ({ children }) => {
    return (
        <div className={classes.Layout}>
            <div className='Layout__header'>
                <Header />
            </div>
            <main>{children}</main>
        </div>
    );
};
