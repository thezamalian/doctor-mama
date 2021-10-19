import React from 'react';
import { useParams } from 'react-router';

const Service = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2>This is a Single service: {serviceId}</h2>
        </div>
    );
};

export default Service;