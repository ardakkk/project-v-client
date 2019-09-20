import * as React from 'react';

import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import InboxIcon from '@material-ui/icons/MoveToInbox';

import * as classes from './MobileSideBar.scss';

interface IMobileSideBarProps {
    isOpenLeftSideBar: boolean;
    toggleLeftSideBarDrawer: (event: any) => void;
}

export const MobileSideBar: React.FunctionComponent<IMobileSideBarProps> = ({
    isOpenLeftSideBar,
    toggleLeftSideBarDrawer,
}) => {
    return (
        <div className={classes.MobileSideBar}>
            <Drawer open={isOpenLeftSideBar} onClose={toggleLeftSideBarDrawer}>
                <div
                    className={classes.MobileSideBar_content}
                    role='presentation'
                    onClick={toggleLeftSideBarDrawer}>
                    <List>
                        {['Inbox', 'Starred', 'Send email', 'Drafts'].map(
                            (text, index) => (
                                <ListItem button={true} key={text}>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? (
                                            <InboxIcon />
                                        ) : (
                                            <MailIcon />
                                        )}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                            )
                        )}
                    </List>
                    <Divider />
                    <List>
                        {['All mail', 'Trash', 'Spam'].map((text, index) => (
                            <ListItem button={true} key={text}>
                                <ListItemIcon>
                                    {index % 2 === 0 ? (
                                        <InboxIcon />
                                    ) : (
                                        <MailIcon />
                                    )}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </div>
            </Drawer>
        </div>
    );
};
