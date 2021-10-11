import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';


const Login = () => {
    const { signInUsingGoogle, signInIsingGithub } = useAuth();

    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={signInUsingGoogle}>Google Sign In</button>
            <button onClick={signInIsingGithub}>Github Sign In</button>
            <Link to="/register">New User?</Link>

        </div>
    );
};

export default Login;