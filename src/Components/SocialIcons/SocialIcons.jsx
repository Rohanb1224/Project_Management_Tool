import React from 'react'
import './SocialIcons.css'
import {AiOutlineGoogle} from 'react-icons/ai'
import {GrFacebookOption} from 'react-icons/gr'
import {AiOutlineTwitter} from 'react-icons/ai'
const SocialIcons = () => {
  return (
    <div>
        <span className='social-icons-profile'><span className='social-icons-google'><AiOutlineGoogle/></span><span className='social-icons-fb'><GrFacebookOption/></span><span  className='social-icons-twit'><AiOutlineTwitter/></span></span>
    </div>
  )
}

export default SocialIcons