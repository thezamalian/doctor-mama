import React from 'react';
import Services from '../Home/Services/Services';

const Treatments = () => {
    return (
        <div>
            <h1>What We Treat</h1>
            <p>Sick? Connect with a MDLink Physician in minutes or set an appointment that fits your schedule</p>
            <button className='btn btn-success rounded-pill'> Get Started</button>
            <Services></Services>
        </div>
    );
};

export default Treatments;