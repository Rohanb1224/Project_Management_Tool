import React from 'react'
import './Landingpage.css'
import "@fontsource/merriweather/900.css"
import { BrowserRouter as Router,Routes,Route, Link} from 'react-router-dom';
import landing from '../Acceptasks.gif'
import time from '../time.png'
import group from '../msg2.png'
import task from '../task.png'
import stress from '../stress.png'
import {GrFacebookOption} from 'react-icons/gr'
import {AiOutlineInstagram, AiOutlineTwitter} from 'react-icons/ai'
import { AiOutlineFacebook } from 'react-icons/ai'
import { AiOutlineYoutube } from 'react-icons/ai'
const Landingpage = () => {
  return (
    <div className="landing-page">
        <div className='horizontal-taskbar'>
            <h1>Dash</h1>
            <ul>
            <Link to="/About"><li>About</li></Link>
                <li>Contact Us</li>
                <li>Features</li>
                <li>Sign In</li>
            </ul>
        </div>
        <div className='container_1'>
            <div className='image-description-container'>
                <div className='description-container'>
                    <h2>Effortless <span style={{color:'#49acea'}}>Project Management</span> at Your Fingertips!</h2>
                    <p>Supercharge your projects with our all-in-one project management application. Seamlessly collaborate, streamline tasks, and track progress with ease. From planning to completion, stay organized and achieve exceptional results</p>
                    <br/>
                    <Link to="/About"><button className='description-button'>Learn more !</button></Link>
                </div>
                <div className='image-container'>
                    <img src={landing} alt='' />
                </div>
            </div>
        </div>
        <div className='container_2'>
            <div class = 'container-card'>
                <div class = 'container-image'>
                    <img src ={time} alt=""></img>
                </div>
                <div class = 'content'>
                    <h3>Time Tracking</h3>
                    <span>Track and record time spent on tasks and projects to monitor productivity and analyze resource utilization</span>
                </div>
            </div> 
            <div class = 'container-card'>
                <div class = 'container-image'>
                    <img src ={group} alt=""></img>
                </div>
                <div class = 'content'>
                    <h3>Collaboration and Communication</h3>
                    <span> Facilitate team collaboration through real-time communication, file sharing, and document collaboration</span>
                </div>
            </div> 
            <div class = 'container-card'>
                <div class = 'container-image'>
                    <img src ={task} alt=""></img>
                </div>
                <div class = 'content'>
                    <h3>Task Management</h3>
                    <span> Create and manage tasks, assign them to team members, set due dates, and track progress.</span>
                </div>
            </div>   
        </div>
        <div className='container-1'>
            <div className='image-description-container'>
                <div className='image-container'>
                    <img src={stress} alt='' />
                </div>
                <div className='description-container'>
                    <h2>Navigate Projects with Ease, Say <span style={{color:'#49acea'}}>Goodbye to Stress!</span> </h2>
                    <p>Sail through projects stress-free. Streamline tasks, collaborate effortlessly, and achieve success with ease. Say goodbye to project stress and embrace seamless project management</p>
                    <br/>
                    <Link to="/Login"><button className='description-button'>Sign Up !</button></Link>
                </div>
                
            </div>
        </div>
        <div className='contact-form'>
            <span><h2>Contact Us !</h2></span>
            <form>
                <label for="name"></label><br/>
                <input type="text" id="name" placeholder='Enter your name :'/><br/>
                <label for="mail"></label><br/>
                <input type="email" id="mail"placeholder='Enter your email address :'/><br/>
                <label for="query"></label><br/>
                <textarea id="query" rows="4" cols="50" placeholder='Enter your Query :'/><br/>
                <input type="submit" value="Submit"/><br/>
            </form>
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