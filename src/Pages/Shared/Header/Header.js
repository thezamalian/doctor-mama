import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className=' mx-auto'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ backgroundColor: '#e3f2fd' }}>

                <div className="container-fluid">

                    <NavLink className="navbar-brand ms-5" to="/"> <h1> -_- Dr Mamma</h1> </NavLink>

                    <div className="navbar-nav fw-bold me-5">
                        <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
                        <NavLink className="nav-link" to="/">Our Doctors</NavLink>
                        <NavLink className="nav-link" to="/">Pricing</NavLink>
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Header;