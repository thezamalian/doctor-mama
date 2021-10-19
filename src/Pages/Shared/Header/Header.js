import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    // console.log(user.email);

    return (
        <div className=' mx-auto sticky-top'
        >
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ backgroundColor: '#e3f2fd' }}>

                <div className="container-fluid">

                    <NavLink className="navbar-brand ms-5" to="/">
                        <h1> <span style={{ color: 'orangered' }} className='fw-bolder'> -_-</span> <span className='text-primary fw-bolder'> Dr Mamma</span> </h1>
                    </NavLink>

                    <div className="navbar-nav fw-bold me-5 px-3">
                        <NavLink className="nav-link" aria-current="page" to="/home">Home</NavLink>
                        <NavLink className="nav-link" to="/doctors">Our Doctors</NavLink>
                        <NavLink className="nav-link" to="/appointment">Make An Appointment</NavLink>
                        <NavLink className="nav-link" to="/treatments">Our Treatments</NavLink>
                        {
                            (user?.displayName || user?.email) ?
                                <div className='d-flex'>
                                    <h5 className='mx-3'> {user?.displayName} </h5>
                                    <button onClick={(event) => { event.preventDefault(); logOut(); }} className='btn btn-danger' type="button" value="Log Out" >Log Out</button>
                                </div> :
                                <NavLink className="nav-link" to="/login">Login</NavLink>

                        }


                    </div>
                </div>
            </nav>


        </div>
    );
};

export default Header;