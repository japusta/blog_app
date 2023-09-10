import React, { useState } from 'react'
import axios from "axios"
import {Link, useNavigate} from "react-router-dom"
const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log(inputs)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/auth/register", inputs);
      
      navigate("/login");
    } 
    catch (err) {
      setError(err.response.data);
    }
  };

  return (
  <div className='auth'>
    <h1 className="auth__head">
      Register
    </h1>
    <form action="" className="auth__form">
      <input type="text" placeholder='username' className="auth__input" name='username' onChange={handleChange}/>
      <input type="email" placeholder='email' className="auth__input" name='email' onChange={handleChange}/>
      <input type="password" placeholder='password' className="auth__input" name='password' onChange={handleChange}/>
      <button className="auth__button" onClick={handleSubmit}>Register</button>
      <p>Something went wrong</p>
      <span>
        Do you have an account?
        <Link to="/login">Login</Link>
      </span>
    </form>
  </div>
  )
}

export default Register