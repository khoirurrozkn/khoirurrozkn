import React,{ useState } from 'react'
import handleSection from './../Utils/handleSection.js';

const Navbar = (props) => {
  const [openOptions, setOpenOptions] = useState(false);
  
  return (
    <>
    <style>
      {`
        #nav{
          height: 9vh;
          z-index: 900;
          top: -100%;
          transition: ease 1s;
          padding: 0 60px;
          backdrop-filter: blur(5px);
        }

        #nav.active{
          top: 0;
        }

        #nav h4{
          font-family: 'Abril Fatface', cursive;
          letter-spacing: 1px;
          font-weight: 500;
          transition: 1.5s;
          left: 0;
          font-size: 25px;
        }

        #nav .section{
          letter-spacing: 1.5px;
          font-weight: 200;
          transition: 1s;
          font-size: 18px;
        }

        #nav .section:hover{
          transform: scale(1.2);
        }

        #nav li:not(:last-child){
          margin-right: 30px;
        }

        @media only screen and (min-device-width: 768px) and (max-device-width: 1024px){
          #nav.activeSp{
            height: 100vh;
            background-color: #EAE0D5;
          }

          #nav h4{
            margin-left: 5% !important;
          }

          #nav h4.deactive{
            left: -100%;
          }

          #nav div.deactive{
            right: -100% !important;
          }

          #nav .wrapOptions{
            position: fixed;
            z-index: 999;
            width: 100vw;
            height: 100vh;
            bottom: 100%;
            right: 0;
            opacity: 0;
            transition: ease 1s;
          }

          #nav .wrapOptions.active{
            bottom: 0;
            opacity: 100;
          }

          #nav .section{
            font-size: 22px;
          }

          #nav ul{
            display: block !important;
          }

          #nav li:not(:last-child){
            margin-right: 0px;
            margin-bottom: 30px;
          }

          #nav .bi-list{
            margin-right: 20px;
            font-size: 220%;
          }

          #nav .bi-x-lg{
            margin-top: 4%;
            margin-right: 4.5%;
            font-size: 160%;
          }
        }

        @media only screen and (max-device-width: 767px){
          #nav.activeSp{
            height: 100vh;
            background-color: #EAE0D5;
          }

          #nav h4.deactive{
            left: -100%;
          }

          #nav div.deactive{
            right: -100% !important;
          }

          #nav .wrapOptions{
            position: fixed;
            z-index: 999;
            width: 100vw;
            height: 100vh;
            bottom: 100%;
            right: 0;
            opacity: 0;
            transition: ease 1s;
          }

          #nav .wrapOptions.active{
            bottom: 0;
            opacity: 100;
          }

          #nav .section{
            font-size: 130%;
          }

          #nav ul{
            display: block !important;
          }

          #nav li:not(:last-child){
            margin-right: 0px;
            margin-bottom: 5%;
          }

          #nav .bi-list{
            font-size: 190%;
          }

          #nav .bi-x-lg{
            margin-top: 4%;
            margin-right: 4.5%;
            font-size: 160%;
          }
        }
      `}
    </style>
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