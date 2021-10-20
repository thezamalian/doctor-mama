import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Service = () => {
    const { serviceId } = useParams();

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    const service = services.filter(s => parseInt(serviceId) == s.id)[0] || {};
    const { title, img, shortDtails } = service;
    console.log(service);

    return (
        <div className='mx-auto my-5 w-75 px-3' style={{ backgroundColor: ' oldLace', borderRadius: '10px' }}>
            <img className='img-fluid' src={img} alt="" />

            <h2 className='mt-5'>{title}</h2>
            <p>
                {shortDtails} {shortDtails} {shortDtails}
                {shortDtails} {shortDtails} {shortDtails}
            </p>
            <Link to="/appointment" ><button className='btn btn-success mb-5'>Make An Appointment</button></Link>
        </div>
    );
};

export default Service;