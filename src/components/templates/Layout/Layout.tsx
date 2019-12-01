import * as React from 'react';
import { connect } from 'react-redux';

import { Header } from '../../organisms/Header/Header';
import * as classes from './Layout.scss';

export const Layout: React.FunctionComponent<any> = ({
    children,
    isDarkMode,
}) => {
    return (
        <div
            className={`${classes.Layout} ${
                isDarkMode ? classes.Layout__dark_mode : ''
            }`}>
            <div className='Layout__header'>
                <Header />
            </div>
            <main>{children}</main>
        </div>
    );
};

const mapStateToProps = (state: any) => ({
    isDarkMode: state.darkMode.isDarkMode,
});

export default connect(
    mapStateToProps,
    null
)(Layout);
