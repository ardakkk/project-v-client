import { AppBar, Toolbar, Typography } from '@material-ui/core';
import * as React from 'react';

interface IHeaderProps {}

export const Header: React.FunctionComponent<IHeaderProps> = props => {
    return (
        <div className='Header'>
            <AppBar>
                <Toolbar>
                    <Typography variant='h6' noWrap={true}>
                        Victory
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};
