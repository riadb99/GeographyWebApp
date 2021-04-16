import React, {useState, useEffect} from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import HomeIcon from '@material-ui/icons/Home';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import { makeStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import { ListItemText, CircularProgress } from '@material-ui/core';
import LogoutButton from '../Authentication/LogoutButton';
import LoginButton from "../Authentication/LoginButton";
import {useAuth} from "../../contexts/AuthContext";
import axios from 'axios';
import RenderFlag from '../FlagRenderer';
import Leaderboards from '@material-ui/icons/FormatListNumbered';
import './NavBar.css'
import CircularProgressRenderer from '../CircularProgressRenderer';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';

import { blue } from '@material-ui/core/colors';

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


function SimpleDialog(props) {
    const classes = useStyles();
    const { onClose, selectedValue, open } = props;
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('xs');



    const handleClose = () => {
        onClose(selectedValue);
    };


    return (
        <Dialog maxWidth={maxWidth} fullWidth={fullWidth} onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle>
                <Typography variant="h5" align="center">Profile</Typography>
            </DialogTitle>

            <div>
            Name:   {props.userName}
            </div>
            &nbsp;

            <div>
                Email: {props.email}
            </div>
            &nbsp;

            <div>
                Country: {props.country}
            </div>
            &nbsp;

            <div>
                High Score: {props.highscore}
            </div>
            &nbsp;
        </Dialog>
    );
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};


export default function ButtonAppBar() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [view, setView] = useState(0);
    const [updated, setUpdated] = useState(0);
    const {currentUser} = useAuth();
    const [currentUserName, setCurrentUserName] = useState('');
    const [currentUserCountry, setCurrentUserCountry] = useState('');
    const [currentUserCountryCode, setCurrentUserCountryCode] = useState('');
    const [loading, setLoading] = useState(false);
    const delay = ms => new Promise(res => setTimeout(res, ms));

    const classes = useStyles();

    const history = useHistory();

    const [open, setOpen] = React.useState(false);


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);

    };



    useEffect(() => {
        async function renderUserInfo(){
            setLoading(true);
            await delay(3000)
            setLoading(false);
            let country = '';
            if(currentUser){
                axios.get('/api/user/' + currentUser.email)
                    .then(function(response){
                        setCurrentUserName(response.data[0].firstName + ' ' + response.data[0].lastName)
                        country = response.data[0].country
                        setCurrentUserCountry(country);
                    })
                    .then(() => {
                        axios.get('https://restcountries.eu/rest/v2/name/' + country)
                            .then(function(response2){
                                setCurrentUserCountryCode(response2.data[0].alpha2Code.toLowerCase())
                            })
                    })
            }else{
                setCurrentUserName('')
                setCurrentUserCountryCode('')
            }
        }

        renderUserInfo()

    }, [currentUser]);


    return (
        <MuiThemeProvider theme={theme}>
            <div className={classes.root}>
                <AppBar position="fixed" className={classes.root}>
                    <Toolbar>
                        <IconButton color="inherit" onClick={() => setDrawerOpen(true)} edge="start">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title} >
                            Azure Marble
                        </Typography>
                        {/*<Button onClick={()=> history.push("/GetStarted")} className={classes.title}>Azure Marble</Button>*/}
                        <IconButton onClick={handleClickOpen}>
                            <PersonIcon />
                        </IconButton>
                        <SimpleDialog open={open} onClose={handleClose} userName={currentUserName} country={currentUserCountry} email={currentUser && currentUser.email}/>
                        <CircularProgressRenderer loading={loading} />
                        {currentUserName}
                        &nbsp;
                        <RenderFlag code={currentUserCountryCode} />
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
                        {/*<Button onClick={()=> history.push("/mypage")}>Click me!</Button>*/}

                        <ListItem button onClick={()=> history.push("/Home")}>
                            <ListItemIcon><HomeIcon/></ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItem>
                        {/*<ListItem button onClick={()=> history.push("/Login")}>*/}
                        {/*    <ListItemIcon><PersonAddIcon /></ListItemIcon>*/}
                        {/*    <ListItemText primary="Login"/>*/}
                        {/*</ListItem>*/}
                        <ListItem button onClick={()=> history.push("/Leaderboards")}>
                            <ListItemIcon><Leaderboards/></ListItemIcon>
                            <ListItemText primary="Leaderboards" />
                        </ListItem>
                    </List>
                </Drawer>
            </div>
        </MuiThemeProvider>
    );
}