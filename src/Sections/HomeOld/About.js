import React from 'react'
import bgHeader from '../../img/bgHeader.webp';
import hikingAbout from '../../img/hikingAbout.webp';
import snorkelingAbout from '../../img/snorkelingAbout.webp';
import './About.css';

const About = () => {
  return (
    <>
      <h1 className='text-center text-black text-opacity-75'>
        A passionate <span>web<br/> developer</span> from Surabaya
      </h1>    

      <div className='wrapBox d-flex flex-wrap justify-content-center align-items-center'>

        <div className='box-1 position-relative text-end me-4'>
          <p  className='m-0 desc'>
            Hello, I'm <b>Moch Khoirur Rozikin.</b>       
              <span style={{ userSelect: 'none' }} className='ms-1'>
                I'm an Freelancer. 
                With my creativity and technical expertise, I strive to provide 
                you with unique and innovative solutions. Welcome to my world of 
                work, and let's embark on an amazing digital journey together.
            </span>
          </p>
        </div>

        <div className='box-2 d-flex justify-content-center position-relative text-light'>
          <div style={{ background: '#EAE0D5' }} className='circle-top position-absolute rounded-circle'></div>
          <div className='scroll'>
            <img src={hikingAbout} className='shadow' alt='Weather App'></img>
            <img src={bgHeader} className='shadow' alt='Weather App'></img>
            <img src={snorkelingAbout} className='shadow' alt='Weather App'></img>
          </div>
          <div style={{ background: '#EAE0D5' }} className='circle-bottom position-absolute rounded-circle'></div>
        </div>

      </div>

      <p style={{ userSelect: 'none', letterSpacing: '1px' }} className='bottom-0 m-0 mt-5 fs-5 text-center w-100 text-light'>
        {/* <a href='https://localhost:3000/khoirurrozkn/#photos' style={{ background: '#5E503F' }} className='text-light btn shadow'> */}
        <a href='https://khoirurrozkn.github.io/khoirurrozkn/#photos' style={{ background: '#5E503F' }} className='text-light btn shadow'>
          <span>View more Photos</span> <i class="bi bi-box-arrow-up-right ms-2"></i>
        </a>
      </p>
    </>
  )
}

export default About