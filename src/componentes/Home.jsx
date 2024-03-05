import React from 'react'
import students from '../imagenes/studentHome.png'
import { NavLink } from 'react-router-dom'


export const Home = () => {
  return (
    <>
      <div className='home-container'>
        <img className='home-img' src={students}/>
        <span className='home-img-back'></span>
        <span className='home-img-back01'></span>
        <span className='home-img-back02'></span>
        <p className='home-text'>Starts Now!</p>
        <NavLink to='/login' className='home-btn-login'>Login</NavLink>
      </div>
        
       
    </>
  )
}
