import React ,{useState , useRef} from 'react'
import { NavLink } from 'react-router-dom';

const Hamburger = () => {

    const contRef = useRef(null);
    const [isOpen , setIsOpen] = useState(false);
    const  toggleDisplay = (e) =>{
        e.preventDefault()
      setIsOpen((prevOpen)=> !prevOpen)
    };

  return (
    <div className='ham'>
         <div className={`cont ${isOpen ? 'open' : ''}`} ref={contRef} >
                     <NavLink id='hamburger' className='burger' onClick={toggleDisplay}></NavLink>
                     <ul>
                        <li>
                        <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li>
                        <NavLink className="nav-link" aria-current="page" to="/about">about</NavLink>
                        </li>                     
                        <li>
                            <NavLink className="nav-link" aria-current="page" to="/skill">Skills</NavLink>
                        </li>
                     </ul>
                  </div>
    </div>
  )
}

export default Hamburger;