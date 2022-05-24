import React from "react";
import mainImage from './img/photo-grid.png';

const Hero = () => {
    return (
        <section className="hero--container">
            <img className="hero--photo"src={mainImage} />
                <h1 className="hero--h1">Online Experiences</h1>
                <p className="hero--text">Join unique interactive activities led by 
                one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
};

export default Hero;