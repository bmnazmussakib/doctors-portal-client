import React from 'react';
import Appointment from '../Appointment/Appointment';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Doctor from '../Doctor/Doctor';
import Exceptional from '../Exceptional/Exceptional';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {

    

    return (
        <div>
            <Header />
            <Services />
            <Exceptional />
            <Appointment />
            <Testimonial />
            <Blog />
            <Doctor />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;