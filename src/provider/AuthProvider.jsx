import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";


export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const googleAuth = new GoogleAuthProvider();
    const githubAuth = new GithubAuthProvider();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUserProfile = (name, photo) =>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        }) 
    }
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleLogin = () => {
        return signInWithPopup(auth, googleAuth)
    }
    const githubLogin = () => {
        return signInWithPopup(auth, githubAuth)
    }
    const logout = () => {
        return signOut(auth)

    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoading(false)
        })
        return () => unsubscribe();
    },[])
    const authInfo = {
        user,
        createUser,
        updateUserProfile,
        loginUser,
        googleLogin,
        githubLogin,
        logout,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;