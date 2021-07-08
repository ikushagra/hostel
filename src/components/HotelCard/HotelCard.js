import React from 'react';
import './HotelCard.css';

let hotels = [
    {
        cityName: "Delhi",
        description: "asdfahkfjhakjfkha",
        image: "https://thehosteller.com/wp-content/uploads/2020/12/Photo-44-1.jpg"
    },
    {
        cityName: "Mumbai",
        description: "asdfahkfjhakjfkha",
        image: "https://thehosteller.com/wp-content/uploads/2020/12/Photo-44-1.jpg"
    },
    {
        cityName: "Chennai",
        description: "asdfahkfjhakjfkha",
        image: "https://thehosteller.com/wp-content/uploads/2020/12/Photo-44-1.jpg"
    },
    {
        cityName: "Delhi",
        description: "asdfahkfjhakjfkha",
        image: "https://thehosteller.com/wp-content/uploads/2020/12/Photo-44-1.jpg"
    },
    {
        cityName: "Mumbai",
        description: "asdfahkfjhakjfkha",
        image: "https://thehosteller.com/wp-content/uploads/2020/12/Photo-44-1.jpg"
    },
    {
        cityName: "Chennai",
        description: "asdfahkfjhakjfkha",
        image: "https://thehosteller.com/wp-content/uploads/2020/12/Photo-44-1.jpg"
    },
    {
        cityName: "Delhi",
        description: "asdfahkfjhakjfkha",
        image: "https://thehosteller.com/wp-content/uploads/2020/12/Photo-44-1.jpg"
    },
    {
        cityName: "Mumbai",
        description: "asdfahkfjhakjfkha",
        image: "https://thehosteller.com/wp-content/uploads/2020/12/Photo-44-1.jpg"
    },
    {
        cityName: "Chennai",
        description: "asdfahkfjhakjfkha",
        image: "https://thehosteller.com/wp-content/uploads/2020/12/Photo-44-1.jpg"
    },
    {
        cityName: "Delhi",
        description: "asdfahkfjhakjfkha",
        image: "https://thehosteller.com/wp-content/uploads/2020/12/Photo-44-1.jpg"
    },
    {
        cityName: "Mumbai",
        description: "asdfahkfjhakjfkha",
        image: "https://thehosteller.com/wp-content/uploads/2020/12/Photo-44-1.jpg"
    },
    {
        cityName: "Chennai",
        description: "asdfahkfjhakjfkha",
        image: "https://thehosteller.com/wp-content/uploads/2020/12/Photo-44-1.jpg"
    }
    
]



export default function HotelCard(){
    return(
        <div className="card-container">

    {hotels.map((value, index)=> <a className="hotel-card-image-container" target="_blank" href={value.image} >



        <span className="hotel-card-image" style={{ backgroundImage: `url`+`(`+value.image+`)`}} >
            {value.cityName}
        </span>

        </a>)}
        </div>
    )
}