import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { handleGoogleSignIn, handleEmailSignIn } = useAuth();
    // console.log(user.displayName);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailInput = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordInput = (e) => {
        setPassword(e.target.value);
    };


    return (
        <div className='text-center'>
            <h2>Please Login</h2>
            <div className=" mx-auto w-25 ">
                <form>
                    <div className="form-floating my-1">
                        <input onChange={handleEmailInput} type="email" className="form-control" id="floatingInput" required />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating my-1">
                        <input onChange={handlePasswordInput} type="password" className="form-control" id="floatingPassword" required />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>
                    <h6 className='text-danger '>New Here, Please <Link to="/register" className='text-decoration-none'>Register</Link></h6>

                    <button onClick={(event) => { event.preventDefault(); handleEmailSignIn(email, password); }} className="w-100 btn btn-lg btn-primary" type="submit">Login</button>

                    <button onClick={(event) => { event.preventDefault(); handleGoogleSignIn(); }} className="w-100 btn btn-lg btn-warning my-3 " >Continue with Google </button>
                </form>
            </div>
        </div>
    );
};

export default Login;