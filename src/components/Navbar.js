import React from "react";
import mainlogo from './img/airbnb-logo.png';

const Navbar = () => {
    return (
        <nav>
            <img className="nav--logo" src={mainlogo} />
        </nav>
    )
};

export default Navbar;