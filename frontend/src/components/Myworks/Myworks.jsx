import React from 'react'
import './Myworks.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'
import arrow_icon from '../../assets/arrow_icon.svg'




const Myworks = () => {
  return (
    <>
        <div className="mywork" id='portfolio'>
            <div className="mywork-title">
                <h1>My Latest Work</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="mywork-container">
                
                    <img src={profile_img} alt="" />
                    <img src={profile_img} alt="" />
                    <img src={profile_img} alt="" />
                    
               
            </div>
            <div className="mywork-showmore">
                <p>Show more</p>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
    </>
  )
}

export default Myworks