import React,{ useRef, useEffect } from 'react'
import "./ContentTop.css"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Magnetic from '../../../Components/Magnetic';

gsap.registerPlugin(ScrollTrigger);

const ContentTop = () => {
    const aboutMe = useRef(null);

    useEffect(() => {
        if (window.innerWidth > 1025 && aboutMe.current) {
          gsap.fromTo(aboutMe.current, 
              {
                x: 0,
              },
              {
                x: -200,
                duration: 8,
                scrollTrigger: {
                    trigger: aboutMe.current,
                    start: 'top 100%',
                    end: 'top 0%',
                    scrub: 4,
                    toggleActions: 'restart none none none',
                }
              }
          );    
        }
    },[]);

    return (
      <div className='container overflow-hidden'>
        <div className='wrap-title w-100 d-flex justify-content-evenly'>
          <p className='m-0 text-light title d-block'>
            Empowering brands to shine in the digital age. 
            Together we will establish the new norm. 
            No frills, always at the forefront.
          </p>

          <p className='body text-light d-block'>
            The fusion of my enthusiasm for  
            <b> coding</b>, and <b>interaction</b> places me in a 
            distinctive position in the realm of 
            <b> web developer</b>.
          </p>
        </div>

        <div ref={aboutMe} className='wrap-circle-about-me position-relative'>
          <div className='line-about-me position-absolute'></div>
          <Magnetic>
            <a href='awd' className='circle-about-me position-absolute m-0 text-black rounded-circle'>
                About me
            </a>
          </Magnetic>
        </div>

        <div className='wrap-selected-porto'>
          <p className='title text-light'>Selected porto</p>
          <div className='row m-0 justify-content-evenly'>
            <div className='col-lg-6 rounded-4 porto porto-1'>
              <div className='photo-porto' style={{backgroundImage: 'url("https://cdn.dribbble.com/userupload/3537346/file/original-a21f8fa25aaf13526fe11e0d94271d1d.png?resize=2048x1536")'}}>

              </div>
            </div>
            <div className='col-lg-6 rounded-4 porto porto-2'>
              <div className='photo-porto' style={{backgroundImage: 'url("https://cdn.dribbble.com/userupload/3537346/file/original-a21f8fa25aaf13526fe11e0d94271d1d.png?resize=2048x1536")'}}>

              </div>
            </div>
            <div className='col-lg-6 rounded-4 porto porto-3'>
              <div className='photo-porto' style={{backgroundImage: 'url("https://cdn.dribbble.com/userupload/3537346/file/original-a21f8fa25aaf13526fe11e0d94271d1d.png?resize=2048x1536")'}}>

              </div>
            </div>
            <div className='col-lg-6 rounded-4 porto porto-4'>
              <div className='photo-porto' style={{backgroundImage: 'url("https://cdn.dribbble.com/userupload/3537346/file/original-a21f8fa25aaf13526fe11e0d94271d1d.png?resize=2048x1536")'}}>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default ContentTop

{/* <p data-aos='fade-up' className='m-0 text-black title-about d-block'>
Empowering <b>brands to shine</b> in the digital age. 
Together we will establish the new norm. 
No frills, always at the forefront.
</p>

<div data-aos='fade-up' className='m-0 mt-4 title-about text-black d-block'>
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
</div> */}