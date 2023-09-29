import React,{ useState } from 'react'
import handleSection from '../Utils/handleSection.js';
import './Navbar.css';

const Navbar = (props) => {
  const [openOptions, setOpenOptions] = useState(false);
  
  return (
    <>
      <div id='nav' className={`position-fixed start-0 d-flex align-items-center justify-content-between end-0 ${openOptions? 'activeSp' : ''} ${props.navActive? 'active' : ''}`}>

          <div className='wrapName d-flex align-items-center text-black text-opacity-75'>
            <h4 className={`m-0 position-absolute ms-3 ${openOptions? 'deactive' : ''}`}>Khoirurrozkn</h4>
          </div>

          <div style={{ transition: '1.5s' }} className={`hidePc position-absolute end-0 me-3 ${openOptions? 'deactive' : ''}`}>
            <i onClick={() => setOpenOptions(true)} className="bi bi-list text-black text-opacity-75"></i>
          </div>

          <div className={`wrapOptions ${openOptions? 'active' : ''} d-flex align-items-center justify-content-evenly`}>
          
            <i onClick={() => setOpenOptions(false)} className="bi bi-x-lg position-absolute top-0 end-0 text-black text-opacity-75 hidePc"></i>

            <ul type='none' className='d-flex align-items-center justify-content-center m-0 p-0'>
              <li className='d-flex justify-content-center'>
                <p className={`text-black section position-relative m-0 btn d-flex align-items-center border-0 ${props.section === 1? 'active' : ''}`} 
                  onClick={() => {
                    setOpenOptions(false);
                    handleSection(props.header);
                  }}
                >
                  Home
                </p>
              </li>
  
              <li className='d-flex justify-content-center'>
                <p className={`text-black section m-0 position-relative btn d-flex align-items-center border-0 ${props.section === 2? 'active' : ''}`} 
                  onClick={() => {
                    setOpenOptions(false);
                    handleSection(props.about);
                  }}
                >
                  About
                </p>
              </li>

              <li className='d-flex justify-content-center'>
                <p className={`text-black section m-0 position-relative btn d-flex align-items-center border-0 ${props.section === 3? 'active' : ''}`} 
                  onClick={() => {
                    setOpenOptions(false);
                    handleSection(props.porto);
                  }}
                >
                  Protofolio
                </p>
              </li>

              <li className='d-flex justify-content-center'>
                <p className={`text-black section m-0 position-relative btn d-flex align-items-center border-0 ${props.section === 4? 'active' : ''}`} 
                  onClick={() => {
                    setOpenOptions(false);
                    handleSection(props.contact);
                  }}
                >
                  My Contact
                </p>
              </li>
            </ul>

          </div>

      </div>
    </>
  )
}

export default Navbar