import React from 'react'
import './Homepage.css'

export default function Homepage(){
    return(
        <div className='homepage'>
            <div className="book-now-box-container">
                <h1>BOOK NOW</h1>
                <h4>Hostels</h4>

                <label>Hostel</label>
                <select className="select-city-option">
                    <option>Delhi</option>
                    <option>Chennai</option>
                    <option>Kolkata</option>
                </select>


                <button className="book-now-btn">BOOK NOW</button>

            </div>
        </div>
    )
}