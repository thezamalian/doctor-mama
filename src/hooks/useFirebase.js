import { useEffect, useState } from 'react';
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';


initializeAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result)
                console.log(user.email)
            })
            .catch((error) => {
                setError(error.message);
                console.log(error.message);
            });
    };

    const handleEmailSignIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
                console.log(user.email);
            })
            .catch((error) => {
                setError(error.message);
                console.log(error.message);
            });
    };

    const handleEmailRegister = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
                console.log(user.email);
            })
            .catch((error) => {
                setError(error.message);
                console.log(error.message);
            });
    };

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        signOut(auth)
            .then(() => setUser({}))
    };

    return {
        user,
        handleGoogleSignIn,
        handleEmailSignIn,
        handleEmailRegister,
        logOut
    }
};

export default useFirebase;