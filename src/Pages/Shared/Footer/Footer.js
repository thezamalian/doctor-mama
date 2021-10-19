import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className="container">
                <footer className="py-5">
                    <div className="row">
                        <div className="col-6">
                            <Link className="navbar-brand ms-5" to="/">
                                <h1> <span style={{ color: 'orangered' }}> -_-</span> Dr Mamma</h1>
                            </Link>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><Link to="/home" className="nav-link p-0 text-muted">Home</Link></li>
                                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Features</Link></li>
                                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Pricing</Link></li>
                                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">FAQs</Link></li>
                                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">About</Link></li>
                            </ul>
                        </div>

                        <div className="col-4 offset-1 mt-5">
                            <form>
                                <h5>Subscribe to our newsletter</h5>
                                <p>Monthly digest of whats new and exciting from us.</p>
                                <div className="d-flex w-100 gap-2">
                                    <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                                    <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                                    <button className="btn btn-primary" type="button">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center py-4 my-4 border-top mx-auto">
                        <p>&copy; 2021 Company, Inc. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;