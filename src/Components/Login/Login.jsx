import React, { useState ,useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import login from '../login.jpg'
import { baseURL } from '../../utils/constant';
import './Login.css'
import { AuthContext } from '../../AuthContext.js';
const Login = ({handleLogin}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate=useNavigate();
  const { updateUserEmail } = useContext(AuthContext);
  const{emailprint}=useContext(AuthContext);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post(`${baseURL}/login`, { email, password });
        
        const userEmail=response.data.emailprint;
        setSuccessMessage(response.data.message);
        // Login successful, perform any necessary actions
        console.log(userEmail);
        handleLogin(userEmail);
        console.log(userEmail);
        // Clear form inputs
        setEmail('');
        setPassword('');
        setTimeout(() => {
          navigate('/Dashboard') // Replace '/other-page' with the desired URL of the page you want to redirect to
        }, 1000);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setError('User not found');
        } else if (error.response.status === 401) {
          setError('Invalid password');
        } else {
          setError('Something went wrong');
        }
      }
  };

  return (
    <div className='login-container'>
        <div className='login-image'>
            <img src={login}></img>
        </div>
        <div className='login-desc'>
            <span>Welcome back !</span>
            <p>To keep connected with us please login using your email address and password</p>
            <form onSubmit={handleSubmit}>
          <label htmlFor='mail' style={{paddingRight:'50px'}}>Email:</label>
          <input
            type='email'
            id='mail'
            placeholder='Enter your email address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br/>
          <br/>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            placeholder='Enter your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br/>
          <a href=' '>Forgot password?</a>
          <br /><br />
          <Link to="/Dashboard"> Continue without Login </Link>

          {error && <span className='error'>{error}</span>}<br/>
          {successMessage && <p className='success'>{successMessage}</p>}
          <input type='submit' value='Login Now' />
          <Link to="/Register"><button>Create Account</button></Link>
        </form>
        
            
        </div>
    </div>
  )
}

export default Login
