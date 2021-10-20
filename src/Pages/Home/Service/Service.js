import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, title, shortDtails, img } = service;



    return (
        <div className="col col-lg-4 col-md-6">
            <div className="card h-100 " style={{ backgroundColor: ' oldLace' }}>
                <img height="400px" src={img} className="card-img-top " alt="..." />
                <div className="card-body my-3">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{shortDtails}</p>
                </div>
                <Link to={`/services/${id}`}><button className='btn w-100 ' style={{ backgroundColor: 'skyBlue' }} type='button'>See Details</button></Link>

            </div>
        </div>
    );
};

export default Service;