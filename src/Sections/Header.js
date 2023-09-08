import React,{ useEffect, useRef } from 'react'
import './Header.css'
import Aos from 'aos';
import bgHeader from '../img/bgHeader.jpg';
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