import React from 'react';

const Appointment = () => {
    return (
        <div className='row mx-3 my-5 py-3' style={{ backgroundColor: 'paleGoldenRod', borderRadius: '20px' }}>

            <div className=' col-md-4 w-75 mx-auto my-3'>
                <img className='img-fluid' src="https://image.freepik.com/free-vector/doctor-character-background_1270-84.jpg" alt="" />
            </div>

            <div className='col-12 col-md-6 col-lg-6 w-75 mx-auto'>
                <h2>Make an Appointment Now</h2>

                <form className="row g-3 mt-3">

                    <div className="col-12 col-md-6 form-floating">
                        <select id="inputState" className="form-select">
                            <option selected>Select Department*</option>
                            <option>Gynaecology</option>
                            <option>Cardiology</option>
                            <option>Medicine</option>
                        </select>
                    </div>
                    <div className="col-12 col-md-6 form-floating">
                        <select id="inputState" className="form-select">
                            <option selected>Choose Doctor*</option>
                            <option>Dr. Kalvin</option>
                            <option>Dr. Mark </option>
                            <option>Dr. Zinia</option>
                            <option>Dr. Johnson</option>
                        </select>
                    </div>
                    <div className="col-12 col-md-6  form-floating">
                        <input type="text" className="form-control " name="" id="inputName" />
                        <label htmlFor="inputName">Patient Name</label>
                    </div>
                    <div className="col-12 col-md-6  form-floating">
                        <input type="email" className="form-control" id="inputEmail" />
                        <label htmlFor="inputEmail">E-mail</label>
                    </div>
                    <div className="col-12 col-md-6  form-floating">
                        <input type="tel" className="form-control" name="" id="inputPhone" />
                        <label htmlFor="inputPhone">Phone</label>
                    </div>

                    <div className="col-12 col-md-6  form-floating">
                        <input type="text" className="form-control" id="inputAddress" />
                        <label htmlFor="inputAddress">Address</label>
                    </div>
                    <div className="col-12 col-md-6  form-floating">
                        <input type="date" className="form-control" name="" id="floatingDate" />
                        <label htmlFor="floatingDate">Appointment Date</label>
                    </div>
                    <div className="form-floating col-12 col-md-6 ">
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