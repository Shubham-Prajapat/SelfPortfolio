import React from 'react'
import Html from '../assest/html.png'
import Css from '../assest/css.png'
import JS from '../assest/js.png'
import reimg from  '../assest/html.png'
import shopi from '../assest/css.png'

const Skills = () => {
  return (
    <div className='skill-main'>
      <div className='skill-container container'>
        <div className='container-html'>
            <div className='text-column'>
                <h1>Html</h1>
                <p>html is language</p>
            </div>
            <div className='image-column'>
              <img className='lang-img' src={Html} alt='html'/>
            </div>
          </div>
          <div className='container-css'>
            <div className='text-column'>
                <h1>Css</h1>
                <p>html is language designing</p>
            </div>
            <div className='image-column'>
              <img className='lang-img' src={Css} alt='Css'/>
            </div>
          </div>
          <div className='container-js'>
            <div className='text-column'>
                <h1>Javascript</h1>
                <p>Javascript is language </p>
            </div>
            <div className='image-column'>
              <img className='lang-img' src={JS} alt='js'/>
            </div>
          </div>
          <div className='container-react'>
            <div className='text-column'>
                <h1>React</h1>
                <p>React is language </p>
            </div>
            <div className='image-column'>
              <img className='lang-img' src={reimg} alt='react'/>
            </div>
          </div>
          <div className='container-shopify'>
            <div className='text-column'>
                <h1>Shopify</h1>
                <p>Shopi is language </p>
            </div>
            <div className='image-column'>
              <img className='lang-img' src={shopi} alt='shopify'/>
            </div>
          </div>
      </div>   
    </div>
  )
}

export default Skills