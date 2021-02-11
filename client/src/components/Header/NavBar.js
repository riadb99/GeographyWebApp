import React, {useState, useEffect} from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import HomeIcon from '@material-ui/icons/Home';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import EventNoteIcon from '@material-ui/icons/EventNote';
import ScheduleIcon from '@material-ui/icons/Schedule';
import Drawer from '@material-ui/core/Drawer';
import Tab from '@material-ui/core/Tab';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Typography from '@material-ui/core/Typography';
import { makeStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import { Button, CssBaseline, ListItemText, ClickAwayListener } from '@material-ui/core';
import LogoutButton from '../Authentication/LogoutButton';


import Links from '@material-ui/core/Link';
import { Link } from 'react-router-dom';
import LoginButton from "../Authentication/LoginButton";
import {useAuth} from "../../contexts/AuthContext";


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    content: {
        flewGrow: 1,
        height: '100vh',
        overflow: 'auto'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    appBarSpacer: theme.mixins.toolbar,
    title: {
        flexGrow: 1,
    },
}));

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#fb8c00',
            main: '#f57c00',
            dark: '#ef6c00',
            contrastText: '#000',
        },
    },
});


export default function ButtonAppBar() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [view, setView] = useState(0);
    const [updated, setUpdated] = useState(0);
    const {currentUser} = useAuth();


    const classes = useStyles();

    return (
        <MuiThemeProvider theme={theme}>
            <div className={classes.root}>
                <AppBar position="fixed" className={classes.root}>
                    <Toolbar>
                        <IconButton color="inherit" onClick={() => setDrawerOpen(true)} edge="start">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title} >
                            GEOGRAPHY APP
                        </Typography>
                        {currentUser && currentUser.email}
                        &nbsp;
                        <LoginButton />
                        <LogoutButton />

                    </Toolbar>
                </AppBar>
                <Drawer open={drawerOpen} variant="temporary">
                    <div>
                        <IconButton onClick={() => setDrawerOpen(false)}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        <ListItem button onClick={() => setView(0)} key={"patient"}>
                            <ListItemIcon><HomeIcon/></ListItemIcon>
                            <ListItemText primary="Home"/>
                        </ListItem>
                        <ListItem button onClick={() => setView(2)} key={"add-patient"}>
                            <ListItemIcon><PersonAddIcon /></ListItemIcon>
                            <ListItemText primary="Login"/>
                        </ListItem>
                    </List>
                </Drawer>
            </div>
        </MuiThemeProvider>
    );
}