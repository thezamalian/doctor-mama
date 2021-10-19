import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className=' mx-auto sticky-top'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ backgroundColor: '#e3f2fd' }}>

                <div className="container-fluid">

                    <NavLink className="navbar-brand ms-5" to="/">
                        <h1> <span style={{ color: 'orangered' }} className='fw-bolder'> -_-</span> <span className='text-primary fw-bolder'> Dr Mamma</span> </h1>
                    </NavLink>

                    <div className="navbar-nav fw-bold me-5 px-3">
                        <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
                        <NavLink className="nav-link" to="/">Our Doctors</NavLink>
                        <NavLink className="nav-link" to="/">Our Treatments</NavLink>
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Header;