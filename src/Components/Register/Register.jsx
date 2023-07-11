import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import axios from 'axios';
import register from '../register.jpg'
import '../Login/Login.css'
import { baseURL } from '../../utils/constant';
const Register= () => {
  const navigate=useNavigate();
  const [name, setName] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [error, setError] = useState('');
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${baseURL}/register`, {
        name,
        email,
        password,
        retypePassword,
      });
      setSuccessMessage(response.data.message);
      // Registration successful, perform any necessary actions (e.g., redirect to login)
      console.log(response.data);

      // Clear form inputs
      setName('');
      setEmail('');
      setPassword('');
      setRetypePassword('');
      setTimeout(() => {
        navigate('/Login') // Replace '/other-page' with the desired URL of the page you want to redirect to
      }, 1000);
    } catch (error) {
      if (error.response.status === 400) {
        setError(error.response.data.error);
      } 
      else {
        setError('Something went wrong');
        console.log(error.response);
      }
    }
  };
  return (
    
    <div className='login-container' style={{marginTop:'15vh'}}>
        <div className='register-image'>
            <img src={register}></img>
        </div>
        <div className='login-desc'>
            <span>Join Us !</span>
            <p>To create awesome projects create an account using your personal details</p>
        <form onSubmit={handleRegister}>
          <label htmlFor='mail'>Email:</label>
          <input
            type='email'
            id='mail'
            placeholder='Enter your email address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br/><br/>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            id='name'
            placeholder='Enter your name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <br/><br/>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            placeholder='Enter your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br/><br/>
          <label htmlFor='repassword'>Re-enter Password:</label>
          <input style={{width:'300px'}}
            type='password'
            id='repassword'
            placeholder='Re-enter your password'
            value={retypePassword}
            onChange={(e) => setRetypePassword(e.target.value)}
            required
          />
          <br/>
          <Link to="/Login"><a href=' '>Already have an account? Click Here</a></Link>
          <br /><br />
          {error && <p className='error'>{error}</p>}
          {successMessage && <p className='success'>{successMessage}</p>}
          <input type='submit' value='Register' />
        </form>
        </div>
    </div>
  )
}

export default Register;