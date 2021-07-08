import React from 'react'
import './Featured.css'

let companies = [
    {
        name: "Forbes",
        image: "https://thehosteller.com/wp-content/uploads/2021/02/Forbes_India_logo-white.png",
        address: "https://www.google.com/"
    },
    {
        name: "business line",
        image: "https://thehosteller.com/wp-content/uploads/2019/08/bl.png",
        address: "https://www.google.com/"
    },
    {
        name: "business line",
        image: "https://thehosteller.com/wp-content/uploads/2019/04/tripoto-1.png",
        address: "https://www.google.com/"
    },
    {
        name: "business line",
        image:"https://thehosteller.com/wp-content/uploads/2019/08/fe.png"
        ,
        address: "https://www.google.com/"

    }
]

export default function Featured(){
    return(
        <div className="featured-container">
            <div className="feature-title">
                FEATURED IN
            </div>
            <div className='company-images'>
                
            {companies.map((value, index) => 

                <a href={value.address}>
                    <img className ="feature-image" src={value.image}/>
                </a>

            )}
            </div>

        </div>
    )
}