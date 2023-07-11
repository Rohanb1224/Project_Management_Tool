import React from 'react'
import './about.css'
import { BrowserRouter as Router,Routes,Route, Link} from 'react-router-dom';
import "@fontsource/merriweather/900.css"
import about from '../about.png'
import {AiOutlineInstagram, AiOutlineTwitter} from 'react-icons/ai'
import { AiOutlineFacebook } from 'react-icons/ai'
import { AiOutlineYoutube } from 'react-icons/ai'
import Taskbar from '../taskbar/Taskbar';
const Landingpage = ({ userEmail }) => {
  return (
    
    <div className="landing-page">
        
        <div className='horizontal-taskbar'>
            <h1>Dash</h1>
            <ul>
                <li>About</li>
                <li>Contact Us</li>
                <li>Features</li>
                <li>Sign In</li>
            </ul>
        </div>
        <div className='about-container'>
            <h1 className='about-heading'>About Us !</h1>
            <img src={about}></img>
            <div className='about-card'>
                <p><span>Welcome to our project management application!</span> We are dedicated to empowering teams and individuals to effectively plan, execute, and achieve their project goals with ease. Our mission is to provide a comprehensive and intuitive platform that streamlines project management processes, fosters collaboration, and promotes successful project outcomes.<br/>At our core, we understand the challenges and complexities that arise when managing projects of any size or nature. Whether you're leading a small team or overseeing large-scale initiatives, our application is designed to simplify your workload and enhance your productivity. We believe that effective project management should be accessible to all, enabling individuals and organizations to realize their full potential.<br/>With our user-friendly interface and robust features, our application caters to the diverse needs of project managers, team members, and stakeholders. From initiating projects and defining tasks to tracking progress and communicating with team members, our platform offers a centralized hub where everyone involved can collaborate seamlessly. With our powerful tools and insightful analytics, you can make data-driven decisions, identify bottlenecks, and ensure projects stay on track.

                <br/>Join us on this journey as we revolutionize project management. Whether you're a seasoned project manager or just starting your career, our application is here to support you every step of the way. <span>Together, let's achieve project success and make an impact.</span></p>
                <Link to="Register"><button>Join us !</button></Link>
            </div>
        </div>
        <div className='container-footer'>
            <div class="footer">
                <div class="row">
                <a href="#"><AiOutlineFacebook className='icons'/></a>
                <a href="#"><AiOutlineInstagram className='icons'/></a>
                <a href="#"><AiOutlineTwitter className='icons'/></a>
                <a href="#"><AiOutlineYoutube className='icons'/></a>
                </div>

                <div class="row">
                <ul>
                <li><a href="#">Contact us</a></li>
                <li><a href="#">Our Services</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">About</a></li>
                </ul>
                </div>

                <div class="row">
                MERN Copyright © 2023 Mern - All rights reserved || Designed By: Pugal Ramyaa 
                </div>
                </div>
            </div>
    </div>
  )
}

export default Landingpage