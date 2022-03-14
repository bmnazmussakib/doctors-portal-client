import React from 'react';
import { Container } from 'react-bootstrap';
import doctorImg from '../../../images/doctor-small.png'
import DoctorDetails from '../DoctorDetails/DoctorDetails';

const Doctor = () => {

    const doctorData = [
        {
            name: 'Dr. John Smith',
            phone: '123-456-555',
            img: doctorImg
        },
        {
            name: 'Dr. John Smith',
            phone: '123-456-555',
            img: doctorImg
        },
        {
            name: 'Dr. John Smith',
            phone: '123-456-555',
            img: doctorImg
        },
    ];

    return (
        <section className="my-5" style={{ height: "450px" }}>
            <Container>
                <div className="text-center mb-5">
                    <h5 className="text-info">OUR DOCTOR</h5>
                </div>
                <div className="testimonial-card">
                    <Container className="row m-auto">
                        {
                            doctorData.map(doctor => <DoctorDetails doctor={doctor} />)
                        }
                    </Container>
                </div>
            </Container>
        </section>
    );
};

export default Doctor;