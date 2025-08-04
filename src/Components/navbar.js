import React,{useState , useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import Hamburger from './Humburger';
import logo from '../assest/sp-logo-bg.png'
const Navbar = () => {
  const[ isSticky , setIsSticky]  = useState(false);
  useEffect(() =>{
    const handlescroll = () =>{
        const scrollY = window.scrollY;
        setIsSticky(scrollY > 0);
    }
    window.addEventListener('scroll' , handlescroll);
    return () =>{
        window.removeEventListener('scroll' , handlescroll);
    };
  } , []);
  return (
    <div className={`main-navbar cust_navbar ${isSticky ? 'sticky' : ' '}`}>
        <div id='cust-header' className='header'>
        <Hamburger/>
        <NavLink to="/">
            <div className='logo-column'>
                <img className="logo" src={logo} alt="logo-image"  />
            </div>
            </NavLink>
             <ul className='navigation'>
              <li>
              <NavLink to="/">Home</NavLink>
              </li>
              <li>
              <NavLink to="about">About</NavLink>
              </li>
              <li>
              <NavLink to="skill">Skills</NavLink>  
              </li>       
               </ul>    
               <div className='cus-icon'>
                </div>        
        </div>
    </div>
  )
}

export default Navbar;

