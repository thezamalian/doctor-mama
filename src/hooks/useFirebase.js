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
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const handleGoogleSignIn = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);


    };

    const handleEmailSignIn = (email, password) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
                if (user.email) {
                    user.displayName = 'Example'
                }
            })
            .finally(() => {
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                console.log(error.message);
            });
    };

    const handleEmailRegister = (email, password) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
                if (user.email) {
                    user.displayName = 'Example'
                }
            })
            .finally(() => {
                setIsLoading(false);
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
                if (user.displayName) {
                    user.email = 'example';
                }
                if (user.email) {
                    user.displayName = 'Example';
                }
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => setUser({}))
            .finally(() => {
                setIsLoading(false);
            })
    };

    return {
        user,
        error,
        isLoading,
        handleGoogleSignIn,
        handleEmailSignIn,
        handleEmailRegister,
        logOut
    }
};

export default useFirebase;