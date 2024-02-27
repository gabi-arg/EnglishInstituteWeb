import React from 'react'
import testimonials from '../../testimonial.js'
export const Testimonials = () => {
  return (
    <>
      <h1 className='testimonial-title'>Our clients say...</h1>
    <div className='testimonials'>
      {
        testimonials.map(idem => (
          <div  className='testimonial-container' key={idem.id}>
            <img src={idem.photo} className='testimonial-img' alt={idem.name} />
            <div className='testimonial-text-container'>
              <p className='testimonial-testimomials'>{idem.testimonial}</p>
              <h4 className='testimonial-name'>{idem.name}</h4>
            </div>
          </div>
        ))
      }
    </div>
    </>
  )
}
