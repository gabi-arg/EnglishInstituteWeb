import React from 'react'
import students from '../imagenes/student2.png'


export const Home = () => {
  return (
    <>
      <div className='home-container'>
        <img className='home-img' src={students}/>
        <span className='home-img-back'></span>
        <span className='home-img-back01'></span>
        <span className='home-img-back02'></span>
        <p className='home-text'>Matriculas <br/> Abiertas <br/> 2024</p>
      </div>
        
       
    </>
  )
}
