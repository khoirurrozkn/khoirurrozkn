import React from 'react'
import './Navbar.css';

const Navbar = (props) => {
  return (
    <>
      <div id='nav' className={`position-fixed start-0 d-flex align-items-center justify-content-between border end-0 ${props.navActive? 'active' : ''}`}>

          <div className='wrapName text-light border'>
            <h4 className='m-0'>Khoirurrozkn</h4>
          </div>

          <div className='hidePc'>
            <i class="bi bi-list"></i>
          </div>

          <div className='wrapOptions d-flex align-items-center justify-content-evenly border border-danger'>

            <ul type='none' className='d-flex align-items-center justify-content-center border border-success m-0 p-0'>
              <li className='d-flex justify-content-center'>
                <a className={`text-light position-relative btn d-flex align-items-center border-0 ${props.section === 1? 'active' : ''}`} 
                    href='#header'
                >
                  Home
                </a>
              </li>
  
              <li className='d-flex justify-content-center'>
                <a className={`text-light position-relative btn d-flex align-items-center border-0 ${props.section === 2? 'active' : ''}`} 
                  href='#about'
                >
                  About
                </a>
              </li>

              <li className='d-flex justify-content-center'>
                <a className={`text-light position-relative btn d-flex align-items-center border-0 ${props.section === 3? 'active' : ''}`} 
                  href='#porto'
                >
                  Protofolio
                </a>
              </li>
  
              <li className='d-flex justify-content-center'>
                <a className={`text-light position-relative btn d-flex align-items-center border-0 ${props.section === 4? 'active' : ''}`} 
                  href='#recent'
                >
                  Recent Porto
                </a>
              </li>

              <li className='d-flex justify-content-center'>
                <a className={`text-light position-relative btn d-flex align-items-center border-0 ${props.section === 5? 'active' : ''}`} 
                  href='#contact'
                >
                  My Contact
                </a>
              </li>
            </ul>

          </div>

      </div>
    </>
  )
}

export default Navbar