import React, { useRef, useEffect, useState } from 'react'
import "./ContentBottom.css"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContentBottom = (props) => {
    const wrap3 = useRef(null);
    const wrap4 = useRef(null);
    const imagePromotion = useRef(null);
    const [numberPromotion, setNumberPromotion] = useState(-1);

    useEffect(() => {
        if (wrap3.current && wrap4.current) {
            gsap.to(wrap3.current, {
                transform: "rotate(5deg)",
                bottom: "0",
                scrollTrigger: {
                  trigger: wrap3.current,
                  start: "top 38%",
                  end: "top 18%",
                  scrub: 1,
                },
            });

            gsap.to(wrap4.current, {
                transform: "rotate(-10deg)",
                bottom: "10%",
                scrollTrigger: {
                  trigger: wrap3.current,
                  start: "top 38%",
                  end: "top 18%",
                  scrub: 1,
                },
            });

            if(window.innerWidth > 1024 && imagePromotion.current){

                if(numberPromotion >= 0){
                    gsap.to(imagePromotion.current, {
                        marginTop: '30px'
                    });
                }else{
                    gsap.to(imagePromotion.current, {
                        marginTop: '-120px'
                    });
                }

            }
        }
    },[numberPromotion]);
    
    return (
        <>
        <div className='wrap-wrapping position-relative'>
            <div ref={wrap3} className='wrap-3 position-absolute'></div>
            <div ref={wrap4} className='wrap-4 position-absolute'></div>
        </div>
        <div ref={props.promotion} className='promotion'>
            <p data-aos='fade-up' className='info-title'>
                Enhancing Web Development with Excellence
            </p>
            <p data-aos='fade-up' className='info-body'>
                I help businesses in website development with customized solutions and
                <b> always prioritizing excellence</b>.
            </p>


            {/* <div className='field-promotion position-relative'>
                <div ref={imagePromotion} className='image-promotion position-absolute'></div>

                    <div onMouseOver={() => setNumberPromotion(0)} className='title-promotion border-bottom border-black'>
                        Accessible
                    </div>

                    <div onMouseOver={() => setNumberPromotion(1)} className='title-promotion border-bottom border-black'>
                        Quality
                    </div>

                    <div onMouseOver={() => setNumberPromotion(2)} className='title-promotion border-bottom border-black'>
                        Responsive
                    </div>

            </div> */}


            {/* <div className='field-special'>
                <div className='box-special special hover d-flex justify-content-between align-items-center border-top border-black'>
                    <div>
                        Front end
                    </div>
                    <div>
                        HTML, CSS, Js, React js
                    </div>
                </div>
                <div className='box-special special hover d-flex justify-content-between align-items-center border-top border-black'>
                    <div>
                        Back end
                    </div>
                    <div>
                        PHP, Laravel
                    </div>
                </div>
                <div className='box-special special hover d-flex justify-content-between align-items-center border-top border-bottom border-black'>
                    <div>
                        Database System
                    </div>
                    <div>
                        Mysql, PostgreSQL
                    </div>
                </div>
            </div> */}
            
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