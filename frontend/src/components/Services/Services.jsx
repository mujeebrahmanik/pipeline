import React from 'react'
import './Services.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import arrow_icon from '../../assets/arrow_icon.svg'


const Services = () => {
  return (
    <>
        <div className="services" id='services'>
            <div className="service-title">
                <h1>My Services</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="service-container">
                <div className="service-item">
                    <h3>01</h3>
                    <h2>Web Development</h2>
                    <p>Web developing in fair price using wordpress,python,django,react</p>
                    <div className="service-readmore">
                        <p>Read more</p>
                        <img src={arrow_icon} alt="" />
                    </div>
                </div>
                <div className="service-item">
                    <h3>01</h3>
                    <h2>Web Development</h2>
                    <p>Web developing in fair price using wordpress,python,django,react</p>
                    <div className="service-readmore">
                        <p>Read more</p>
                        <img src={arrow_icon} alt="" />
                    </div>
                </div>

                 <div className="service-item">
                    <h3>01</h3>
                    <h2>Web Development</h2>
                    <p>Web developing in fair price using wordpress,python,django,react</p>
                    <div className="service-readmore">
                        <p>Read more</p>
                        <img src={arrow_icon} alt="" />
                    </div>
                </div>

                
            </div>
        </div>
    </>
  )
}

export default Services