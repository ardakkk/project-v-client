import * as React from 'react';

import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddAlarm from '@material-ui/icons/AddAlarm';
import Book from '@material-ui/icons/Book';
import CalendarToday from '@material-ui/icons/CalendarToday';
import DateRange from '@material-ui/icons/DateRange';
import GpsFixed from '@material-ui/icons/GpsFixed';
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
                        <ListItem button={true}>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary='Icebox' />
                        </ListItem>
                        <ListItem button={true}>
                            <ListItemIcon>
                                <CalendarToday />
                            </ListItemIcon>
                            <ListItemText primary='Today' />
                        </ListItem>
                        <ListItem button={true}>
                            <ListItemIcon>
                                <DateRange />
                            </ListItemIcon>
                            <ListItemText primary='Next week' />
                        </ListItem>
                    </List>
                    <Divider />
                    <List>
                        <ListItem button={true}>
                            <ListItemIcon>
                                <GpsFixed />
                            </ListItemIcon>
                            <ListItemText primary='Goals' />
                        </ListItem>
                        <ListItem button={true}>
                            <ListItemIcon>
                                <AddAlarm />
                            </ListItemIcon>
                            <ListItemText primary='Alarm' />
                        </ListItem>
                        <ListItem button={true}>
                            <ListItemIcon>
                                <Book />
                            </ListItemIcon>
                            <ListItemText primary='Diary' />
                        </ListItem>
                    </List>
                </div>
            </Drawer>
        </div>
    );
};
