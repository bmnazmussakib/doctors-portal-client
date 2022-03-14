import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './InfoCard.css';
const InfoCard = ({ info }) => {
    return (
        <div className={`col-md-4`}>
            <div className={`info-container d-flex justify-content-center info-${info.bg} text-white`}>
                <div className="pe-3">
                    <FontAwesomeIcon icon={info.icon} className="info-icon" />
                </div>

                <div>
                    <h6>{info.title}</h6>
                    <small>{info.description}</small>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;