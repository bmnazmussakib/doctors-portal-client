import React from 'react';
import './Header.css';
import Banner from '../Banner/Banner';
import Navbar from '../Navbar/Navbar';
import BusinessInfo from '../BusinessInfo/BusinessInfo';

const Header = () => {
    return (
        <div className="header-container">
            <Navbar />
            <Banner />
            <BusinessInfo />
        </div>
    );
};

export default Header;