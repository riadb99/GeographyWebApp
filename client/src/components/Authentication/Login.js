import React, {useState, useRef} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useAuth} from "../../contexts/AuthContext";
import {useHistory} from "react-router-dom"
import Alert from '@material-ui/lab/Alert';
import Grow from '@material-ui/core/Grow';
import ParticlesBg from 'particles-bg'
import Switch from "@material-ui/core/Switch";
import BgToggle from "../BgToggle";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Azure Marble
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(20),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


export default function Login() {
    const classes = useStyles();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const {login} = useAuth();
    const [animate, setAnimate] = useState(true);
    const [bgToggle, setBgToggle] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError("")
            setLoading(true)
            await login(email, password)
            history.push("/Home")
        } catch {
            setError("Failed to sign in")
        }

        setLoading(false)

    }

    return (
        <div>
            <div>
                <Container component="main" maxWidth="xs">
                    <CssBaseline/>
                    <Grow
                        in={animate}
                        style={{transformOrigin: '0 0 0'}}
                        {...(animate ? {timeout: 1000} : {})}
                    >
                        <div className={classes.paper}>
                            <Switch
                                checked={bgToggle}
                                onChange={e => {
                                    setBgToggle(e.target.checked)
                                    console.log(bgToggle)
                                }}
                                name="Disable Animated Background"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />
                            Disable Animated Background
                            <Avatar className={classes.avatar}>
                                <LockOutlinedIcon/>
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Log in
                            </Typography>
                            {error && <Alert severity="error">{error}</Alert>}
                            <form className={classes.form} noValidate onSubmit={handleSubmit}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            autoComplete="email"
                                            onChange={e => setEmail(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            name="password"
                                            label="Password"
                                            type="password"
                                            id="password"
                                            autoComplete="current-password"
                                            onChange={e => setPassword(e.target.value)}
                                        />
                                    </Grid>
                                </Grid>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                    disabled={loading}
                                >
                                    Log In
                                </Button>
                                <Grid container justify="flex-end">
                                    <Grid item>
                                        <Link href="/Signup" variant="body2">
                                            Need an account? Sign up
                                        </Link>
                                    </Grid>
                                </Grid>
                                <Grid container justify="flex-end">
                                    <Grid item>
                                        <Link href="/ForgotPassword" variant="body2">
                                            Forgot Password?
                                        </Link>
                                    </Grid>
                                </Grid>
                            </form>

                        </div>
                    </Grow>
                    <Box mt={5}>
                        <Copyright/>
                    </Box>
                </Container>
            </div>
            <BgToggle toggle={bgToggle}/>
        </div>
    );
}
