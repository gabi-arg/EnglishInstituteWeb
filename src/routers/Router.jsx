import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from '../componentes/Home'
import { Contact } from '../componentes/Contact'
import { Testimonials } from '../componentes/Testimonials'
import { Error } from '../componentes/Error'
import { Login } from '../componentes/Login'
import { Courses } from '../componentes/Courses'
import { Navbar } from '../componentes/Navbar'

export const Router = () => {
  return (
        <>
          <div className='background'>
            <Navbar/>
            <div className='home-container'>

            </div>
        </div>
         
        
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/testimonial' element={<Testimonials/>}/>
            <Route path='/courses' element={<Courses/>}/>
            <Route path='/*' element={<Error/>}/>
            

        </Routes>
        </>
  )
}
