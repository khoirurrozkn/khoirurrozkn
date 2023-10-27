import React,{ useRef, useEffect } from 'react'
import "./ContentTop.css"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Magnetic from '../../../Components/Magnetic';

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

        <div data-aos='fade-up' className='m-0 mt-4 title-about d-block'>
            The fusion of my enthusiasm for  
            <b> coding</b>, and <b>interaction</b> places me in a 
            distinctive position in the realm of 
            <b> web developer</b>.


            <br></br>
            <Magnetic>
              <div className='d-inline-block circle mt-4 rounded-circle d-flex align-items-center justify-content-center'>
                <a href='#awda' className='text-black'>
                  About me
                </a>
              </div>
            </Magnetic>
        </div>



        <div className='some-porto-top d-flex flex-wrap align-items-center justify-content-center'>

            <div className='middle-sp-porto'>
                <p className='ms-auto text-light'>
                    Some porto <i className='bi bi-arrow-down d-inline-block'></i>
                </p>
                <img ref={imgTopLeft} alt='some-porto' className='some-porto-top-left-image hover view rounded-4' src='https://assets.awwwards.com/awards/media/cache/thumb_880_660/submissions/2023/02/63fd2837bf14b765408264.jpg'>
                </img>
            </div>
            
            <img ref={imgTopRight} alt='some-porto' className='some-porto-top-right-image hover view rounded-4' src='https://assets.awwwards.com/awards/media/cache/thumb_880_660/submissions/2021/07/60def8feee177853360403.png'>
            </img>

        </div>

        <div style={{zIndex: '4', backgroundColor: "#0A100D"}} className='some-porto-bottom position-relative d-flex flex-wrap align-items-top justify-content-center'>

            <img ref={imgBottomLeft} alt='some-porto' className='some-porto-bottom-left-image hover view rounded-4' src='https://assets.awwwards.com/awards/media/cache/thumb_880_660/submissions/2018/06/5b1e640dad5b3.jpg'>
            </img>

            <div>
                <p className='text-light'>
                    Still craving more?
                    Prepare to experience even more.
                </p>
                <p className='text-light'>
                  Click 'More Porto' if you want to 
                  view the portfolio along with its description.
                </p>

                <Magnetic >
                <div className='d-inline-block circle mt-2 rounded-circle d-flex align-items-center justify-content-center'>
                    <a href='#awdaw' className='text-black'>
                        More porto
                    </a>
                  </div>
                </Magnetic>
            </div>

        </div>
        </>
    )
}

export default ContentTop