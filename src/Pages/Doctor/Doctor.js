import React from 'react';

const Doctor = ({ doctor }) => {
    const { name, img, designation, department, hospital, education } = doctor;
    return (
        <div className="col">
            <div className="card h-100">
                <img height="300px" src={img} className="card-img-top" alt="..." />
                <div className="card-body my-3">
                    <h5 className="card-title"> {name} </h5>
                    <p className="card-text"> {designation}, {department} </p>
                    <p className="card-text">Education: {education} </p>
                    <p className="card-text">Hospital: {hospital} </p>
                </div>
                <button className='btn btn-primary'> Make Appointment</button>
            </div>
        </div>
    );
};

export default Doctor;