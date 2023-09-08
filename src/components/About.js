import React,{ useEffect} from 'react'
import './About.css';
import Aos from 'aos';
import WeatherApp from './../img/weatherapp.jpg';

const About = () => {

  useEffect(() => {
    // inisialisasi AOS
    Aos.init({
      duration: 1500,
    });
  },[]);

  return (
    <>
      <h1 className='text-center text-light text-opacity-75' data-aos="fade-up">
        A passionate <span>web developer</span> from Indonesia, surabaya
      </h1>
      <p style={{ userSelect: 'none' }} 
        className='text-center text-light text-opacity-75' 
        data-aos="fade-up"
        data-aos-delay='200'
      >
          Coding & Hiking
      </p>
      <div className='wrapBox d-flex flex-wrap justify-content-center align-items-center'>

        <div data-aos="fade-left" className='box-1 position-relative text-light text-end me-4'>
          <h5>
            Hello, I'm Moch Khoirur Rozikin.          
              <span style={{ userSelect: 'none' }} className='ms-1'>
                I'm an individual committed 
                to creating engaging and meaningful online experiences. 
                With my creativity and technical expertise, I strive to provide 
                you with unique and innovative solutions. I believe that every project 
                is an opportunity for creativity and adding value. Welcome to my world of 
                work, and let's embark on an amazing digital journey together.
            </span>
          </h5>

          <div className='text-light text-opacity-75 mt-5 info-slide'>Slide the image to the right.</div>
        </div>

        <div data-aos="fade-right" className='box-2 d-flex justify-content-center position-relative text-light'>
          <div className='circle-top bg-black position-absolute rounded-circle'></div>
          <div className='scroll'>
            <img src={WeatherApp} alt='Weather App'></img>
            <img src={WeatherApp} alt='Weather App'></img>
            <img src={WeatherApp} alt='Weather App'></img>
            <img src={WeatherApp} alt='Weather App'></img>
            <img src={WeatherApp} alt='Weather App'></img>
            <img src={WeatherApp} alt='Weather App'></img>
            <img src={WeatherApp} alt='Weather App'></img>
            <img src={WeatherApp} alt='Weather App'></img>
          </div>
          <div className='circle-bottom bg-black position-absolute rounded-circle'></div>
        </div>

      </div>
    </>
  )
}

export default About