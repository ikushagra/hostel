import React from 'react';
import './CardBackground.css';
import HotelCard from '../HotelCard/HotelCard'

export default function CardBackground(props){
    return(
        <div className="card-background-container">
            <h2 className="heading-of-card-container">{props.title}</h2>
            <p className="description-of-card-container">{props.description}</p>
            

            <HotelCard/>
        </div>
    )
}