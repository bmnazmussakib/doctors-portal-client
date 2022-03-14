import React from 'react';
import './ServiceDetails.css';

const ServiceDetails = ({ services }) => {
    return (
        <div className={`col-md-4`}>
            <div className={`info-container text-center`}>
                <div className="mb-5 service-img">
                    <img src={services.icon} alt="" className="service-icon img-fluid"/>
                </div>

                <div className="mt-5">
                    <h5 className="mb-4">{services.name}</h5>
                    <small className="service-description">{services.description}</small>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;