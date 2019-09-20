import * as React from 'react';

import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';

interface IMobileMenuProps {
    mobileMoreAnchorEl?: any;
    handleMobileMenuClose?: () => void;
}

export const MobileMenu: React.FunctionComponent<IMobileMenuProps> = ({
    mobileMoreAnchorEl,
    handleMobileMenuClose,
}) => {
    const isMobuleMenuOpenMenu: boolean = Boolean(mobileMoreAnchorEl);

    return (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            keepMounted={true}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobuleMenuOpenMenu}
            onClose={handleMobileMenuClose}>
            <MenuItem>
                <IconButton color='inherit'>
                    <Brightness5Icon />
                </IconButton>
                <p>white-theme</p>
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
