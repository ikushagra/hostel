import React from 'react'
import './Contact.css'

const recentPosts = [
    {
        name:"5 Astounding Valleys In Himachal Pradesh That Every Traveller Needs To Explore",
        address: "https://www.google.com/"
    },
    {
        name:"A Beginner At Trekking? Read This Before You Plan Your First Trek!",
        address: "https://www.google.com/"
    },
    {
        name:"List Of All Long Weekends In 2021 – Plan Your Vacations Now!",
        address: "https://www.google.com/"
    }
]

const quickLinks = [
    {
        name:"Our Helpdesk",
        address: "https://www.google.com/"
    },
    {
        name:"Guest Policy",
        address: "https://www.google.com/"
    },
    {
        name:"Privacy Policy",
        address: "https://www.google.com/"
    },
    {
        name:"Terms & Conditions",
        address: "https://www.google.com/"
    }
]
export default function Contact(){
    return(
        <div className="contact-container">
            <div className="contact-info">
                <div className="contact-logo"><img src="https://thehosteller.com/wp-content/uploads/2020/01/thehostell.png"/></div>
                <div className="about-para">
                   <p> Your friendly neighbourhood backpacker hostel.</p>
                    <p>We have created happy memories for our travellers in 10 different locations and continue to expand with gusto. With the belief of making travelling affordable and approachable in India, we aim to create authentic memories for every traveller looking for a bit more than just a vacation.</p>
                </div>
            </div>
            <div className="sign-up">
                <h4>Subscribe to Our Newsletter</h4>
                <p>
                <label>Name</label>
                <input/>
                </p>
                <p>
                <label>Email</label>
                <input/>
                </p>
                <div id="sign-up-button">SIGN UP</div>
            </div>
            <div className="recent-posts">
                <h4>Recent Posts</h4>
                {recentPosts.map((value, index) => 
                <a href={value.address}>{value.name}</a>
                )}
            </div>
            <div className="quick-links">
                <h4>Quick Links</h4>
                {quickLinks.map((value, index) => 
                <a href={value.address}>{value.name}</a>
                )}
            </div>

        </div>
    )
}