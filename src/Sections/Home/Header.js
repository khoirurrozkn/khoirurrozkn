import React,{ useEffect, useRef } from 'react'
import Aos from 'aos';
import handleSection from '../../Utils/handleSection.js';
import handleGsap from '../../Utils/handleGsap';

const Header = (props) => {
  const navHeader = useRef(null);
  const descHeader = useRef(null);

  useEffect(() => {
    // inisialisasi AOS
    Aos.init({
      duration: 1500,
    });

    if (window.innerWidth > 768) {
      handleGsap(navHeader, descHeader, 0, 150, 'top 90%', 'top 20%');
    }
  },[]);

  return (
    <>
      <style>
        {`
        #header .section{
          font-size: 70px;
          font-family: 'Abril Fatface', cursive;
          cursor: pointer;
          transition: 0.5s;
          margin-bottom: -10px;
        }

        #header .section:not(:first-child){
          opacity: 0.75;
        }

        #header span{
          font-family: 'Oswald', sans-serif;
          font-weight: 300;
          letter-spacing: 0.1em;
        }

        #header .spinner-grow{
          opacity: 0;
          transition: ease-out 0.5s;
        }

        #header .circle-1{
          width: 600px;
          height: 600px;
        }

        #header .circle-1-1{
          width: 120%;
          height: 40%;
          top: 20%;
          left: -25%;
          transform: rotate(-20deg);
        }

        #header .circle-1-2{
          width: 100%;
          height: 40%;
          top: 20%;
          left: -25%;
          transform: rotate(30deg);
        }

        #header .circle-2{
          width: 600px;
          height: 600px;
        }

        #header .circle-2-1{
          width: 130%;
          height: 30%;
          top: 40%;
          right: -40%;
          transform: rotate(-15deg);
        }

        #header .circle-2-2{
          width: 110%;
          height: 30%;
          top: 40%;
          right: -40%;
          transform: rotate(-50deg);
        }


        @media only screen and (min-device-width: 768px) and (max-device-width: 1024px){

        }

        @media only screen and (max-device-width: 767px){
          #header .section{
            font-size: 200%;
          }  

          #header span{
            font-size: 14px;
          }

          #header .circle-1{
            width: 70vw;
            height: 50vh;
          }

          #header .circle-1-1{
            width: 130%;
            height: 30%;
            top: 20%;
            left: -30%;
            transform: rotate(-20deg);
          }

          #header .circle-1-2{
            width: 100%;
            height: 30%;
            top: 20%;
            left: -30%;
            transform: rotate(30deg);
          }

          #header .circle-2{
            width: 70vw;
            height: 50vh;
          }

          #header .circle-2-1{
            width: 150%;
            height: 30%;
            top: 30%;
            right: -40%;
            transform: rotate(-20deg);
          }

          #header .circle-2-2{
            width: 130%;
            height: 30%;
            top: 40%;
            right: -40%;
            transform: rotate(30deg);
          }
        }
        `}
      </style>
        <div ref={navHeader} style={{ zIndex: '1' }} className='text-center'>

          <div data-aos="fade-right" style={{marginTop: '-5%'}}>
            <p style={{ opacity: '100' }} className='section text-black position-relative btn border-0 p-0' href='#about'
              onClick={() => {
                handleSection(props.about);
              }}
            >
              KHOIRUR ROZKN
            </p>
          </div>
          <div data-aos="fade-left" data-aos-delay="100" style={{marginTop: '-5%'}}>
            <p className='section text-black position-relative btn border-0 p-0' href='#porto'
              onClick={() => {
                handleSection(props.porto);
              }}
            >
              PORTOFOLIO
            </p>
          </div>
          <div data-aos="fade-right" data-aos-delay="300" style={{marginTop: '-5%'}}>
            <p className='section text-black position-relative btn border-0 p-0' href='#contact'
              onClick={() => {
                handleSection(props.contact);
              }}
            >
              MY CONTACT
            </p>
          </div>

        </div>
        
        <div className='position-absolute top-0 start-0 circle-1'>
          <div className='position-relative w-100 h-100'>
              <div className='position-absolute rounded-circle border border-black border-opacity-75 circle-1-1'></div>
              <div className='position-absolute rounded-circle border border-black border-opacity-75 circle-1-2'></div>
          </div>
        </div>

        <div className='position-absolute bottom-0 end-0 circle-2'>
          <div className='position-relative w-100 h-100'>
              <div className='position-absolute rounded-circle border border-black border-opacity-75 circle-2-1'></div>
              <div className='position-absolute rounded-circle border border-black border-opacity-75 circle-2-2'></div>
          </div>
        </div>
        
        <span ref={descHeader} style={{zIndex: '2'}} className='position-absolute text-center bottom-0 mb-5 text-black text-opacity-75'>
          Moch Khoirur Rozikin <span style={{ userSelect: 'none' }}>/ Freelancer / Web developer</span>
        </span>
    </>
  )
}

export default Header