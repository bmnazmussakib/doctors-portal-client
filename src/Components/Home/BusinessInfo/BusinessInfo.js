import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faPhoneAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { Container } from 'react-bootstrap';


const BusinessInfo = () => {

    const infoData = [
        {
            'title': 'Opening hours',
            'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            'icon': faClock,
            'bg': 'primary'
        },
        {
            'title': 'Visit Our Location',
            'description': 'Brooklyn, Newyork 14452, United States',
            'icon': faMapMarkerAlt,
            'bg': 'dark'
        },
        {
            'title': 'Contact Us Now',
            'description': '+000 888 444 555',
            'icon': faPhoneAlt,
            'bg': 'primary'
        }
    ]


    return (
        <Container>
            <section className="row">
                {
                    infoData.map(info => <InfoCard info={info} />)
                }
            </section>
        </Container>
    );
};

export default BusinessInfo;