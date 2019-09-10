import * as React from 'react';

import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

import * as classes from './Header.scss';

export const Header: React.FunctionComponent<any> = props => {
    const [isFocused, setFocus] = React.useState<boolean>(false);
    const onFocus = React.useCallback(() => {
        setFocus(true);
    }, []);
    const onBlur = React.useCallback(() => {
        setFocus(false);
    }, []);

    return (
        <Grid className={classes.Header}>
            <AppBar>
                <Toolbar>
                    <Grid container={true}>
                        <Grid item={true} xs={2}>
                            <IconButton
                                edge='start'
                                className={classes.menuButton}
                                color='inherit'
                                aria-label='open drawer'>
                                <MenuIcon />
                            </IconButton>
                        </Grid>
                        <Grid
                            item={true}
                            lg={2}
                            className={classes.Header__title}>
                            <Typography variant='h6' noWrap={true}>
                                Project V
                            </Typography>
                        </Grid>
                        <Grid
                            item={true}
                            lg={7}
                            xs={8}
                            className={`${classes.Header__search} ${
                                isFocused ? classes.Header__search_focused : ''
                            }`}>
                            <div className={classes.Header__searchIcon}>
                                <SearchIcon />
                            </div>
                            <div className={classes.Header__input}>
                                <InputBase
                                    placeholder='Search…'
                                    inputProps={{ 'aria-label': 'search' }}
                                    onFocus={onFocus}
                                    onBlur={onBlur}
                                />
                            </div>
                        </Grid>
                        <Grid xs={2} className={classes.Header__menu}>
                            <IconButton
                                aria-label='show more'
                                aria-haspopup='true'
                                color='inherit'>
                                <MoreIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Grid>
    );
};
