import React from "react";
import starIcon from './img/star.png';

const Card = (props) => {
    return (
            <div className="card">
                <img className="card--image" src={props.img} />
                <div className="card--stats">
                    <img class="card--star" src={starIcon} />
                    <span>{props.rating}</span>
                    <span class="grey">({props.reviewCount})• </span>
                    <span class="grey">{props.country}</span>
                    <span><p>{props.title}</p></span>
                    <span class="bold"><p>From ${props.price} per person</p></span>
                </div>
            </div>
    )
};

export default Card;