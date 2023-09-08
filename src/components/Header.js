import React,{ useEffect } from 'react'
import './Header.css'
import Aos from 'aos';
import bgHeader from '../img/bgHeader.jpg';

const Header = () => {

  useEffect(() => {
    // inisialisasi AOS
    Aos.init({
      duration: 1500,
    });
  },[]);

  return (
    <>
    
        <div style={{ zIndex: '1' }} className='text-center'>
          <div data-aos="fade-right" style={{marginTop: '-5%'}}>
            <a className='text-light position-relative btn border-0 p-0' href='#about'>
              KHOIRUR ROZKN
            </a>
          </div>
          <div data-aos="fade-left" data-aos-delay="200" style={{marginTop: '-5%'}}>
            <a className='text-light position-relative btn border-0 p-0' href='#porto'>
              PORTOFOLIO
            </a>
          </div>
          <div data-aos="fade-right" data-aos-delay="400" style={{marginTop: '-5%'}}>
            <a className='text-light position-relative btn border-0 p-0' href='#recent'>
              RECENT PORTO
            </a>
          </div>
          <div data-aos="fade-left" data-aos-delay="600" style={{marginTop: '-5%'}}>
            <a className='text-light position-relative btn border-0 p-0' href='#contact'>
              MY CONTACT
            </a>
          </div>
        </div>
        
        
        <span className='position-absolute text-center bottom-0 mb-5 text-light text-opacity-75'>
          Moch Khoirur Rozikin <span style={{ userSelect: 'none' }}>/ Freelancer / Web developer</span>
        </span>

        <div className='img img-1 position-absolute'>
          <img data-aos="fade-down-right" data-aos-delay="1200" src={bgHeader} alt='1' width='100%'/>
        </div>

        <div className='img img-2 position-absolute'>
          <img data-aos="fade-down-left" data-aos-delay="1200" src={bgHeader} alt='1' width='100%'/>
        </div>
        
    
    </>
  )
}

export default Header