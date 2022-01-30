import React, { useEffect } from 'react';
import axios from 'axios';
import '../styles/Login.css';
import logo from '../img/elogo.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';

const Login = (props) => {
  const navigate = useNavigate();
  const handleSubmit = (user) => {
    user.preventDefault();
    axios.post('/api/user/login', {
      email: user.target.email.value,
      username: user.target.name.value,
      password: user.target.password.value,
    }).then((res) => {
      document.getElementById("userLoginForm").reset();
      props.setUser(true, res.data._id);
      alert("Success");
      navigate('/');

    }).catch((err) => {
      document.getElementById("userLoginForm").reset();
      alert("Email/Password Wrong!");
    })


  }

  return (
    <>
      <body>
        <div className='navbar'>
          <div className='logo1'>
            <img src={logo} alt='logo' />
          </div>
        </div>

        <div className="sign-in">
          <h1>Sign In</h1>

          <form action="#" method="post" id="userLoginForm" onSubmit={handleSubmit}>
            <input type="text" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            <input type="submit" value="Sign In" className="btn-sign-in" />
          </form>

          <h5>Don't have an account? <Link to='/register'>Register</Link></h5>
        </div>
      </body>
    </>
  );
}

export default Login;
