import React from 'react';
import './Banner.css';
import chair from '../../../images/chair.png'
import { Container } from 'react-bootstrap';

const Banner = () => {
    return (
        <Container>
            <main className="row d-flex align-items-center justify-content-between banner-container">
                <div className="col-md-4">
                    <h1 className="" style={{color: '#203047'}}>Your New Smile  <br />Starts Here</h1>
                    <p className="" style={{color: '#203047'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius corrupti et saepe odit rerum hic quas eos ad molestias quisquam.</p>
                    <button className="btn btn-info text-light">GET APPOINTMENT</button>
                </div>

                <div className="col-md-6">
                    <img src={chair} alt="" className="img-fluid" />
                </div>
            </main>
        </Container>
    );
};

export default Banner;