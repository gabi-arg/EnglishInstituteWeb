import React from 'react'
import Logo from '../imagenes/logos/logosinfondo2.png'
import {NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
        <div className='navbar'>
          <NavLink to='/home'> <img src={Logo} className='navbar-logo-img'/> </NavLink>
          <div className='navbar-links'>
            <NavLink to='/courses'> Courses </NavLink>
            <NavLink to='/testimonial'> Testimonials </NavLink>
            <NavLink to='/contact'> Contact </NavLink>
            <NavLink to='/login'> Login </NavLink>
          </div>
        </div>


    </>
  )
}
