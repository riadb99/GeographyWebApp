/***************************************************************************************
 *    Title: Material UI Template code
 *    Author: Material UI
 *    Date: 03/24/2020
 *    Availability: https://material-ui.com/getting-started/templates/
 *
 ***************************************************************************************/

import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import {useAuth} from "../../contexts/AuthContext";
import {useHistory} from "react-router-dom"

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
