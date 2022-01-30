import React from 'react';
import '../styles/Register.css';
import logo from '../img/elogo.png'
import axios from 'axios';
import { Link } from 'react-router-dom';


function Register() {
    const handleSubmit = (user) => {
        user.preventDefault();
        axios.post('/api/user/register', {
            email: user.target.email.value,
            username: user.target.name.value,
            password: user.target.password.value,
        }).then((res) => {
            document.getElementById("userRegisterForm").reset();
            alert("Added User");
        }).catch((err) => {
            document.getElementById("userRegisterForm").reset();
            alert("Email already in use");
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

                <div className="register">
                    <h1>Register</h1>

                    <form action="#" method="post" id="userRegisterForm" onSubmit={handleSubmit}>
                        <input type="text" name="name" placeholder="Username" />
                        <input type="text" name="email" placeholder="Email" />
                        <input type="password" name="password" placeholder="Password" />
                        <input type="submit" value="Register" className="btn-register" />
                    </form>

                    <h5>Already have an account? <Link to='/login'>Login</Link></h5>
                </div>
            </body>
        </>
    );
}

export default Register;
