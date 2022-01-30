import React from 'react';
import '../styles/Register.css';
import logo from '../img/elogo.png'
import { Link } from 'react-router-dom';

function Register() {
  return (
    <>
        <body>
            <div className='navbar'>
                <div className='logo1'>
                <img src={logo} alt='logo'/>
                </div>
            </div>

            <div className="register">
                <h1>Register</h1>

                <form action="#" method="post">
                    <input type="text" name="name" placeholder="Username"/>
                    <input type="text" name="email" placeholder="Email"/>
                    <input type="number" name="phone" placeholder="Phone number"/>
                    <input type="password" name="password" placeholder="Password"/>
                    <input type="submit" value="Register" className="btn-register" />
                </form>

                <h5>Already have an account? <Link to='/login'>Login</Link></h5>
            </div>
        </body>
    </>
  );
}

export default Register;
