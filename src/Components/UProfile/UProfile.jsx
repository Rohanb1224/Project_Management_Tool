import React from 'react'
import profile from '../profile.png'
import profile2 from '../profile2.jpg'
import SocialIcons from '../SocialIcons/SocialIcons'
import './UProfile.css'
import Taskbar from '../taskbar/Taskbar';
const UProfile = ({ userEmail }) => {
  return (
    <div className='UProfile-container'>
      <Taskbar userEmail={userEmail}/>
        <div className='left-container'>
          <img src={profile2} alt=""></img>
          <h1>Name</h1>
          <h5>Description</h5>
          <span className='social-icons-profile'><SocialIcons/></span>
        </div>
        <div className='right-container'>
          <span><h2 style={{marginLeft: '10%'}}>Name is working on these projects</h2></span>
          <li>
            <ul>Project 1</ul>
            <ul>Project 1</ul>
            <ul>Project 1</ul>
            <ul>Project 1</ul>
          </li>
          <span><h2 style={{marginLeft: '10%'}}>Name is in these teams</h2></span>
          <li>
            <ul>Team 1</ul>
            <ul>Team 1</ul>
            <ul>Team 1</ul>
            <ul>Team 1</ul>
          </li>
        </div>
        <div className='last-container'>
          <h4>Short bio</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus reprehenderit dolores ipsum quae in, doloremque magnam numquam laborum, ducimus quas nostrum nobis eum perspiciatis accusamus. Molestiae dolorem ab natus cupiditate.</p>
          <span> City name</span>
        </div>
    </div>
  )
}

export default UProfile