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
        <div className='header d-flex position-relative text-light align-items-center'>
          <div className='container position-relative d-flex justify-content-between'>
            <div className='wrap-title d-block'>
              <h1 className='title'>
                Meet the mastermind behind your website
              </h1>
              <p className='body'>
                Dedicated web developer committed
                to turning exciting ideas into reality.
              </p>

            </div>
            
            <Magnetic>
              <a href='awdaw' className='ig position-absolute rounded-circle'>
                <i className="bi bi-instagram text-black"></i>
              </a>
            </Magnetic>

            <Magnetic>
              <a href='awdawd' className='github position-absolute rounded-circle'>
                <i className="bi bi-github text-black"></i>
              </a>
            </Magnetic>

            <div className='photo position-relative'>

            </div>

          </div>
        
          <div className='circle rounded-circle position-absolute'></div>

            {/* <div className='wrap-title text-center'>
                <h1 className='title-header'>An enthusiastic website</h1>
                <h1 className='title-header'>website developer</h1>
                <h1 className='title-header'>developer from Indonesia</h1>

                <h1 className='title-header'>Meet the mastermind</h1>
                <h1 className='title-header'>Behind your Website</h1>    
                <p className='body-header'>Dedicated web developer committed 
                  to turning exciting ideas into reality.</p>            
            </div> */}

            {/* <img ref={wrapPhoto} src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww" alt='Coding' className='wrap-photo-header hover view position-relative rounded-4'>
            </img> */}

            {/* <div className='from-indo position-absolute'>
              <p className='m-0 text-light'>Located</p>
              <p className='m-0 text-light'>In the</p>
              <p className='m-0 text-light'>Indonesian</p>
            </div> */}

            {/* <div ref={wrap1} className='wrap-1 position-absolute'></div>
            <div ref={wrap2} className='wrap-2 position-absolute'></div> */}
        </div>
    )
}

export default Header