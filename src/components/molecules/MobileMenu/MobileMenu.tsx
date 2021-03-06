import * as React from 'react';
import { connect } from 'react-redux';

import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import ShowChart from '@material-ui/icons/ShowChart';

import { setDarkMode } from '../../../store/darkMode/actions';

interface IMobileMenuProps {
    mobileMoreAnchorEl?: any;
    handleMobileMenuClose?: () => void;
    toggleDarkMode?: () => void;
    isDarkMode?: boolean;
}

const MobileMenu: React.FunctionComponent<IMobileMenuProps> = ({
    mobileMoreAnchorEl,
    handleMobileMenuClose,
    toggleDarkMode,
}) => {
    const isMobuleMenuOpenMenu: boolean = Boolean(mobileMoreAnchorEl);

    const onToggleDarkMode = React.useCallback(() => {
        toggleDarkMode();
    }, []);

    return (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            keepMounted={true}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobuleMenuOpenMenu}
            onClose={handleMobileMenuClose}>
            <MenuItem onClick={onToggleDarkMode}>
                <IconButton color='inherit'>
                    <Brightness5Icon />
                </IconButton>
            </MenuItem>
            <MenuItem>
                <IconButton color='inherit'>
                    <Badge badgeContent={11} color='secondary'>
                        <ShowChart />
                    </Badge>
                </IconButton>
                <p>Productivity</p>
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
                    <SettingsIcon />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );
};

const mapDispatchToProps = (dispatch: any) => ({
    toggleDarkMode: (isDarkMode: boolean) => dispatch(setDarkMode()),
});

export default connect(
    null,
    mapDispatchToProps
)(MobileMenu);
