import React from 'react';
import { Container } from 'react-bootstrap';
import floride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import ServiceDetails from '../ServiceDetails/ServiceDetails';


const Services = () => {

    const serviceData = [
        {
            name: 'Floride Treatment',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus.',
            icon: floride
        },
        {
            name: 'Cavity Filling',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus.',
            icon: cavity
        },
        {
            name: 'Teeth Whitening',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus.',
            icon: whitening
        }
    ]

    return (
        <section className="my-5" style={{height: "450px"}}>
            <Container>
                <div className="text-center mb-5">
                    <h5 className="text-info">OUR SERVICES</h5>
                    <h2>Services We Provide</h2>
                </div>
                <div className="row">
                    {
                        serviceData.map(services => <ServiceDetails services={services} />)
                    }
                </div>
            </Container>
        </section>
    );
};

export default Services;