import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

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
        <div className='mx-5'>
            <img src={img} alt="" />

            <h2>{title}</h2>
            <p>
                {shortDtails} {shortDtails} {shortDtails}
                {shortDtails} {shortDtails} {shortDtails}
            </p>
        </div>
    );
};

export default Service;