import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'


const About = () => {
  return (
    <>
        <div className="about" id='about'>
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" srcset="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi minima, facilis excepturi voluptatum doloremque fugiat provident eos non asperiores neque impedit iusto, et aspernatur illo voluptate nulla id quibusdam tempora.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, dolore itaque veritatis reprehenderit nostrum quas enim quod, delectus similique commodi quibusdam ea! Nihil, doloribus! A explicabo sapiente vel quam. Architecto?</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML & CSS</p> <hr style={{width:"50%"}}/>
                        </div>
                        <div className="about-skill">
                            <p>React JS</p> <hr style={{width:"70%"}}/>
                        </div>
                        <div className="about-skill">
                            <p>Django</p> <hr style={{width:"75%"}}/>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="about-achievements">
                        <div className="about-achievement">
                            <h1>3 +</h1>
                            <p>YEARS OF EXPERIENCE</p>
                        </div>
                        <hr />
                        <div className="about-achievement">
                            <h1>20 +</h1>
                            <p>PROJECTS COMPLETED</p>
                        </div>
                        <hr />
                        <div className="about-achievement">
                            <h1>7 +</h1>
                            <p>TECHNOLOGY STACKS</p>
                        </div>
                        
                    </div>
        </div>
    </>
  )
}

export default About