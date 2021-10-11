import { useEffect, useState } from "react"
import initializeAuthentication from "../../Firebase/Firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, GithubAuthProvider, signOut } from "firebase/auth";



initializeAuthentication();


const useFirebse = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message);
            })

    };
    //////////////////////
    const signInIsingGithub = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user)
            })
            .catch(error => {
                setError(error.message);
            })
    }
    //////////////////////
    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log('Inside state change', user);
                setUser(user)
            }
        })
    }, []);
    return {
        user,
        error,
        logout,
        signInUsingGoogle,
        signInIsingGithub
    };

};

export default useFirebse;