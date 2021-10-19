import React from 'react';

const Appointment = () => {
    return (
        <div className='row mx-3 my-5'>
            <div className='col'>
                <img src="https://image.freepik.com/free-vector/doctor-character-background_1270-84.jpg" alt="" />
            </div>
            <div className='col w-75'>
                <h2>Make an Appointment Now</h2>
                <form className="row g-3 mt-3">
                    <div className="col-md-6">
                        <select id="inputState" className="form-select">
                            <option selected>Select Department*</option>
                            <option>Gynaecology</option>
                            <option>Cardiology</option>
                            <option>Medicine</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <select id="inputState" className="form-select">
                            <option selected>Choose Doctor*</option>
                            <option>Dr. Kalvin</option>
                            <option>Dr. Mark </option>
                            <option>Dr. Zinia</option>
                            <option>Dr. Johnson</option>
                        </select>
                    </div>
                    <div className="col-12 form-floating">
                        <input type="text" className="form-control w-75" name="" id="inputName" placeholder='Patient Name*' />
                        <label htmlFor="inputName">Patient Name</label>
                    </div>
                    <div className="col-12 form-floating">
                        <input type="email" className="form-control" id="inputEmail" placeholder='E-mail*' />
                        <label htmlFor="inputEmail">E-mail</label>
                    </div>
                    <div className="col-12 form-floating">
                        <input type="tel" className="form-control" name="" id="inputPhone" placeholder='Phone*' />
                        <label htmlFor="inputPhone">Phone</label>
                    </div>

                    <div className="col-12 form-floating">
                        <input type="text" className="form-control" id="inputAddress" placeholder="Address: 1234 Main St" />
                        <label htmlFor="inputAddress">Address</label>
                    </div>
                    <div className="col-12 form-floating">
                        <input type="date" className="form-control" name="" id="floatingDate" placeholder='Appointment Date' />
                        <label htmlFor="floatingDate">Appointment Date</label>
                    </div>
                    <div className="form-floating">
                        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: '50px' }}></textarea>
                        <label htmlFor="floatingTextarea2">Describe Your Problem</label>
                    </div>



                    <div className="col-12">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck" />
                            <label className="form-check-label" htmlFor="gridCheck">
                                Check me out
                            </label>
                        </div>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-success">Make Appointment</button>
                    </div>
                </form>
            </div>


        </div>
    );
};

export default Appointment;