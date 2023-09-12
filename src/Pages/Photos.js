import React, { useEffect, useRef } from 'react';
import hiking1 from '../img/bromoPhotos.webp';
import hiking2 from '../img/hikingAbout.webp';
import diving1 from '../img/snorkelingAbout.webp';
import diving2 from '../img/diving2.webp';
import gsap from 'gsap';
import Aos from 'aos';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import handleGsap from '../Utils/handleGsap';
import './Photos.css';

gsap.registerPlugin(ScrollTrigger);

const Photos = () => {
  const greetings = useRef(null);
  const titleHiking1 = useRef(null);
  const titleHiking2 = useRef(null);
  const img3 = useRef(null);
  const content = useRef(null);

  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  },[])

  useEffect(() => {
    if (window.innerWidth > 768) {
      handleGsap(greetings, content, 0, 300, 'top 100%', 'top 0%');
      handleGsap(titleHiking1, titleHiking1, 0, 100, 'top 30%', 'top -50%');
      handleGsap(titleHiking2, img3, 0, 100, 'top 30%', 'top -20%');
    }

  },[]);

  return (
    <>
      <div id='photos' className='overflow-hidden'>

        {/* <a href='http://localhost:3000/khoirurrozkn/' className='text-black'> */}
        <a href='https://khoirurrozkn.github.io/khoirurrozkn/' className='text-black'>
          <i style={{ zIndex: '999' }} class="bi bi-arrow-left position-fixed top-0 left-0 fs-4 bg-black text-light bg-opacity-75 rounded-4 shadow"></i>
        </a>

        <div className='header position-relative overflow-hidden vh-100'>
          <div className='position-absolute w-50 h-100 d-flex align-items-center justify-content-center'>
            <h1 ref={greetings}>
              <span>P</span>
              <span>H</span>
              <span>O</span>
              <span>T</span>
              <span>O</span>
              <span>S</span>
            </h1>
          </div>

        </div>

        <div ref={content} style={{ background: '#C6AC8F' }} className='content position-relative pb-5 overflow-hidden'>
          <div className='w-100 d-flex flex-wrap justify-content-center align-items-center position-relative overflow-hidden'>
            <div className='position-absolute border left-0 circle-1 shadow rounded-circle'></div>
            <div ref={titleHiking1} className='title-hiking desc-photos-1 text-light'>
                <p>
                  Hiking
                </p>
                <p className='m-0'>
                  Photos
                </p>
            </div>
            <img data-aos='fade-up' style={{ zIndex: '2' }} className='img-photos-1 position-relative shadow-lg mt-5' src={hiking1} alt='My Photos'></img>
          </div>
          <div className='w-100 mt-4 d-flex justify-content-end position-relative'>

            <div className='position-absolute border circle-2 shadow rounded-circle'></div>

            <img style={{ zIndex: '2' }} data-aos='fade-up' className='img-photos-2 position-relative shadow-lg' src={hiking2} alt='My Photos'></img>
          </div>
          <div className='w-100 mt-5 d-flex flex-wrap justify-content-evenly align-items-center position-relative'>
            <div className='position-absolute border circle-3 shadow rounded-circle'></div>
              <div ref={titleHiking2} className='desc-photos-3 text-end text-light'>
                  <p>
                    Snorkeling
                  </p>
                  <p className='m-0'>
                    Photos
                  </p>
                </div>
              <img style={{ zIndex: '2' }} ref={img3} data-aos='fade-up' className='img-photos-3 position-relative shadow-lg' src={diving1} alt='My Photos'></img>
            </div>
          <div className='w-100 mt-4 d-flex justify-content-center'>
            <img style={{ zIndex: '2' }} data-aos='fade-up' className='img-photos-4 position-relative shadow-lg' src={diving2} alt='My Photos'></img>
          </div>


          <div className='circle-4 position-absolute rounded-circle shadow'></div>
        </div>

      </div>
    </>
  )
}

export default Photos