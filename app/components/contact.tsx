import React from 'react'
import { MdMail } from 'react-icons/md';
import { FaSquareBehance } from 'react-icons/fa6';
import'../style/contact.css';

const Contact = () => {
  return (
    <div id='contact' className='contact-container'>
     <div className='contact-grid md:grid-cols-2'>
        <div className='contact-space'>
            <h2 className='Contact-Heading' data-aos="zoom-in-up">Let Connect</h2>
            <p className='Contact-text' data-aos="zoom-in-up">
            Drop me a line, give me a call, or send me a message by submitting the form.
            </p>
            <div className='Contact-flex' data-aos="zoom-in-up">
            <MdMail size={30} /> laibaashfaqahmed232@gmail.com 
            </div>
            <div className='Contact-flex' data-aos="zoom-in-up">
            <FaSquareBehance  size={30} /> laibaashfaq22
            </div>
        </div>
        <div className='Contact-space'>
          <div className='form' data-aos="zoom-in-up">
            <label htmlFor="name">Name</label>
            <input type='text'
            className='input-field'
            id='name'/>
          </div>
          <div className='form' data-aos="zoom-in-up">
            <label htmlFor="email">Email</label>
            <input type='text'
            className='input-field'
            id='email'/>
          </div>
          <div className='form' data-aos="zoom-in-up">
            <label htmlFor="msg">Message</label>
            <textarea 
            className='textarea-field'
            id='mg' rows={8}>
              </textarea>
          </div>
          <button className='button' data-aos="zoom-in-up">Send</button>
        </div>
        </div> 
    </div>
  )
}

export default Contact