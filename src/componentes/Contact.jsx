import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import student from '../imagenes/studentContact.png'

export const Contact = () => {

  const refForm = useRef();

  const handleSubmit = (event) =>{
    event.preventDefault();

    const serviceId = 'service_urrli2i';
    const templateId ='template_ztrkly6';
    const apiKey = 'CHQ8V_zWH9-wSXDL0';

    emailjs.sendForm( serviceId, templateId,refForm.current, apiKey)
    .then( res =>console.log(res.text))
    .catch(error =>console.error(error))
  }
  return (
    <>
      <h2 className='contact-title'>Contact us!</h2>
      <img src={student} className='contact-img'/>
      <form ref={refForm} onSubmit={handleSubmit} className='contact-container'>
        <input name='name' type='text' placeholder='Name' required className='contact-input'/>
        <input name='email' type='email' placeholder='englishinstitute@gmail.com' required className='contact-input'/>
        <textarea name='message' type='text' placeholder='Ingrese su consulta' maxLength='600' required className='contact-textarea'/>
        <button className='contact-btn'>Send</button>
      </form>

    </>
  )
}
