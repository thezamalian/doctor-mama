import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='text-center'>
            <h2>Please Login</h2>
            <div className="form-signin mx-auto w-25 ">
                <form>
                    <div className="form-floating my-1">
                        <input type="email" className="form-control" id="floatingInput" placeholder="" />
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating my-1">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="" />
                        <label for="floatingPassword">Password</label>
                    </div>

                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>
                    <h6 className='text-danger '>New Here, Please <Link to="/register" className='text-decoration-none'>Register</Link></h6>

                    <button className="w-100 btn btn-lg btn-primary" type="submit">Login</button>

                    <button className="w-100 btn btn-lg btn-warning my-3 " type="submit">Continue with Google</button>
                </form>
            </div>
        </div>
    );
};

export default Login;