import React, { useState,useContext,useEffect } from 'react'
import './Taskbar.css';
import {AuthContext} from '../../AuthContext';
import { BrowserRouter as Router,Routes,Route, Link} from 'react-router-dom';
import Footer from '../footer/footer'
import {RxDashboard} from "react-icons/rx";
import {BsCalendar3} from "react-icons/bs";
import {PiListChecksDuotone} from "react-icons/pi"
import {BsChatLeftDots} from "react-icons/bs"
import {FiUsers} from "react-icons/fi"
import {VscAccount} from "react-icons/vsc"
import {PiUserList} from "react-icons/pi"
import {AiOutlineMail} from "react-icons/ai"
import {BiPlus} from "react-icons/bi"
import {MdOutlineNotificationsActive} from "react-icons/md"
import logo from "../logo.png"
import Dashboard from '../dashboard/Dashboard';
const Taskbar = ({ userEmail }) => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const [userIdState, setUserIdState] = useState('');
    const handleNavbarToggle = () => {
      setIsNavbarOpen(!isNavbarOpen);
    };
  return (
    <body>
        <div className={`taskbar ${isNavbarOpen ? 'open' : ''}`}>
            <div class='left'>
                <button className="navbar-toggle" onClick={handleNavbarToggle}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
            </div>
            <div class='left'>
                <AiOutlineMail />
            </div>
            <div class='right'>
                <VscAccount/>    
            </div>
            <div class='right'>
                <a href='#'>Hi {userEmail}</a>
            </div>
            <div class='right'>
                <MdOutlineNotificationsActive/>
            </div>
        </div>
        <nav className={`navbar ${isNavbarOpen ? 'open' : ''}`}>
            <p style={{fontSize:'20px',fontWeight:'600',display:'flex',flexDirection:'row',}}>
                <img src={logo} alt="About Image"/>
            <span className='logoName' >Dash</span></p>
            <ul className="navbar-links">
                <div className='navbar-li'>
                    <li className="navbar-link">
                        <Link to="/Dashboard">
                            <span class='taskbar-icon'>
                                <RxDashboard style={{fontSize:'25px'}}/>
                            </span>
                            <span class='taskbar-name'>
                                Dashboard
                            </span>
                        </Link>
                    </li>
                </div>
{/*                 <div className='navbar-li'>
                <li className="navbar-link">
                    <Link to="/ReactCalendar">
                    <span class='taskbar-icon'>
                        <BsCalendar3 style={{fontSize:'25px'}}/>
                    </span>
                    <span class='taskbar-name'>
                        Calendar
                    </span></Link>
                </li>
                </div> */}
                <div className='navbar-li'>
                <li className="navbar-link">
                <Link to="/ToDoList">
                    <span class='taskbar-icon'>
                        <PiListChecksDuotone style={{fontSize:'25px'}}/>
                    </span>
                    <span class='taskbar-name'>
                        To Do List
                    </span>
                </Link>
                </li>
                </div>
                <div className='navbar-li'>
                <li className="navbar-link">
                <Link to="/Chatbox">
                    <span class='taskbar-icon'>
                        <BsChatLeftDots style={{fontSize:'25px'}}/>
                    </span>
                    <span class='taskbar-name'>
                        Chat
                    </span>
                </Link>
                </li>
                </div>
                <div className='navbar-li'>
                <li className="navbar-link">
                <Link to="/Userlist">
                    <span class='taskbar-icon'>
                        <FiUsers style={{fontSize:'25px'}}/>
                    </span>
                    <span class='taskbar-name'>
                        User List
                    </span></Link>
                </li>
                </div>
                <div className='navbar-li'>
                    <li className="navbar-link">
                        <Link to="/Addnewproject">
                            <span class='taskbar-icon'>
                                <BiPlus style={{fontSize:'25px'}}/>
                            </span>
                            <span class='taskbar-name'>
                                Add
                            </span>
                        </Link>
                    </li>
                </div>
                <div className='navbar-li'>
                <li className="navbar-link">
                <Link to="/Account">
                    <span class='taskbar-icon'>
                        <VscAccount style={{fontSize:'25px'}}/>
                    </span>
                    <span class='taskbar-name'>
                        Account
                    </span></Link>
                </li>
                </div>
            </ul>
        </nav>
    </body>
  );
};

export default Taskbar
