/***************************************************************************************
 *    Title: Firebase Authentication Documentation
 *    Author: Google
 *    Availability: https://firebase.google.com/docs/auth/web/start
 *
 ***************************************************************************************/

import React, {useContext, useEffect, useState} from "react"
import {auth} from '../firebase';
import firebase from "firebase/app";

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    async function signup(email, password) {
        await auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)
            .then(() => {
                return auth.createUserWithEmailAndPassword(email, password);
            })
            .catch((error) => {
                // Handle Errors here.
                var errorMessage = error.message;
                return errorMessage;
            });
    }

    function verifyUserEmail() {
        return auth.currentUser.sendEmailVerification()
    }

    function signin(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }


    function signout() {
        return auth.signOut()
    }

    function sendPasswordResetEmail(email) {
        return auth.sendPasswordResetEmail(email)
    }

    function editEmail(email) {
        return currentUser.updateEmail(email)
    }

    function editPassword(password) {
        return currentUser.updatePassword(password)
    }

    function isAuthenticated() {
        return currentUser ? true : false;
    }

    useEffect(() => {
        const authStateChanged = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return authStateChanged
    }, [])

    const value = {
        currentUser,
        login: signin,
        signup,
        logout: signout,
        resetPassword: sendPasswordResetEmail,
        updateEmail: editEmail,
        updatePassword: editPassword,
        isAuthenticated,
        verifyUserEmail
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}