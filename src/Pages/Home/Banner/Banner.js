import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='mx-3 my-3'>
            <div id="myCarousel" className="carousel slide " data-bs-ride="carousel">

                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true"
                        aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>

                <div className="carousel-inner ">
                    <div className="carousel-item active">
                        <img height="600px" src="https://image.freepik.com/free-photo/doctor-with-co-workers-analyzing-x-ray_1098-581.jpg" className="d-block w-100" alt="..." />
                        <div className="container">
                            <div className="carousel-caption text-start  text-dark">
                                <h1>I am you Dr Mamma</h1>
                                <p>Get your medicine and prescription online.</p>
                                <p><Link className="btn btn-lg btn-primary" to="/register">Book An Appointment</Link></p>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img height="600px" src="https://image.freepik.com/free-photo/hands-unrecognizable-female-doctor-writing-form-typing-laptop-keyboard_1098-20374.jpg" className="d-block w-100" alt="..." />
                        <div className="container">
                            <div className="carousel-caption  text-dark">
                                <h1>How does Dr Mamma works</h1>
                                <p>BOOK AN APPOINTMENT. CONNECT WITH A DOCTOR. GET YOUR PRESCRIPTIONS FILLED. GET YOUR DOCTOR’S NOTE</p>
                                <p><Link className="btn btn-lg btn-primary" to="#">How Does It Work</Link></p>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img height="600px" src="https://image.freepik.com/free-photo/young-handsome-physician-medical-robe-with-stethoscope_1303-17818.jpg" className="d-block w-100" alt="..." />
                        <div className="container">
                            <div className="carousel-caption text-end  text-dark">
                                <h1>We treat Online.</h1>
                                <p>We have cured a lot of patients around the country trough online.</p>
                                <p><Link className="btn btn-lg btn-primary" to="#">See Reviews</Link></p>
                            </div>
                        </div>
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>

                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Banner;