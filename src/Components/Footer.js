import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer-main'>
       <div className='footer-container container'>
          <div className='footer-center'>
                <h2>Social Account</h2>
                <ul>
                  <li className='footer-li'>
                  <NavLink to="/">Facebook</NavLink>
                  </li>
                  <li className='footer-li'>
                  <NavLink to="/">Instagram</NavLink>
                  </li>
                  <li className='footer-li'>
                  <NavLink to="/">Linkdin</NavLink>
                  </li>
                </ul>

          </div>          
       </div>
       <div className='footer-bottom'>
              <span className='copyright-text'>Shubhprajaati17@gmail.com</span>
          </div> 
    </div>
  )
}

export default Footer