import React,{ useRef, useEffect } from 'react'
import "./Header.css"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Magnetic from '../../Components/Magnetic';

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
    // const wrapPhoto = useRef(null);
    // const wrap1 = useRef(null);
    // const wrap2 = useRef(null);
  
    // useEffect(() => {
    //     if ( wrapPhoto.current && wrap1.current) {

    //       if( window.innerWidth > 1024 ){
    //         gsap.fromTo(wrapPhoto.current, 
    //             {
    //               y: 0,
    //               x: 0,
    //             },
    //             {
    //               y: 740,
    //               x: 320,
    //               duration: 8,
    //               scrollTrigger: {
    //                   trigger: wrapPhoto.current,
    //                   start: 'top 40%',
    //                   end: 'top -30%',
    //                   scrub: 4,
    //                   toggleActions: 'restart none none none',
    //               }
    //             }
    //           ); 
    //         }

    //         gsap.to(wrap1.current, {
    //             transform: "rotate(-5deg)",
    //             bottom: "-20%",
    //             scrollTrigger: {
    //               trigger: wrap1.current,
    //               start: "top 95%",
    //               end: "top 70%",
    //               scrub: 1
    //             },
    //           });

    //           gsap.to(wrap2.current, {
    //             transform: "rotate(8deg)",
    //             bottom: "-23%",
    //             scrollTrigger: {
    //               trigger: wrap1.current,
    //               start: "top 95%",
    //               end: "top 70%",
    //               scrub: 1
    //             },
    //           });
    //     }
    // },[]);

    return (
        <div className='header d-flex flex-wrap text-black justify-content-center align-items-center'>

          <div className='container'>

            <div className='top d-flex flex-wrap justify-content-between'>
              
              <div className='wrap-title position-relative'>
                <h1 className='title'>
                  Meet the mastermind behind your website
                </h1>
                <p className='body'>
                  Dedicated web developer committed
                  to turning exciting ideas into reality,
                  aiming to leave a lasting impression.
                </p>

                <Magnetic>
                  <a className='ig position-absolute rounded-circle'>
                    <i className='bi bi-instagram text-light'></i>
                  </a>
                </Magnetic>

                <Magnetic>
                  <a className='github position-absolute rounded-circle'>
                    <i className='bi bi-github text-light'></i>
                  </a>
                </Magnetic>

                <Magnetic>
                  <a className='twitter position-absolute rounded-circle'>
                    <i className='bi bi-twitter text-light'></i>
                  </a>
                </Magnetic>
              </div>

              <div className='photo rounded-5'></div>

            </div>

          </div>

          {/* <div className='position-absolute bottom-0 d-flex flex-wrap justify-content-evenly featured'>
                <p className='text-center w-100' style={{fontFamily: 'font-title'}}>Featured by</p>
                  <div className='awwwards rounded-4'>Awwwards</div>
                  <div className='behance rounded-4'>Behance</div>
                  <div className='behance rounded-4'>Dribble</div>
          </div> */}

        </div>
    )
}

export default Header