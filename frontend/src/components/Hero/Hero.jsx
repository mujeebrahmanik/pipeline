import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <>
      <div className="hero" id='home'>
        <img src={profile_img} alt="" srcset="" />
        <h1><span>I'm Mujeeb Rahman I K , </span> Fullstack Developer based in India.</h1>
        <p>I am a Fullstack Developer from India, with 4 years of Experience.</p>
        <div className="hero-action">
            <AnchorLink href='#contact' className='anchor-link'  offset={50}><div className="hero-connect">Connect With Me</div></AnchorLink>
            <div className="hero-resume">My Resume</div>
        </div>
      </div>
    </>
  )
}

export default Hero
