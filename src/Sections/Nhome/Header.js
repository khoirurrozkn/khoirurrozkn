import React,{ useRef, useEffect } from 'react'
import "./Header.css"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
    const wrapPhoto = useRef(null);
    const wrap1 = useRef(null);
    const wrap2 = useRef(null);
  
    useEffect(() => {
        if ( wrapPhoto.current && wrap1.current) {

          if( window.innerWidth > 1024 ){
            gsap.fromTo(wrapPhoto.current, 
                {
                  y: 0,
                  x: 0,
                  // scale: 1.1,
                },
                {
                  y: 740,
                  x: 320,
                  // scale: 1,
                  duration: 8,
                  scrollTrigger: {
                      trigger: wrapPhoto.current,
                      start: 'top 40%',
                      end: 'top -30%',
                      scrub: 4,
                      toggleActions: 'restart none none none',
                  }
                }
              ); 
            }

            gsap.to(wrap1.current, {
                transform: "rotate(-5deg)",
                bottom: "-20%",
                scrollTrigger: {
                  trigger: wrap1.current,
                  start: "top 95%", // Atur trigger point saat elemen tampil di tengah halaman
                  end: "top 70%", // Atur end point saat elemen tampil di tengah halaman
                  scrub: 1
                },
              });

              gsap.to(wrap2.current, {
                transform: "rotate(10deg)",
                bottom: "-23%",
                scrollTrigger: {
                  trigger: wrap1.current,
                  start: "top 95%", // Atur trigger point saat elemen tampil di tengah halaman
                  end: "top 70%", // Atur end point saat elemen tampil di tengah halaman
                  scrub: 1
                },
              });
        }
    },[]);

    return (
        <div className='header position-relative d-flex flex-wrap justify-content-center align-content-center'>

            <div className='wrap-title text-center'>
                {/* <h1 className='title-header'>An enthusiastic website</h1> */}
                {/* <h1 className='title-header'>website developer</h1> */}
                {/* <h1 className='title-header'>developer from Indonesia</h1> */}
                <h1 className='title-header'>Meet your</h1>
                <h1 className='title-header'>Website developer</h1>    
                <p className='body-header'>Welcome to My Portfolio. I am Khoirur, dedicated web developer committed 
                  to turning exciting ideas into reality.</p>            
            </div>

            <img ref={wrapPhoto} src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww" alt='Coding' className='wrap-photo-header hover view position-relative rounded-4'>
            </img>

            <div ref={wrap1} className='wrap-1 position-absolute'></div>
            <div ref={wrap2} className='wrap-2 position-absolute'></div>

        </div>  
    )
}

export default Header