import React, { useEffect } from 'react';
import './Porto.css';
import Aos from 'aos';
import gsap from 'gsap';
import bgHeader from '../img/weatherapp.jpg';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Porto = () => {

  useEffect(() => {
    // inisialisasi AOS
    Aos.init({
      duration: 1500,
    });


  });

  return(
    <>
    
      <div className='wrap-title position-relative'>
        <h1 data-aos="fade-left" className='text-light text-opacity-75 m-0'>
          Digital
        </h1>
        <h5 data-aos="fade-right" className='m-0 text-light'>
          Portofolio
        </h5>
        <p className='m-0 text-light text-opacity-75'>
          Click the 'Porto' option to proceed to the website.
        </p>
      </div>

      <div className='wrap-field'>

        <div className='accord border-top border-bottom d-flex align-items-center justify-content-between flex-wrap border-secondary border-opacity-50'>
          <div className='desc'>
            <h5 className='text-light'>
              Weather app
            </h5>
            <p className='text-light text-opacity-75'>
              awdaw dawg dayw gduawduaw fduaw fdyawt fdytaw dytawdytawdytaw fdyta dta
               uawyduawy duaw dtua6wdua6w dua6 wdu6aw du6a wdu6a wrdu6a d6arw
            </p>
            <p className='text-light text-opacity-50'>
              React Js | open meteo API
            </p>
          </div>
          <div className='photo text-end border-danger'>
            <img src={bgHeader} alt='Portofolio ss'></img>
          </div>
        </div>

        <div className='accord border-top border-bottom d-flex align-items-center justify-content-between flex-wrap border-secondary border-opacity-50'>
          <div className='desc'>
            <h5 className='text-light'>
              Weather app
            </h5>
            <p className='text-light text-opacity-75'>
              awdaw dawg dayw gduawduaw fduaw fdyawt fdytaw dytawdytawdytaw fdyta dta
               uawyduawy duaw dtua6wdua6w dua6 wdu6aw du6a wdu6a wrdu6a d6arw
            </p>
            <p className='text-light text-opacity-50'>
              React Js | open meteo API
            </p>
          </div>
          <div className='photo text-end border-danger'>
            <img src={bgHeader} alt='Portofolio ss'></img>
          </div>
        </div>

        <div className='accord border-top border-bottom d-flex align-items-center justify-content-between flex-wrap border-secondary border-opacity-50'>
          <div className='desc'>
            <h5 className='text-light'>
              Weather app
            </h5>
            <p className='text-light text-opacity-75'>
              awdaw dawg dayw gduawduaw fduaw fdyawt fdytaw dytawdytawdytaw fdyta dta
               uawyduawy duaw dtua6wdua6w dua6 wdu6aw du6a wdu6a wrdu6a d6arw
            </p>
            <p className='text-light text-opacity-50'>
              React Js | open meteo API
            </p>
          </div>
          <div className='photo text-end border-danger'>
            <img src={bgHeader} alt='Portofolio ss'></img>
          </div>
        </div>

      </div>
    </>
  )
}

export default Porto