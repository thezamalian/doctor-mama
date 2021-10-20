import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const { handleGoogleSignIn, handleEmailRegister } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailInput = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordInput = (e) => {
        setPassword(e.target.value);
    };
    return (
        <div className='text-center py-5' style={{ backgroundColor: 'mistyRose', borderRadius: '20px', }}>
            <h2>Please Register</h2>
            <div className="form-signin mx-auto w-25 ">
                <form>
                    <div className="form-floating my-1">
                        <input type="text" className="form-control" id="floatingName" placeholder="" />
                        <label htmlFor="floatingName">Full Name</label>
                    </div>
                    <div className="form-floating my-1">
                        <input onChange={handleEmailInput} type="email" className="form-control" id="floatingEmail" placeholder="" />
                        <label htmlFor="floatingEmail">Email address</label>
                    </div>
                    <div className="form-floating my-1">
                        <input onChange={handlePasswordInput} type="password" className="form-control" id="floatingPassword" placeholder="" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="form-floating my-1">
                        <input type="password" className="form-control" id="floatingConfirmPassword" placeholder="" />
                        <label htmlFor="floatingConfirmPassword">Confirm Password</label>
                    </div>



                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>
                    <h6 className='text-danger '>Already a member, Please <Link to="/login" className='text-decoration-none'>Login</Link></h6>

                    <button onClick={(event) => { event.preventDefault(); handleEmailRegister(email, password); }} className="w-100 btn btn-lg btn-primary" type="submit">Register</button>

                    <button onClick={(event) => { event.preventDefault(); handleGoogleSignIn(); }} className="w-100 btn btn-lg btn-warning my-3 " >Continue with Google </button>
                </form>
            </div>
        </div>
    );
};

export default Register;