import React from 'react';
import Appointment from '../Appointment/Appointment';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h2 className='mt-5 text-primary'>Our Services</h2>
            <Services></Services>
            <Features></Features>
            <Appointment></Appointment>
        </div>
    );
};

export default Home;