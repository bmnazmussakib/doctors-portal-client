import React from 'react';
import { Container } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    return (
        <section className="my-5 contact-container" style={{  }}>
            <Container className="row m-auto w-50 py-5">

                <div className="text-center mb-5 contact-card">
                    <h5 className="text-info">CONTACT US</h5>
                    <h2 className="text-white">Always Contact With Us</h2>
                </div>

                <form className="contact-card pb-4">
                    <div class="mb-3">
                        <input type="email" class="form-control" id="email" placeholder="Email Address*" />
                    </div>
                    <div class="mb-3">
                        <input type="password" class="form-control" id="password" placeholder="Password*" />
                    </div>
                    <div class="mb-3">
                        <textarea class="form-control py-3" id="message" rows="3" placeholder="Your Message*" />
                    </div>
                    <div class="d-grid gap-2 col-6 mx-auto">
                        <button class="btn btn-info text-white text-uppercase fw-bolder py-2" type="button">Submit</button>
                    </div>
                </form>

            </Container>
        </section>
    );
};

export default Contact;