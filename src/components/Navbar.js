import React, { useState } from 'react'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Navbar.css';

const Navbar = () => {
  const [ toggle, setToggle ] = useState(false);

  const handleToggle = () => {
    if( toggle ) setToggle(false);
    else setToggle(true);
  }
  
  return (
    <>
    <div style={{zIndex: '999'}} id='navbar' className='container-fluid d-flex justify-content-between align-items-center position-fixed top-0'>
      <div>
        <h4 className='m-0'><b>Khoirurrozkn</b></h4>
      </div>
      <div>
        <FontAwesomeIcon onClick={() => handleToggle()} className='icon' icon={faBars} />
        <div className={`wrapNav ${toggle && 'active'} d-flex align-items-center justify-content-center`}>
          <FontAwesomeIcon onClick={() => handleToggle()} className='icon position-absolute top-0 end-0 text-light m-4 fs-2' icon={faXmark} />
          <ul type='none' className='m-0 p-0'>
            <li><a href='#home'><b>Home</b></a></li>
            <li><a href='#about'><b>About me</b></a></li>
            <li><a href='#porto'><b>Portofolio</b></a></li>
            <li><a href='#contact'><b>Contact</b></a></li>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar