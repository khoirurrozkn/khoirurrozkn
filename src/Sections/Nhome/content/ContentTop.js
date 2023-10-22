import React,{ useRef, useEffect } from 'react'
import "./ContentTop.css"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContentTop = () => {
    const imgTopLeft = useRef(null);
    const imgTopRight = useRef(null);
    const imgBottomLeft = useRef(null);

    useEffect(() => {
        if (window.innerWidth > 1025 && imgTopLeft.current && imgTopRight.current && imgBottomLeft.current) {
          gsap.fromTo(imgTopLeft.current, 
              {
                y: -100,
                x: -100,
                scale: 0.5,
              },
              {
                y: 0,
                x: 0,
                scale: 1,
                duration: 8,
                scrollTrigger: {
                    trigger: imgTopLeft.current,
                    start: 'top 100%',
                    end: 'top 70%',
                    scrub: 4,
                    toggleActions: 'restart none none none',
                }
              }
            );    
            
            gsap.fromTo(imgTopRight.current, 
                {
                  y: -100,
                  x: 100,
                  scale: 0.5,
                },
                {
                  y: 0,
                  x: 0,
                  scale: 1,
                  duration: 8,
                  scrollTrigger: {
                      trigger: imgTopRight.current,
                      start: 'top 100%',
                      end: 'top 70%',
                      scrub: 4,
                      toggleActions: 'restart none none none',
                  }
                }
              );  

              gsap.fromTo(imgBottomLeft.current, 
                {
                  y: 100,
                  x: -100,
                  scale: 0.5,
                },
                {
                  y: 0,
                  x: 0,
                  scale: 1,
                  duration: 8,
                  scrollTrigger: {
                      trigger: imgBottomLeft.current,
                      start: 'top 100%',
                      end: 'top 70%',
                      scrub: 4,
                      toggleActions: 'restart none none none',
                  }
                }
              ); 
        }
    },[]);
    return (
        <>
        <p data-aos='fade-up' className='m-0 text-light title-about d-block'>
            Empowering <b>brands to shine</b> in the digital age. 
            Together we will establish the new norm. 
            No frills, always at the forefront.
        </p>

        <p data-aos='fade-up' className='m-0 mt-4 title-about d-block'>
            The fusion of my enthusiasm for  
            <b> coding</b>, and <b>interaction</b> places me in a 
            distinctive position in the realm of 
            <b> web developer</b>.

            <br></br>
            <a href='#awda' className='mt-4 btn text-black'>About me ?</a>
        </p>



        <div className='some-porto-top d-flex flex-wrap align-items-center justify-content-center'>

            <div className='middle-sp-porto'>
                <p data-aos={`${window.innerWidth > 1024 ? 'fade-down' : 'fade-up'}`} className='ms-auto text-light'>
                    Some porto <i className='bi bi-arrow-down d-inline-block'></i>
                </p>
                <img ref={imgTopLeft} alt='some-porto' className='some-porto-top-left-image rounded-4' src='https://imgs.search.brave.com/0oulHxCyLMVw7IwoWDvrU2toZWRvbrteAm4xGVA1lhk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJzLzkyMTcz/L3NjcmVlbnNob3Rz/LzM5MTQ5NTAvZnJl/ZWFuaW1hdGVkaXBo/b25leC1jb3B5Lmdp/Zg.jpeg'>
                </img>
            </div>

            <img ref={imgTopRight} alt='some-porto' className='some-porto-top-right-image rounded-4' src='https://imgs.search.brave.com/0oulHxCyLMVw7IwoWDvrU2toZWRvbrteAm4xGVA1lhk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJzLzkyMTcz/L3NjcmVlbnNob3Rz/LzM5MTQ5NTAvZnJl/ZWFuaW1hdGVkaXBo/b25leC1jb3B5Lmdp/Zg.jpeg'>
            </img>

        </div>

        <div style={{zIndex: '4', backgroundColor: "#0A100D"}} className='some-porto-bottom position-relative d-flex flex-wrap align-items-top justify-content-center'>

            <img ref={imgBottomLeft} alt='some-porto' className='some-porto-bottom-left-image rounded-4' src='https://imgs.search.brave.com/0oulHxCyLMVw7IwoWDvrU2toZWRvbrteAm4xGVA1lhk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJzLzkyMTcz/L3NjcmVlbnNob3Rz/LzM5MTQ5NTAvZnJl/ZWFuaW1hdGVkaXBo/b25leC1jb3B5Lmdp/Zg.jpeg'>
            </img>

            <div data-aos='fade-up'>
                <p className='text-light'>
                    Still craving more?
                    Prepare to experience even more.
                </p>
                <a href='#awdaw' className='btn'>
                    More porto ?
                </a>
            </div>

        </div>
        </>
    )
}

export default ContentTop