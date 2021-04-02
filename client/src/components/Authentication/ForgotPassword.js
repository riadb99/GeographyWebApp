import React, {useState, useRef} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import EnhancedEncryptionTwoToneIcon from '@material-ui/icons/EnhancedEncryptionTwoTone';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useAuth} from "../../contexts/AuthContext";
import Alert from '@material-ui/lab/Alert';
import Grow from '@material-ui/core/Grow';
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
        backgroundColor: theme.palette.primary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


export default function ForgotPassword() {
    const classes = useStyles();
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const {resetPassword} = useAuth();
    const [animate, setAnimate] = useState(true);
    const [bgToggle, setBgToggle] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError("")
            setMessage("")
            setLoading(true)
            await resetPassword(email)
            setMessage("Password reset link has been sent to your email.")
        } catch (e) {
            if (e.code == "auth/invalid-email") {
                setError("Email not found. Please sign up first.")
            } else {
                setError("Failed to reset password.")
            }
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
                                inputProps={{'aria-label': 'secondary checkbox'}}
                            />
                            Disable Animated Background
                            <Avatar className={classes.avatar}>
                                <EnhancedEncryptionTwoToneIcon/>
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Password Reset
                            </Typography>
                            {error && <Alert severity="error">{error}</Alert>}
                            {message && <Alert severity="info">{message}</Alert>}
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
                                </Grid>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                    disabled={loading}
                                >
                                    Reset Password
                                </Button>
                                <Grid container justify="center">
                                    <Grid item>
                                        <Link href="/Login" variant="body2">
                                            Log in
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
