import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

const Login = () => {
  return (
    <div className="login-root">
      <div className="login-text">LOGIN</div>

      <input type="text" className="login-input" placeholder='EMAIL ID/ PHONE NUMBER' />

      <input type="password" className="login-input" placeholder='PASSWORD' />

      <button className='login-button'>LOGIN</button>

      <div className="login-bottom">Don't Have an Account? <Link rel="stylesheet" href="/signup">Signup Here</Link></div>
    </div>
  )
}

export default Login
