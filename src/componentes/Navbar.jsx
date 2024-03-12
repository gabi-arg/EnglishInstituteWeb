import { useState, useEffect }from 'react'
import Logo from '../imagenes/logos/logosinfondo2.png'
import {NavLink } from 'react-router-dom'

export const Navbar = () => {

  const [ clicked, setClicked ]= useState(false)

  const handleClick = () => {
    // Cambiar el estado del clic solo si el ancho de la ventana es menor o igual a 768px
    if (window.innerWidth <= 768) {
      setClicked(!clicked);
    }
  };

  // Función para cerrar el menú si el ancho de la ventana es mayor que 768px
  const closeMenu = () => {
    if (window.innerWidth > 768) {
      setClicked(false);
    }
  };

  // Listener para cerrar el menú cuando se redimensiona la ventana
  window.addEventListener('resize', closeMenu);

  

  return (
    <>
        <div className='navbar'>
          <NavLink to='/home'> <img src={Logo} className='navbar-logo-img'/></NavLink>
          <div onClick={handleClick} className={`icon nav-icon-5  navbar-burguer ${clicked ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`navbar-links ${clicked ? 'active' : ''}`}>
            <NavLink onClick={handleClick} to='/courses'> Courses </NavLink>
            <NavLink onClick={handleClick} to='/testimonial'> Testimonials </NavLink>
            <NavLink onClick={handleClick} to='/contact'> Contact </NavLink>
            <NavLink onClick={handleClick} to='/signin'> Sign In </NavLink>
          </div>
        </div>


    </>
  )
}
