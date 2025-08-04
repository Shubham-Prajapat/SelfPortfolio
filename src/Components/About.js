import React from 'react'
import aboutImg from '../assest/Shubham.jpg'
const About = () => {
  return (
    <div className='about-main'>
        <div className='about-cntainer container'>
          <div className='about-box'>
              <div className='content-box'>
                 <h2 className='title-heading'>About Me</h2>
                 <p className='about-des'>
                  I'm a Shopify and Frontend Developer with 2 Years of hands-on experience in building 
                  customized, conversion-focused eCommerce Stores. I specialize in Shopify theme development, Liquid
                  customization, and responsive user interfaces using HTML, CSS, Javascript, and React Passionate about creating
                  pixel-perfect storefronts, I've worked on multiple client projects across different industries. I thrive in clean , maintainable code and enjoy solving UI/UX chanllenges that improve store performance and customer experience.

                 </p>
              </div>
              <div className='image-box'>
                <img src={aboutImg} alt='about_image' className='about__image'/>
              </div>
          </div>
        </div>
    </div>
  )
}

export default About