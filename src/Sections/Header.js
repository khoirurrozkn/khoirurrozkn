import React,{ useEffect, useRef } from 'react'
import Aos from 'aos';
import bgHeader from '../img/bgHeader.webp';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const navHeader = useRef(null);
  const descHeader = useRef(null);
  const imgHeader1 = useRef(null);
  const imgHeader2 = useRef(null);

  useEffect(() => {
    // inisialisasi AOS
    Aos.init({
      duration: 1500,
    });

    if (navHeader.current 
        && descHeader.current
        && imgHeader1.current
        && imgHeader2.current
      ) {

      if (window.innerWidth > 768) {
        gsap.fromTo(navHeader.current,  {
            y: 0,
          },
          {
            y: 150,
            duration: 8,
            scrollTrigger: {
              trigger: descHeader.current,
              start: 'top 90%',
              end: 'top 20%',
              scrub: 4,
              toggleActions: 'restart none none none',
            },
          }
        );

        gsap.fromTo(imgHeader1.current,  {
            y: 0,
          },
          {
            y: 80,
            duration: 4,
            scrollTrigger: {
              trigger: descHeader.current,
              start: 'top 90%',
              end: 'top 20%',
              scrub: 4,
              toggleActions: 'restart none none none',
            },
          }
        );

        gsap.fromTo(imgHeader2.current,  {
            y: 0,
          },
          {
            y: 70,
            duration: 4,
            scrollTrigger: {
              trigger: descHeader.current,
              start: 'top 90%',
              end: 'top 20%',
              scrub: 4,
              toggleActions: 'restart none none none',
            },
          }
        );
      }
    }

  },[]);

  return (
    <>
      <style>
        {`
          #header a{
          font-size: 63px;
          font-family: 'Abril Fatface', cursive;
          cursor: pointer;
          transition: 0.5s;
        }

        #header a:not(:first-child){
          opacity: 0.75;
        }

        #header span{
          font-family: 'Oswald', sans-serif;
          font-weight: 300;
          letter-spacing: 0.1em;
        }

        #header .img{
          width: 550px;
          filter: brightness(60%);
          user-select: none;
        }

        #header .img-1{
          left: -13%;
          top: -1%;
          transform: rotate(20deg);
        }

        #header .img-2{
          right: -13%;
          top: 30%;
          transform: rotate(-30deg);
        }

        #header .spinner-grow{
          opacity: 0;
          transition: ease-out 0.5s;
        }


        @media only screen and (min-device-width: 768px) and (max-device-width: 1024px){
          #header .img{
            width: 450px;
            filter: brightness(60%);
          }
          
          #header .img-1{
            left: -10%;
            top: -1%;
            transform: rotate(30deg);
          }
          
          #header .img-2{
            width: 400px;
            right: -10%;
            top: 62%;
            transform: rotate(-20deg);
          }
        }

        @media only screen and (max-device-width: 767px){
          #header a{
            font-size: 200%;
          }  

          #header span{
            font-size: 14px;
          }

          #header .img{
            width: 250px;
            filter: brightness(60%);
          }
          
          #header .img-1{
            left: -20%;
            top: 5%;
            transform: rotate(30deg);
          }
          
          #header .img-2{
            width: 220px;
            right: -18%;
            top: 63%;
            transform: rotate(-20deg);
          }

        }

        @media only screen and (max-device-width: 280px){
          #header .img{
            width: 200px;
            filter: brightness(60%);
          }

          #header .img-2{
            width: 170px;
            top: 62.5%;
          }
        }
        `}
      </style>
        <div ref={navHeader} style={{ zIndex: '1' }} className='text-center'>
          <div data-aos="fade-right" style={{marginTop: '-5%'}}>
            <a style={{ opacity: '100' }} className='text-light position-relative btn border-0 p-0' href='#about'>
              KHOIRUR ROZKN
            </a>
          </div>
          <div data-aos="fade-left" data-aos-delay="100" style={{marginTop: '-5%'}}>
            <a className='text-light position-relative btn border-0 p-0' href='#porto'>
              PORTOFOLIO
            </a>
          </div>
          <div data-aos="fade-right" data-aos-delay="200" style={{marginTop: '-5%'}}>
            <a className='text-light position-relative btn border-0 p-0' href='#recent'>
              RECENT PORTO
            </a>
          </div>
          <div data-aos="fade-left" data-aos-delay="300" style={{marginTop: '-5%'}}>
            <a className='text-light position-relative btn border-0 p-0' href='#contact'>
              MY CONTACT
            </a>
          </div>
        </div>
        
        
        <span ref={descHeader} style={{zIndex: '2'}} className='position-absolute text-center bottom-0 mb-5 text-light text-opacity-75'>
          Moch Khoirur Rozikin <span style={{ userSelect: 'none' }}>/ Freelancer / Web developer</span>
        </span>

        <div ref={imgHeader1} className='img img-1 position-absolute'>
          <img data-aos="fade-down-right" data-aos-delay="600" src={bgHeader} alt='1' width='100%'/>
        </div>

        <div ref={imgHeader2} className='img img-2 position-absolute'>
          <img data-aos="fade-down-left" data-aos-delay="600" src={bgHeader} alt='1' width='100%'/>
        </div>
    
    </>
  )
}

export default Header