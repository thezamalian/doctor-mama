import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div style={{ backgroundColor: ' #e3f2fd' }}>
            <div className="container">
                <footer className="py-5">
                    <div className="row">
                        <div className="col-6">
                            <Link className="navbar-brand ms-5 " to="/">
                                <h1 className='fw-bolder'> <span style={{ color: 'orangeRed' }}> -_-</span> Dr Mamma</h1>
                            </Link>
                            <ul className="nav flex-column fw-bold">
                                <li className="nav-item mb-2"><Link to="/home" className="nav-link p-0 text-muted">Home</Link></li>
                                <li className="nav-item mb-2"><Link to="/doctors" className="nav-link p-0 text-muted">Doctors</Link></li>
                                <li className="nav-item mb-2"><Link to="/treatments" className="nav-link p-0 text-muted">Treatments</Link></li>
                                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">FAQs</Link></li>
                                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">About</Link></li>
                            </ul>
                        </div>

                        <div className="col-4 offset-1 mt-5">
                            <form>
                                <h5>Subscribe to our newsletter</h5>
                                <p>Monthly digest of whats new and exciting from us.</p>
                                <div className="row w-100 gap-2">
                                    <label htmlFor="newsletter1" className="visually-hidden col-12">Email address</label>
                                    <input id="newsletter1" type="text" className="form-control col-12 col-md-6" placeholder="Email address" />
                                    <button className="btn btn-primary col-12 col-md-6 mx-auto" type="button">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center pt-4 mb-1 border-top mx-auto">
                        <p> &copy; 2021 Doctor Mamma, Inc. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;