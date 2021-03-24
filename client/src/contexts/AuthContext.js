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
                var errorCode = error.code;
                var errorMessage = error.message;
                return errorMessage;
            });
    }

    function verifyEmail() {
        return auth.currentUser.sendEmailVerification()
    }

    function login(email, password) {
        auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)
            .then(() => {
                return auth.signInWithEmailAndPassword(email, password);
            })
            .catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                return errorMessage;
            });
    }

    function logout() {
        return auth.signOut()
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
    }

    function updateEmail(email) {
        return currentUser.updateEmail(email)
    }

    function updatePassword(password) {
        return currentUser.updatePassword(password)
    }

    function isAuthenticated() {
        let isAuth = currentUser ? true : false;
        return isAuth;
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe
    }, [])

    const value = {
        currentUser,
        login,
        signup,
        logout,
        resetPassword,
        updateEmail,
        updatePassword,
        isAuthenticated,
        verifyEmail
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}