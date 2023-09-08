import React,{ useState } from 'react'
import './Navbar.css';

const Navbar = (props) => {
  const [openOptions, setOpenOptions] = useState(false);
  return (
    <>
      <div id='nav' className={`position-fixed start-0 d-flex align-items-center justify-content-between end-0 ${openOptions? 'activeSp' : ''} ${props.navActive? 'active' : ''}`}>

          <div className='wrapName d-flex align-items-center text-light'>
            <h4 className={`m-0 position-absolute ms-3 ${openOptions? 'deactive' : ''}`}>Khoirurrozkn</h4>
          </div>

          <div style={{ transition: '1.5s' }} className={`hidePc position-absolute end-0 me-3 ${openOptions? 'deactive' : ''}`}>
            <i onClick={() => setOpenOptions(true)} className="bi bi-list text-light text-opacity-75"></i>
          </div>

          <div className={`wrapOptions ${openOptions? 'active' : ''} d-flex align-items-center justify-content-evenly`}>
          
            <i onClick={() => setOpenOptions(false)} className="bi bi-x-lg position-absolute top-0 end-0 text-light text-opacity-75 hidePc"></i>

            <ul type='none' className='d-flex align-items-center justify-content-center m-0 p-0'>
              <li className='d-flex justify-content-center'>
                <a className={`text-light position-relative btn d-flex align-items-center border-0 ${props.section === 1? 'active' : ''}`} 
                    href='#header'
                    onClick={() => setOpenOptions(false)}
                >
                  Home
                </a>
              </li>
  
              <li className='d-flex justify-content-center'>
                <a className={`text-light position-relative btn d-flex align-items-center border-0 ${props.section === 2? 'active' : ''}`} 
                  href='#about'
                  onClick={() => setOpenOptions(false)}
                >
                  About
                </a>
              </li>

              <li className='d-flex justify-content-center'>
                <a className={`text-light position-relative btn d-flex align-items-center border-0 ${props.section === 3? 'active' : ''}`} 
                  href='#porto'
                  onClick={() => setOpenOptions(false)}
                >
                  Protofolio
                </a>
              </li>
  
              <li className='d-flex justify-content-center'>
                <a className={`text-light position-relative btn d-flex align-items-center border-0 ${props.section === 4? 'active' : ''}`} 
                  href='#recent'
                  onClick={() => setOpenOptions(false)}
                >
                  Recent Porto
                </a>
              </li>

              <li className='d-flex justify-content-center'>
                <a className={`text-light position-relative btn d-flex align-items-center border-0 ${props.section === 5? 'active' : ''}`} 
                  href='#contact'
                  onClick={() => setOpenOptions(false)}
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