import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {useAuth} from "../../contexts/AuthContext";
import {useHistory} from "react-router-dom"

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function LogoutButton() {
    const {logout, isAuthenticated} = useAuth();
    const [error, setError] = useState("");
    const history = useHistory()

    async function handleLogout() {

        setError("");

        try {
            await logout()
            history.push("/GetStarted")
        } catch {
            setError("Failed to log out")
        }
    }

    return (
        isAuthenticated() && (
            <Button variant="contained" color="secondary" onClick={() => handleLogout()}>
                Log Out
            </Button>

)
    );
}
