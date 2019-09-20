import * as React from 'react';

import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import AddIcon from '@material-ui/icons/Add';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import SettingsIcon from '@material-ui/icons/Settings';

import { MobileMenu } from '../../molecules/MobileMenu/MobileMenu';
import { MobileSideBar } from '../../molecules/MobileSideBar/MobileSideBar';
import * as classes from './Header.scss';

export const Header: React.FunctionComponent<any> = props => {
    const [isFocused, setFocus] = React.useState<boolean>(false);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const [toggleLeftSideBar, setToggleLeftSiderBar] = React.useState<boolean>(
        false
    );

    const onFocus = React.useCallback(() => {
        setFocus(true);
    }, []);
    const onBlur = React.useCallback(() => {
        setFocus(false);
    }, []);

    const handleMobileMenuOpen = (event: any): void => {
        setMobileMoreAnchorEl(event.currentTarget);
    };
    const handleMobileMenuClose = (): void => {
        setMobileMoreAnchorEl(null);
    };
    const toggleLeftSideBarDrawer = (event: any): void => {
        if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setToggleLeftSiderBar(!toggleLeftSideBar);
    };

    return (
        <Grid className={classes.Header}>
            <AppBar>
                <Toolbar>
                    <Grid container={true} alignItems='center'>
                        <Hidden smUp={true}>
                            <Grid item={true} xs={2}>
                                <IconButton
                                    edge='start'
                                    className={classes.burgerButton}
                                    color='inherit'
                                    aria-label='open drawer'
                                    onClick={toggleLeftSideBarDrawer}>
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
                                isFocused ? classes.Header_search__focused : ''
                            }`}>
                            <div className={classes.Header_searchIcon}>
                                <SearchIcon />
                            </div>
                            <div className={classes.Header_input}>
                                <InputBase
                                    placeholder='Quick Find'
                                    inputProps={{ 'aria-label': 'search' }}
                                    onFocus={onFocus}
                                    onBlur={onBlur}
                                />
                            </div>
                        </Grid>
                        <Hidden smDown={true}>
                            <Grid
                                item={true}
                                lg={3}
                                className={classes.Header_menu}>
                                <IconButton color='inherit'>
                                    <AddIcon />
                                </IconButton>
                                <IconButton color='inherit'>
                                    <Brightness5Icon />
                                </IconButton>
                                <IconButton color='inherit'>
                                    <Badge badgeContent={11} color='secondary'>
                                        <NotificationsIcon />
                                    </Badge>
                                </IconButton>
                                <IconButton color='inherit'>
                                    <SettingsIcon />
                                </IconButton>
                            </Grid>
                        </Hidden>
                        <Hidden smUp={true}>
                            <Grid
                                item={true}
                                xs={2}
                                className={classes.Header_mobile_menu}>
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
            <MobileMenu
                mobileMoreAnchorEl={mobileMoreAnchorEl}
                handleMobileMenuClose={handleMobileMenuClose}
            />
            <MobileSideBar
                isOpenLeftSideBar={toggleLeftSideBar}
                toggleLeftSideBarDrawer={toggleLeftSideBarDrawer}
            />
        </Grid>
    );
};
