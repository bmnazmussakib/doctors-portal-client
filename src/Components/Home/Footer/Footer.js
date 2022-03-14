import React from 'react';
import './footer.css';
import facebook from '../../../images/Group 143.svg';
import googlePlus from '../../../images/Group 40.svg';
import twitter from '../../../images/Group 41.svg';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="footer-single-col">
                            <br />
                            <br />
                            <ul>
                                <li><a href="#">Emergency Dental Care</a></li>
                                <li><a href="#">Check Up</a></li>
                                <li><a href="#">Treatment of Personal Diseases</a></li>
                                <li><a href="#">Tooth Extraction</a></li>
                                <li><a href="#">Check Up</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="footer-single-col">
                            <h5 className="mb-4">Service</h5>
                            <ul>
                                <li><a href="#">Emergency Dental Care</a></li>
                                <li><a href="#">Check Up</a></li>
                                <li><a href="#">Treatment of Personal Diseases</a></li>
                                <li><a href="#">Tooth Extraction</a></li>
                                <li><a href="#">Check Up</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="footer-single-col">
                            <h5 className="mb-4">Oral Health</h5>
                            <ul>
                                <li><a href="#">Emergency Dental Care</a></li>
                                <li><a href="#">Check Up</a></li>
                                <li><a href="#">Treatment of Personal Diseases</a></li>
                                <li><a href="#">Tooth Extraction</a></li>
                                <li><a href="#">Check Up</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="footer-single-col">
                            <h5 className="mb-4">Oral Health</h5>
                            <address>
                                <p>New York - 101010 Hudson Yards</p>
                            </address>
                            <div className="footer-icon mb-5">
                                <a href="#"><img src={facebook} alt="" className=""/></a>
                                <a href="#"><img src={googlePlus} alt="" className=""/></a>
                                <a href="#"><img src={twitter} alt="" className=""/></a>
                            </div>

                            <h6 className="call-now mb-4">Call Now</h6>
                            <a href="tel:+" className='phone'>+2025550295</a>

                        </div>
                    </div>
                </div>

                <div className="copyright text-center mt-5">
                    <h6 >Copyright 2020 All Rights Reserved</h6>
                </div>
            </div>
        </footer>
    );
};

export default Footer;