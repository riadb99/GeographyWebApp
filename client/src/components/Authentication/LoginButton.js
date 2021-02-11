import React from 'react';
import Button from '@material-ui/core/Button';
import {useAuth} from "../../contexts/AuthContext";
import {useHistory} from "react-router-dom"

export default function LoginButton() {
    const {isAuthenticated} = useAuth();
    const history = useHistory()

    async function handleLogin() {
        history.push('/login')
    }

    return (
        !isAuthenticated() && (
            <Button variant="contained" color="secondary" onClick={() => handleLogin()}>
                Log In
            </Button>

        )
    );
}
