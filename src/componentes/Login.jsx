import React from 'react'
import logo from '../imagenes/logos/logo.png'
export const Login = () => {
  return (
    <>
      <h3 className='login-title'>Let's get started now!</h3>
      <form className='login-container'>
        <img src={logo} className='login-logo'/>
        <div className='login-input'>
          <input type='email' placeholder='usuario@gmail.com' />
          <input type='password' placeholder='********'/>
          <div><input type='checkbox'/><label>I'm Student</label></div>
          <div><input type='checkbox'/><label>I'm Teacher</label></div>
        </div>
        <button className='login-submit'>Register</button>
      </form>
      






    </>
  )
}
