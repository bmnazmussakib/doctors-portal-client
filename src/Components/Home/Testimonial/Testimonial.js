import React from 'react';
import './Testimonial.css';
import comma from '../../../images/comma.png';
import { Container } from 'react-bootstrap';
import TestimonialDetails from '../TestimonialDetails/TestimonialDetails';
import people1 from '../../../images/people-1.png';
import people2 from '../../../images/people-2.png';
import people3 from '../../../images/people-3.png';

const testimonialData = [
    {
        customerName: 'Winson Herry',
        customerImg: people1,
        address: 'California',
        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cum magnam ratione, perspiciatis dolorem nisi fuga et ex voluptates ipsum!'
    },
    {
        customerName: 'Winson Herry',
        customerImg: people2,
        address: 'California',
        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cum magnam ratione, perspiciatis dolorem nisi fuga et ex voluptates ipsum!'
    },
    {
        customerName: 'Winson Herry',
        customerImg: people3,
        address: 'California',
        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cum magnam ratione, perspiciatis dolorem nisi fuga et ex voluptates ipsum!'
    }
];



const Testimonial = () => {



    return (
        <section className="mt-5">

            <Container className="testimonial-head d-flex justify-content-between align-items-center m-auto" style={{ width: '90%' }}>
                <div>
                    <h5 style={{ color: '#1CC7C1' }}>TESTIMONIAL</h5>
                    <h2>What's Our Patients <br /> Says</h2>
                </div>
                <div className="comma" >
                    <img src={comma} alt="" className="img-fluid" />
                </div>
            </Container>

            <div className="testimonial-card">
                <Container className="row m-auto">
                    {
                        testimonialData.map(testimonial => <TestimonialDetails testimonial={testimonial} />)
                    }
                </Container>
            </div>

        </section>
    );
};

export default Testimonial;