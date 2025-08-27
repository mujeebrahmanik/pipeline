import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import location_icon from '../../assets/location_icon.svg'





const Contact = () => {
  return (
    <>
        <div className="contact" id='contact'>
            <div className="contact-title">
                <h1>Get in Touch</h1>
                <img src={theme_pattern} alt="" />
            </div>

            <div className="contact-container">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'm currently available to take on new projects, so feel free to contact</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                        <img src={mail_icon} alt="" /> <p>mujeebrahmanikamaal@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                        <img src={call_icon} alt="" />   <p>6238925123</p> 
                        </div>
                        <div className="contact-detail">
                         <img src={location_icon} alt="" /> <p>abcd</p>  
                        </div>
                    </div>
                </div>

                <form action="" className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter your name' name='name'/>

                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter your email' name='email'/>

                    <label htmlFor="">Your Message</label>
                    <textarea placeholder='Enter your message' name='message' rows={8}/>

                    <button type="submit" className='contact-submit'>Submit now</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default Contact