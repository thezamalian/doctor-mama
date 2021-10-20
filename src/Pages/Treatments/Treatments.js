import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Doctors from '../Doctors/Doctors';
import Services from '../Home/Services/Services';

const Treatments = () => {
    return (
        <div className='mt-5'>
            <h1>What We Treat</h1>
            <p>Sick? Connect with a Physician in minutes or set an appointment that fits your schedule</p>
            <Link to="/appointment"><button className='btn btn-success rounded-pill'> Get Started</button> </Link>


            <p></p>
            <h2 className='mt-5 text-primary'>Our Departments</h2>
            <Services></Services>
            <Doctors></Doctors>
        </div>
    );
};

export default Treatments;