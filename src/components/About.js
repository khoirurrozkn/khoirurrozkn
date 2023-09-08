import React,{ useEffect, useRef } from 'react'
import './About.css';
import Aos from 'aos';
import WeatherApp from './../img/weatherapp.jpg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const About = (props) => {
  const titleAbout = useRef(null);
  const imgAbout1 = useRef(null);
  const imgAbout2 = useRef(null);
  const imgAbout3 = useRef(null);
  const imgAbout4 = useRef(null);
  const hobbiesAbout = useRef(null);

  const dataImgAbout = [
    imgAbout1,
    imgAbout2,
    imgAbout3,
    imgAbout4
  ];

  useEffect(() => {
    // inisialisasi AOS
    Aos.init({
      duration: 1500,
    });

    if (titleAbout.current
        && imgAbout1.current
        && imgAbout2.current
        && imgAbout3.current
        && imgAbout4.current
        && props.about.current
        && hobbiesAbout.current
    ) {

      if (window.innerWidth > 768) {
        gsap.fromTo(titleAbout.current,  {
            y: 0,
          },
          {
            y: 68,
            duration: 6,
            scrollTrigger: {
              trigger: props.about.current,
              start: 'top 50%',
              end: 'top 0%',
              scrub: 4,
              toggleActions: 'restart none none none',
            },
          }
        );

        dataImgAbout.forEach(value => {
          gsap.fromTo(value.current,  {
              x: 0,
            },
            {
              x: -200,
              duration: 6,
              scrollTrigger: {
                trigger: hobbiesAbout.current,
                start: 'top 65%',
                end: 'top 0%',
                scrub: 4,
                toggleActions: 'restart none none none',
              },
            }
          );
        });
    }

    }
  },[]);

  return (
    <>
      <div ref={titleAbout}>
        <h1  className='text-center text-light text-opacity-75' data-aos="fade-zoom">
          A passionate <span>web developer</span> from Indonesia, surabaya
        </h1>
      </div>

      <p ref={hobbiesAbout} style={{ userSelect: 'none' }} 
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

        <div data-aos="fade-left" className='box-2 d-flex justify-content-center position-relative text-light'>
          <div className='circle-top bg-black position-absolute rounded-circle'></div>
          <div className='scroll'>
            <img ref={imgAbout1} src={WeatherApp} alt='Weather App'></img>
            <img ref={imgAbout2} src={WeatherApp} alt='Weather App'></img>
            <img ref={imgAbout3} src={WeatherApp} alt='Weather App'></img>
            <img ref={imgAbout4} src={WeatherApp} alt='Weather App'></img>
          </div>
          <div className='circle-bottom bg-black position-absolute rounded-circle'></div>
        </div>

      </div>
    </>
  )
}

export default About