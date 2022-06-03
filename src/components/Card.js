import React from "react";
import starIcon from './img/star.png';

const Card = (props) => {
    return (
            <div className="card">
                {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>}
                <img src={`../img/${props.img}`} className="card--image" />
                <div className="card--stats">
                    <img className="card--star" src={starIcon} />
                    <span>{props.rating}</span>
                    <span className="grey">({props.reviewCount})• </span>
                    <span className="grey">{props.country}</span>
                </div>
                    <p className="card--title">{props.title}</p>
                    <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
            </div>
    )
};

export default Card;