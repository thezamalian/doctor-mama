import React from 'react';

const Features = () => {
    return (
        <div className='mx-3 mt-5'>
            <h2 className='mb-3 text-primary '>Our Features</h2>

            <div className="row px-3">
                <div className="col-12  col-md-6 " style={{ borderRadius: '10px' }}>

                    <div className="card my-3 " style={{ width: '18rem', backgroundColor: 'blanchedalmond' }}>
                        <div className="card-body">
                            <h5 className="card-title">Register for FREE</h5>
                            <p className="card-text">Create a secure telemedicine account using our patient portal.</p>
                        </div>
                    </div>

                    <div className='d-flex justify-content-end me-3'>
                        <div className="card my-3 " style={{ width: '18rem', backgroundColor: 'blanchedalmond' }}>
                            <div className="card-body">
                                <h5 className="card-title">Describe your symptoms</h5>
                                <p className="card-text">Book an appointment and tell us how you’re feeling.</p>
                            </div>
                        </div>
                    </div>

                    <div className="card my-3" style={{ width: '18rem', backgroundColor: 'blanchedalmond' }}>
                        <div className="card-body">
                            <h5 className="card-title">Get a diagnosis or prescription</h5>
                            <p className="card-text">See a Doctor digitally using text, video or audio calls to save time & money.</p>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 " style={{ borderRadius: '10px', backgroundColor: ' mistyRose ' }}>
                    <img className='h-50 mb-3 img-fluid' src="https://image.freepik.com/free-vector/human-hand-holding-mobile-phone-with-text-messages_74855-6531.jpg" alt="" />
                    <h4> More cool features available on the app</h4>
                    <p>Download the Dr Mamma app for FREE today!</p>
                    <a className='d-flex justify-content-center text-decoration-none' href="https://play.google.com/store/apps">
                        <img width="50px" className='' src="https://image.flaticon.com/icons/png/512/104/104122.png" alt="" />
                        <h5> Google Play Store</h5>
                    </a>
                </div>
            </div>

        </div>
    );
};

export default Features;