import * as React from 'react';

import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';

import * as classes from './Header.scss';

export const Header: React.FunctionComponent<any> = props => {
    const [isFocused, setFocus] = React.useState<boolean>(false);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const onFocus = React.useCallback(() => {
        setFocus(true);
    }, []);
    const onBlur = React.useCallback(() => {
        setFocus(false);
    }, []);

    const isMobuleMenuOpenMenu: boolean = Boolean(mobileMoreAnchorEl);
    const handleMobileMenuOpen = (event: any): void => {
        setMobileMoreAnchorEl(event.currentTarget);
    };
    const handleMobileMenuClose = (): void => {
        setMobileMoreAnchorEl(null);
    };

    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            keepMounted={true}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobuleMenuOpenMenu}
            onClose={handleMobileMenuClose}>
            <MenuItem>
                <IconButton aria-label='show 4 new mails' color='inherit'>
                    <Badge badgeContent={4} color='secondary'>
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    aria-label='show 11 new notifications'
                    color='inherit'>
                    <Badge badgeContent={11} color='secondary'>
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    aria-label='account of current user'
                    aria-controls='primary-search-account-menu'
                    aria-haspopup='true'
                    color='inherit'>
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <Grid className={classes.Header}>
            <AppBar>
                <Toolbar>
                    <Grid container={true}>
                        <Hidden smUp={true}>
                            <Grid item={true} xs={2}>
                                <IconButton
                                    edge='start'
                                    className={classes.menuButton}
                                    color='inherit'
                                    aria-label='open drawer'>
                                    <MenuIcon />
                                </IconButton>
                            </Grid>
                        </Hidden>
                        <Grid item={true} lg={2}>
                            <Hidden mdDown={true}>
                                <Typography variant='h6' noWrap={true}>
                                    Project V
                                </Typography>
                            </Hidden>
                        </Grid>
                        <Grid
                            item={true}
                            lg={7}
                            xs={8}
                            className={`${classes.Header_search} ${
                                isFocused ? classes.Header___search_focused : ''
                            }`}>
                            <div className={classes.Header_searchIcon}>
                                <SearchIcon />
                            </div>
                            <div className={classes.Header_input}>
                                <InputBase
                                    placeholder='Search…'
                                    inputProps={{ 'aria-label': 'search' }}
                                    onFocus={onFocus}
                                    onBlur={onBlur}
                                />
                            </div>
                        </Grid>
                        <Hidden smUp={true}>
                            <Grid
                                item={true}
                                xs={2}
                                className={classes.Header_menu}>
                                <IconButton
                                    aria-label='show more'
                                    aria-haspopup='true'
                                    color='inherit'
                                    onClick={handleMobileMenuOpen}>
                                    <MoreIcon />
                                </IconButton>
                            </Grid>
                        </Hidden>
                    </Grid>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
        </Grid>
    );
};
