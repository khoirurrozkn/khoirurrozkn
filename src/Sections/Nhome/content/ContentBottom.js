import React, { useRef, useEffect } from 'react'
import "./ContentBottom.css"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContentBottom = (props) => {
    const wrap3 = useRef(null);
    const wrap4 = useRef(null);

    useEffect(() => {
        if (wrap3.current && wrap4.current) {
            gsap.to(wrap3.current, {
                transform: "rotate(5deg)",
                bottom: "0",
                scrollTrigger: {
                  trigger: wrap3.current,
                  start: "top 38%", // Atur trigger point saat elemen tampil di tengah halaman
                  end: "top 18%", // Atur end point saat elemen tampil di tengah halaman
                  scrub: 1,
                },
              });

              gsap.to(wrap4.current, {
                transform: "rotate(-10deg)",
                bottom: "10%",
                scrollTrigger: {
                  trigger: wrap3.current,
                  start: "top 38%", // Atur trigger point saat elemen tampil di tengah halaman
                  end: "top 18%", // Atur end point saat elemen tampil di tengah halaman
                  scrub: 1,
                },
              });
        }
    },[]);
    
    return (
        <>
        <div className='wrap-wrapping position-relative'>
            <div ref={wrap3} className='wrap-3 position-absolute'></div>
            <div ref={wrap4} className='wrap-4 position-absolute'></div>
        </div>
        <div ref={props.promotion} className='promotion text-center'>
            <p data-aos='fade-up' className='text-start help-title'>
                I help businesses in website development with customized solutions and
                <b> always prioritizing excellence</b>.
            </p>

            <div className='field-promotion d-flex flex-wrap justify-content-evenly'>
                <div className='box-promotion text-start rounded-4'>
                    <i className='bi bi-universal-access-circle'></i>
                    <p className='special-title'>Accessible</p>
                    <p className='special-body'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatibus repudiandae cumque eveniet dolores beatae deleniti non, vel nihil. Non officia perspiciatis est suscipit et?</p>
                </div>
                <div className='box-promotion text-start rounded-4'>
                    <i className='bi bi-universal-access-circle'></i>
                    <p className='special-title'>Accessible</p>
                    <p className='special-body'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatibus repudiandae cumque eveniet dolores beatae deleniti non, vel nihil. Non officia perspiciatis est suscipit et?</p>
                </div>
                <div className='box-promotion text-start rounded-4'>
                    <i className='bi bi-universal-access-circle'></i>
                    <p className='special-title'>Accessible</p>
                    <p className='special-body'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatibus repudiandae cumque eveniet dolores beatae deleniti non, vel nihil. Non officia perspiciatis est suscipit et?</p>
                </div>
            </div>
            
            {/* <p className='promotion-title'>Let`s unlock</p>
            <p className='promotion-body'>Your Brand's Full Potential. Together, we'll take your brand to new heights.</p>
            <a href='#adaw' className='btn text-light'>
                Send email
                <i className='bi bi-arrow-right ms-1'></i>
            </a> */}
        </div>
        </>
    )
}

export default ContentBottom