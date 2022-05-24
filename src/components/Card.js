import React from "react";
import cardImage from './img/katie-zaferes.png';
import starIcon from './img/star.png';

const Card = () => {
    return (
            <div className="card">
                <img className="card--image" src={cardImage} />
                <div className="card--stats">
                    <img src={starIcon} />
                    <span>5.0</span>
                    <span>(6) • </span>
                    <span>USA</span>
                    <p>Life lessons with Katie Zaferes</p>
                    <p>From $136 per person</p>
                </div>
            </div>
    )
};

export default Card;