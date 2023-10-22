import React,{ useRef, useEffect } from 'react'
import "./Header.css"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
    const wrapPhoto = useRef(null);
  
    useEffect(() => {
        if (window.innerWidth > 1025 && wrapPhoto.current) {
          gsap.fromTo(wrapPhoto.current, 
              {
                y: 0,
                x: 0,
                scale: 1.1,
              },
              {
                y: 480,
                x: 100,
                scale: 1,
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
    },[]);

    return (
        <div className='header position-relative d-flex flex-wrap align-content-center'>

            <div className='wrap-title'>
                <h1 className='title-header'>An enthusiastic</h1>
                <h1 className='title-header'>website developer</h1>
                <h1 className='title-header'>from Indonesia.</h1>
            </div>

            <img ref={wrapPhoto} src="https://imgs.search.brave.com/9hv891kLkQltIQKk4AoiXNCA4mTm1fNOySlTicaJPYM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5naXBoeS5jb20v/bWVkaWEvM29FZHVU/UXBkbXVSUnA1a2Y2/L2dpcGh5LmdpZg.jpeg" alt='Coding' className='wrap-photo-header position-relative border ms-auto rounded-4'>
            </img>

            <div className='wrap-1 position-absolute'></div>
            <div className='wrap-2 position-absolute'></div>

        </div>  
    )
}

export default Header