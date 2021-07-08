import React from 'react'
import './App.css';
import { ImFacebook, ImTwitter, ImYoutube } from 'react-icons/im';
import { AiOutlineInstagram } from 'react-icons/ai';
import { IoMdCall } from 'react-icons/io';
import { GrMail } from 'react-icons/gr';



import Contact from './components/contact/Contact'
import Homepage from './components/homepage-wallpaper/Homepage'
import CardBackground from './components/CardBackground/CardBackground'
import Featured from './components/Featured/Featured'
import Franchise from './components/franchise/Franchise'
function App() {
  return (
    <div className="app">
       <navbar className="navbar">
        <span className="logo-container">
          <img className="logo" src="https://thehosteller.com/wp-content/uploads/2019/01/The-Hosteller-Logo-white.png" alt="company logo"/>
        </span>
        <span className="nav-links-container">
          <a href="https://www.google.com/" rel="noreferrer" target="_blank">
            ABOUT
          </a>
          {/* <select>
            <option>india</option>
          </select> */}
          <a href="https://www.google.com/" rel="noreferrer" target="_blank">TRIPS</a>
          <a href="https://www.google.com/" rel="noreferrer" target="_blank">BLOGS</a>
        </span>
        <span className="social-media-container">
          <a href="https://www.google.com/" rel="noreferrer" target="_blank"><ImFacebook/></a>
          <a href="https://www.google.com/" rel="noreferrer" target="_blank"><AiOutlineInstagram/></a>
          <a href="https://www.google.com/" rel="noreferrer" target="_blank"><ImTwitter/></a>
        </span>
      </navbar>
      <div className="homepage-wallpaper-container">
      <Homepage/>
      </div>
      
      <div className="card-Background-wrapper">
      <CardBackground title = "hello" description="doraemon"/>
      </div>
      
      
      <div className="franchise-wrapper">
        <Franchise/>
      </div>

      <div className="featured-wrapper">
        <Featured/>
      </div>

      <div className="contact-wrapper">
      <Contact/>
      </div>
      
      <footer className='footer'>
        <div className='copyright-quote'>The Company Private Limited © 2020 All Rights Reserved</div>
        <div className='footer-contact-icons'>
        <a className="footer-icon" href="https://www.google.com/" rel="noreferrer" target="_blank"><ImTwitter className="footer-link-logo"/></a>
        <a className="footer-icon" href="https://www.google.com/" rel="noreferrer" target="_blank"><ImFacebook className="footer-link-logo"/></a>
        <a className="footer-icon" href="https://www.google.com/" rel="noreferrer" target="_blank"><ImYoutube className="footer-link-logo"/></a>
        <a className="footer-icon" href="https://www.google.com/" rel="noreferrer" target="_blank"><AiOutlineInstagram className="footer-link-logo"/></a>
        <a className="footer-icon" href="https://www.google.com/" rel="noreferrer" target="_blank"><IoMdCall className="footer-link-logo"/></a>
        <a className="footer-icon" href="https://www.google.com/" rel="noreferrer" target="_blank"><GrMail className="footer-link-logo"/></a>
        </div>
      </footer>
    </div>
  );
}

export default App;



