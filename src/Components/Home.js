import React from 'react'
import ImageBanner from '../Components/ImageBanner'
import Skills from './Skills'
import About from '../Components/About';
import Experiance from './Experiance';
import Education from './Education';
import Project from './Project';

const Home = () => {
  return (
    <>
      <ImageBanner/>
      <About/>
      <Skills/>
      <Project/>
      <Experiance/>
      <Education/>
    </>
  )
}

export default Home