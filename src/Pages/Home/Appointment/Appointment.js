import React from 'react';

const Appointment = () => {
    return (
        <div className='row mx-3 my-5'>
            <div className='col'>
                <img src="https://image.freepik.com/free-vector/doctor-character-background_1270-84.jpg" alt="" />
            </div>
            <div className='col w-75'>
                <h2>Make an Appointment Now</h2>
                <form class="row g-3 mt-3">
                    <div class="col-md-6">
                        <select id="inputState" class="form-select">
                            <option selected>Select Department*</option>
                            <option>Gynaecology</option>
                            <option>Cardiology</option>
                            <option>Medicine</option>
                        </select>
                    </div>
                    <div class="col-md-6">
                        <select id="inputState" class="form-select">
                            <option selected>Choose Doctor*</option>
                            <option>Dr. Kalvin</option>
                            <option>Dr. Mark </option>
                            <option>Dr. Zinia</option>
                            <option>Dr. Johnson</option>
                        </select>
                    </div>
                    <div class="col-12 form-floating">
                        <input type="text" class="form-control w-75" name="" id="inputName" placeholder='Patient Name*' />
                        <label for="inputName">Patient Name</label>
                    </div>
                    <div class="col-12 form-floating">
                        <input type="email" class="form-control" id="inputEmail" placeholder='E-mail*' />
                        <label for="inputEmail">E-mail</label>
                    </div>
                    <div class="col-12 form-floating">
                        <input type="tel" class="form-control" name="" id="inputPhone" placeholder='Phone*' />
                        <label for="inputPhone">Phone</label>
                    </div>

                    <div class="col-12 form-floating">
                        <input type="text" class="form-control" id="inputAddress" placeholder="Address: 1234 Main St" />
                        <label for="inputAddress">Address</label>
                    </div>
                    <div class="col-12 form-floating">
                        <input type="date" class="form-control" name="" id="floatingDate" placeholder='Appointment Date' />
                        <label for="floatingDate">Appointment Date</label>
                    </div>
                    <div class="form-floating">
                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: '50px' }}></textarea>
                        <label for="floatingTextarea2">Describe Your Problem</label>
                    </div>



                    <div class="col-12">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck" />
                            <label class="form-check-label" for="gridCheck">
                                Check me out
                            </label>
                        </div>
                    </div>
                    <div class="col-12">
                        <button type="submit" class="btn btn-success">Make Appointment</button>
                    </div>
                </form>
            </div>


        </div>
    );
};

export default Appointment;