import React, { useState } from 'react'
import profile from '../profile.png'
import { BrowserRouter as Router,Routes,Route, Link} from 'react-router-dom';
import './userlist.css'
import {AiOutlineGoogle} from 'react-icons/ai'
import {GrFacebookOption} from 'react-icons/gr'
import {AiOutlineTwitter} from 'react-icons/ai'
import Taskbar from '../taskbar/Taskbar';
const Userlist = ({ userEmail }) => {
  const [activeTab, setActiveTab] = useState('TeamMembers');

  const openOptions = (OptionsName) => {
    setActiveTab(OptionsName);
  };
  return (

    <div>
        {/* <Taskbar/> */}
        <Taskbar userEmail={userEmail}/>
        <div className="tab">
          <button
            className={`tablinks ${activeTab === 'TeamMembers' ? 'active' : ''}`}
            onClick={() => openOptions('TeamMembers')}>
            Team Members
          </button>
          <button
            className={`tablinks ${activeTab === 'TeamLeaders' ? 'active' : ''}`}
            onClick={() => openOptions('TeamLeaders')}>
            Team Leaders
          </button>
        </div>
        <div
        id="TeamMembers"
        className={`tabcontent ${activeTab === 'TeamMembers' ? 'active' : ''}`}
      >
        <div className='card-list' >
              <table>
                <tr>
                  <th rowspan="2"><img src={profile} alt=""></img></th>
                  <td className='user-list-name'>Name</td>
                </tr>
                <tr>
                  <td className='user-list-description'>Description</td> 
                  <tr>
                  <th rowspan="6"><span className='social-icons'><span className='social-icons-google'><AiOutlineGoogle/></span><span className='social-icons-fb'><GrFacebookOption/></span><span  className='social-icons-twit'><AiOutlineTwitter/></span></span></th>
                  </tr> 
                </tr>
              </table>
            <hr/>
            
            <span style={{marginLeft:'65%'}}>
              <button className='button1' style={{marginRight:'4px'}}>Chat</button>
              <Link to="UProfile"><button className='button1'>Profile</button></Link>
            </span>
        </div>
        <div className='card-list' >
              <table>
                <tr>
                  <th rowspan="2"><img src={profile} alt=""></img></th>
                  <td className='user-list-name'>Name</td>
                </tr>
                <tr>
                  <td className='user-list-description'>Description</td> 
                  <tr>
                  <th rowspan="6"><span className='social-icons'><span className='social-icons-google'><AiOutlineGoogle/></span><span className='social-icons-fb'><GrFacebookOption/></span><span  className='social-icons-twit'><AiOutlineTwitter/></span></span></th>
                  </tr> 
                </tr>
              </table>
            <hr/>
            
            <span style={{marginLeft:'65%'}}>
              <button className='button1' style={{marginRight:'4px'}}>Chat</button>
              <Link to="UProfile"><button className='button1'>Profile</button></Link>
            </span>
        </div>
        <div className='card-list' >
              <table>
                <tr>
                  <th rowspan="2"><img src={profile} alt=""></img></th>
                  <td className='user-list-name'>Name</td>
                </tr>
                <tr>
                  <td className='user-list-description'>Description</td> 
                  <tr>
                  <th rowspan="6"><span className='social-icons'><span className='social-icons-google'><AiOutlineGoogle/></span><span className='social-icons-fb'><GrFacebookOption/></span><span  className='social-icons-twit'><AiOutlineTwitter/></span></span></th>
                  </tr> 
                </tr>
              </table>
            <hr/>
            
            <span style={{marginLeft:'65%'}}>
              <button className='button1' style={{marginRight:'4px'}}>Chat</button>
              <Link to="UProfile"><button className='button1'>Profile</button></Link>
            </span>
        </div>
        <div className='card-list' >
              <table>
                <tr>
                  <th rowspan="2"><img src={profile} alt=""></img></th>
                  <td className='user-list-name'>Name</td>
                </tr>
                <tr>
                  <td className='user-list-description'>Description</td> 
                  <tr>
                  <th rowspan="6"><span className='social-icons'><span className='social-icons-google'><AiOutlineGoogle/></span><span className='social-icons-fb'><GrFacebookOption/></span><span  className='social-icons-twit'><AiOutlineTwitter/></span></span></th>
                  </tr> 
                </tr>
              </table>
            <hr/>
            
            <span style={{marginLeft:'65%'}}>
              <button className='button1' style={{marginRight:'4px'}}>Chat</button>
              <Link to="UProfile"><button className='button1'>Profile</button></Link>
            </span>
        </div>
      </div>

      <div
        id="TeamLeaders"
        className={`tabcontent ${activeTab === 'TeamLeaders' ? 'active' : ''}`}
      >
        <div className='card-list' >
              <table>
                <tr>
                  <th rowspan="2"><img src={profile} alt=""></img></th>
                  <td className='user-list-name'>Name</td>
                </tr>
                <tr>
                  <td className='user-list-description'>Description</td> 
                  <tr>
                  <th rowspan="6"><span className='social-icons'><span className='social-icons-google'><AiOutlineGoogle/></span><span className='social-icons-fb'><GrFacebookOption/></span><span  className='social-icons-twit'><AiOutlineTwitter/></span></span></th>
                  </tr> 
                </tr>
              </table>
            <hr/>
           
            <span style={{marginLeft:'65%'}}>
              <button className='button1' style={{marginRight:'4px'}}>Chat</button>
              <Link to="UProfile"><button className='button1'>Profile</button></Link>
            </span>
        </div>
        <div className='card-list' >
              <table>
                <tr>
                  <th rowspan="2"><img src={profile} alt=""></img></th>
                  <td className='user-list-name'>Name</td>
                </tr>
                <tr>
                  <td className='user-list-description'>Description</td> 
                  <tr>
                  <th rowspan="6"><span className='social-icons'><span className='social-icons-google'><AiOutlineGoogle/></span><span className='social-icons-fb'><GrFacebookOption/></span><span  className='social-icons-twit'><AiOutlineTwitter/></span></span></th>
                  </tr> 
                </tr>
              </table>
            <hr/>
           
            <span style={{marginLeft:'65%'}}>
              <button className='button1' style={{marginRight:'4px'}}>Chat</button>
              <Link to="UProfile"><button className='button1'>Profile</button></Link>
            </span>
        </div>
        <div className='card-list' >
              <table>
                <tr>
                  <th rowspan="2"><img src={profile} alt=""></img></th>
                  <td className='user-list-name'>Name</td>
                </tr>
                <tr>
                  <td className='user-list-description'>Description</td> 
                  <tr>
                  <th rowspan="6"><span className='social-icons'><span className='social-icons-google'><AiOutlineGoogle/></span><span className='social-icons-fb'><GrFacebookOption/></span><span  className='social-icons-twit'><AiOutlineTwitter/></span></span></th>
                  </tr> 
                </tr>
              </table>
            <hr/>
            <span style={{marginLeft:'65%'}}>
              <button className='button1' style={{marginRight:'4px'}}>Chat</button>
              <Link to="UProfile"><button className='button1'>Profile</button></Link>
            </span>
        </div>
      </div>
    </div>
  )
}

export default Userlist
