import './App.css';
import Home from '../src/Components/Home'
import {  Route, Routes } from 'react-router-dom';
import About from './Components/About';
import Skills from './Components/Skills';
import Navbar from './Components/navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <Navbar/>
        <Routes>
          <Route  path='/' element={<Home/>} />
          <Route path='about' element={<About/>}/>
          <Route path='skill' element={<Skills/>} />
        </Routes>
        <Footer/>

    </>
  );
}

export default App;

