import React, { useRef, useState } from 'react'
import './Navbar.css'
import under_line from '../../assets/nav_underline.svg'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
  const[menu,setMenu]=useState('home')
  const menuRef=useRef()

  const openMenu=()=>{
    menuRef.current.style.right='0';
  }

  const closeMenu=()=>{
    menuRef.current.style.right='-350px';
  }
  return (
    <>
        <div className="navbar">
            <h1>Mujeeb Rahman I K</h1>
            <img src={menu_open} alt="" className='nav-mob-open' onClick={openMenu} />
            <ul className="nav-menu" ref={menuRef}>
              <img src={menu_close} alt="" className="nav-mob-close" onClick={closeMenu} />
                <li><AnchorLink href='#about' className='anchor-link'  offset={50}><p onClick={()=>setMenu('about')}>About me</p></AnchorLink> {menu==='about'?<img src={under_line} alt="" />:<></>}</li>
                <li><AnchorLink href='#services' className='anchor-link'  offset={50}><p onClick={()=>setMenu('services')}>Services</p> </AnchorLink>{menu==='services'?<img src={under_line} alt="" />:<></>}</li>
                <li><AnchorLink href='#portfolio' className='anchor-link'  offset={50}><p onClick={()=>setMenu('portfolio')}>Portfolio</p></AnchorLink> {menu==='portfolio'?<img src={under_line} alt="" />:<></>}</li>
                <li><AnchorLink href='#contact' className='anchor-link'  offset={50}><p onClick={()=>setMenu('contact')}>Contact</p></AnchorLink> {menu==='contact'?<img src={under_line} alt="" />:<></>}</li>
            </ul>
            <AnchorLink href='#contact' className='anchor-link'  offset={50}><div className="nav-connect">Connect With Me</div></AnchorLink>
        </div>
      
    </>
  )
}

export default Navbar
