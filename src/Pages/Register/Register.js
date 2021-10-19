import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='text-center'>
            <h2>Please Register</h2>
            <div className="form-signin mx-auto w-25 ">
                <form>
                    <div className="form-floating my-1">
                        <input type="text" className="form-control" id="floatingName" placeholder="" />
                        <label for="floatingName">Full Name</label>
                    </div>
                    <div className="form-floating my-1">
                        <input type="email" className="form-control" id="floatingEmail" placeholder="" />
                        <label for="floatingEmail">Email address</label>
                    </div>
                    <div className="form-floating my-1">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="" />
                        <label for="floatingPassword">Password</label>
                    </div>
                    <div className="form-floating my-1">
                        <input type="password" className="form-control" id="floatingConfirmPassword" placeholder="" />
                        <label for="floatingConfirmPassword">Confirm Password</label>
                    </div>



                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>
                    <h6 className='text-danger '>Already a member, Please <Link to="/login" className='text-decoration-none'>Login</Link></h6>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>

                    <button className="w-100 btn btn-lg btn-warning my-3 " type="submit">Continue with Google</button>
                </form>
            </div>
        </div>
    );
};

export default Register;