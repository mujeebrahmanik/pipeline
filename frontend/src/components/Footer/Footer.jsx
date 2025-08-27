import React from 'react'
import './Footer.css'
import user_icon from '../../assets/user_icon.svg'


const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-top">
          <div className="footer-top-left">
            <h1>Mujeeb Rahman I K</h1>
            <p>Im a fullstack developer based in India & UAE.</p>
          </div>

          <div className="footer-top-right">
            <div className="footer-email-input">
              <img src={user_icon} alt="" />
              <input type="email" name='email' placeholder='Enter your email'/>
            </div>
            <div className="footer-subscribe">Subscribe</div>
          </div>
        </div>
        <hr />
        <div className="footer-bottom">
          <div className="footer-bottom-left">&copy; 2025 Mujeeb Rahman I K . All rights reserved.</div>
          <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect With me</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer