import React from 'react';
import './Appointment.css';
import doctor from '../../../images/doctor.png'
import { Container } from 'react-bootstrap';

const Appointment = () => {
    return (
        <section style={{marginTop: '150px'}} className="appointment mb-5" >
            <div className="appointment-container ">
                <Container>
                    <div className="row">
                        <div className="col-md-5">
                            <img src={doctor} alt="" className="img-fluid appointment-img" />
                        </div>

                        <div className="col-md-7 py-5" style={{zIndex: '1'}}>
                            <h5 style={{ color: '#1CC7C1' }} className="pb-2">APPOINTMENT</h5>
                            <h2 className="text-white pb-3">Make an appointment <br /> Today</h2>
                            <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quo nemo accusamus sed rem ducimus nobis porro architecto quaerat minima.</p>
                            <button class="btn btn-info w-25 mt-4">Learn More</button>
                        </div>

                    </div>
                </Container>
            </div>
        </section>
    );
};

export default Appointment;