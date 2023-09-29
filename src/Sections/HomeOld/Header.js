import React,{ useEffect, useRef } from 'react'
import Aos from 'aos';
import handleSection from '../../Utils/handleSection.js';
import handleGsap from '../../Utils/handleGsap';
import './Header.css';

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