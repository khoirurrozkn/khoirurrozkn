import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 

gsap.registerPlugin(ScrollTrigger);

const Testing = () => {
  useEffect(() => {
    let textAnimation = gsap.timeline();
    textAnimation.from('.word', {
      y: 100,
      stagger: {
        each: 0.5
      }
    })
  },[]);
  return (
    <div className='d-flex vh-100 justify-content-center align-items-center'>
      <div className='w-50 fs-2'>
        <p>
          {
            "Empowering brands to shine in the digital age. Together we will establish the new norm. No frills, always at the forefront.".split('').map((word) => {
              return word === ' ' ? <div className='word'>&nbsp;</div> : <div className='word'>{word}</div>
            })

          }
        </p>
      </div>
    </div>
  );
};

export default Testing;
