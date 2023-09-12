import React,{ useEffect, useRef } from 'react'
import hiking1 from '../img/bromoPhotos.webp';
import hiking2 from '../img/hikingAbout.webp';
import diving1 from '../img/snorkelingAbout.webp';
import diving2 from '../img/diving2.webp';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import handleGsap from '../Utils/handleGsap';
import Aos from 'aos';

gsap.registerPlugin(ScrollTrigger);

const Photos = () => {
  const greetings = useRef(null);
  const titleHiking1 = useRef(null);
  const titleHiking2 = useRef(null);
  const img3 = useRef(null);
  const content = useRef(null);

  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  },[])

  useEffect(() => {
    if (window.innerWidth > 768) {
      handleGsap(greetings, content, 0, 300, 'top 100%', 'top 0%');
      handleGsap(titleHiking1, titleHiking1, 0, 100, 'top 30%', 'top -50%');
      handleGsap(titleHiking2, img3, 0, 100, 'top 30%', 'top -20%');
    }

  },[]);

  return (
    <>
      <style>
        {`
          *{
            user-select: none;
          }

          #photos .header{
            background-image: url('../img/bromoPhotos.webp');
            background-position: center;
            background-size: cover;
          }

          #photos i{
            margin: 30px;
            padding: 0px 20px;
            transition: 0.5s;
            z-index: 999;
          }

          #photos i:hover{
            transform: scale(1.1);
          }

          #photos .header div{
            background-color: #EAE0D5;
            mix-blend-mode: screen;
          }

          #photos .header div h1{
            font-size: 12vw;
            text-shadow: 0px 0px 10px black;
          }

          #photos .header div h1 span{
            font-weight: bold;
          }

          #photos .content .img-photos-1{
            width: 45%;
            margin-right: 20%;
          }

          #photos .content .title-hiking{
            padding-right: 2%;
          }

          #photos .desc-photos-1 p:nth-child(1){
            font-size: 35px;
            letter-spacing: 1px;
            margin: 0;
            margin-bottom: -35px;
          }

          #photos .desc-photos-1 p:nth-child(2){
            font-family: 'Abril Fatface', cursive;
            font-size: 80px;
          }

          #photos .content .img-photos-2{
            width: 45%;
            margin-right: 10%;
          }

          #photos .content .img-photos-3{
            width: 45%;
            margin-right: 20%;
          }

          #photos .desc-photos-3{
            width: 30%;
          }

          #photos .desc-photos-3 p:nth-child(1){
            font-size: 35px;
            letter-spacing: 1px;
            margin: 0;
            margin-bottom: -35px;
            padding-right: 20px;
          }

          #photos .desc-photos-3 p:nth-child(2){
            font-family: 'Abril Fatface', cursive;
            font-size: 80px;
          }

          #photos .content .img-photos-4{
            width: 45%;
          }

          #photos .circle-1{
            right: -10%;
            width: 400px;
            height: 400px;
            background-color: #EAE0D5;
            top: -30%;
          }

          #photos .circle-2{
            width: 500px;
            height: 500px;
            left: -20%;
            top: -15%;
            background-color: #EAE0D5;
          }

          #photos .circle-3{
            width: 400px;
            height: 400px;
            right: -10%;
            background-color: #EAE0D5;
          }

          #photos .circle-4{
            width: 400px;
            height: 400px;
            left: -10%;
            bottom: -10%;
            background-color: #EAE0D5;
          }

          @media only screen and (min-device-width: 768px) and (max-device-width: 1024px){
            #photos i{
              font-size: 35px !important;
            }

            #photos .header div{
              width: 10vh !important;
            }

            #photos .header div h1 span{
              display: block;
            }

            #photos .content .img-photos-1{
              width: 70%;
              margin-right: 10%;
              margin-top: 0 !important;
            }
            
            #photos .content .title-hiking{
              padding-right: 0%;
              margin-top: 7%;
            }
            
            #photos .desc-photos-1 p:nth-child(1){
              font-size: 30px;
              margin-bottom: -25px;
              margin-left: 7%;
            }
            
            #photos .desc-photos-1 p:nth-child(2){
              font-size: 70px;
            }
            
            #photos .content .img-photos-2{
              width: 70%;
              margin-right: 10%;
            }
            
            #photos .content .img-photos-3{
              width: 70%;
              margin-right: 0%;
              margin-left: 10%;
            }
            
            #photos .desc-photos-3{
              width: auto;
            }
            
            #photos .desc-photos-3 p:nth-child(1){
              font-size: 30px;
            }
            
            #photos .desc-photos-3 p:nth-child(2){
              font-size: 70px;
            }
            
            #photos .content .img-photos-4{
              width: 70%;
            }
            
            #photos .circle-1{
              right: -10%;
              width: 300px;
              height: 300px;
              top: -10%;
            }
            
            #photos .circle-2{
              width: 400px;
              height: 400px;
              left: -25%;
              top: -30%;
            }
            
            #photos .circle-3{
              width: 250px;
              height: 250px;
              right: -10%;
              top: 0;
            }
            
            #photos .circle-4{
              width: 200px;
              height: 200px;
              left: -5%;
              bottom: -3%;
            } 
          }

          @media only screen and (max-device-width: 767px){
            #photos i{
              margin: 20px;
            }

            #photos .header div{
              width: 10vh !important;
            }

            #photos .header div h1 span{
              display: block;
            }

            #photos .content .img-photos-1{
              width: 80%;
              margin-right: 10% ;
              margin-top: 0 !important;
            }
            
            #photos .content .title-hiking{
              padding-right: 0%;
            }
            
            #photos .desc-photos-1 p:nth-child(1){
              font-size: 25px;
              margin-bottom: -25px;
              margin-left: 7%;
            }
            
            #photos .desc-photos-1 p:nth-child(2){
              font-size: 60px;
            }
            
            #photos .content .img-photos-2{
              width: 80%;
              margin-right: 10%;
            }
            
            #photos .content .img-photos-3{
              width: 80%;
              margin-right: 0%;
              margin-left: 10%;
            }
            
            #photos .desc-photos-3{
              width: auto;
            }
            
            #photos .desc-photos-3 p:nth-child(1){
              font-size: 25px;
            }
            
            #photos .desc-photos-3 p:nth-child(2){
              font-size: 60px;
            }
            
            #photos .content .img-photos-4{
              width: 80%;
            }
            
            #photos .circle-1{
              right: -10%;
              width: 100px;
              height: 100px;
              top: -10%;
            }
            
            #photos .circle-2{
              width: 200px;
              height: 200px;
              left: -25%;
              top: -30%;
            }
            
            #photos .circle-3{
              width: 200px;
              height: 200px;
              right: -30%;
            }
            
            #photos .circle-4{
              width: 150px;
              height: 150px;
              left: -20%;
              bottom: -5%;
            }  
          }

          @media only screen and (max-device-width: 280px){
            #photos .circle-1{
              width: 80px;
              height: 80px;
            }

            #photos .circle-3{
              width: 150px;
              height: 150px;
              right: -25%;
              top: 30%;
            }
          }
        `}
      </style>
      <div id='photos' className='overflow-hidden'>

        <a href='http://localhost:3000/khoirurrozkn/' className='text-black'>
        {/* <a href='https://khoirurrozkn.github.io/khoirurrozkn/' className='text-black'> */}
          <i style={{ zIndex: '999' }} class="bi bi-arrow-left position-fixed top-0 left-0 fs-4 bg-black text-light bg-opacity-75 rounded-4 shadow"></i>
        </a>

        <div className='header position-relative overflow-hidden vh-100'>
          <div className='position-absolute w-50 h-100 d-flex align-items-center justify-content-center'>
            <h1 ref={greetings}>
              <span>P</span>
              <span>H</span>
              <span>O</span>
              <span>T</span>
              <span>O</span>
              <span>S</span>
            </h1>
          </div>

        </div>

        <div ref={content} style={{ background: '#C6AC8F' }} className='content position-relative pb-5 overflow-hidden'>
          <div className='w-100 d-flex flex-wrap justify-content-center align-items-center position-relative overflow-hidden'>
            <div className='position-absolute border left-0 circle-1 shadow rounded-circle'></div>
            <div ref={titleHiking1} className='title-hiking desc-photos-1 text-light'>
                <p>
                  Hiking
                </p>
                <p className='m-0'>
                  Photos
                </p>
            </div>
            <img data-aos='fade-up' style={{ zIndex: '2' }} className='img-photos-1 position-relative shadow-lg mt-5' src={hiking1} alt='My Photos'></img>
          </div>
          <div className='w-100 mt-4 d-flex justify-content-end position-relative'>

            <div className='position-absolute border circle-2 shadow rounded-circle'></div>

            <img style={{ zIndex: '2' }} data-aos='fade-up' className='img-photos-2 position-relative shadow-lg' src={hiking2} alt='My Photos'></img>
          </div>
          <div className='w-100 mt-5 d-flex flex-wrap justify-content-evenly align-items-center position-relative'>
            <div className='position-absolute border circle-3 shadow rounded-circle'></div>
              <div ref={titleHiking2} className='desc-photos-3 text-end text-light'>
                  <p>
                    Snorkeling
                  </p>
                  <p className='m-0'>
                    Photos
                  </p>
                </div>
              <img style={{ zIndex: '2' }} ref={img3} data-aos='fade-up' className='img-photos-3 position-relative shadow-lg' src={diving1} alt='My Photos'></img>
            </div>
          <div className='w-100 mt-4 d-flex justify-content-center'>
            <img style={{ zIndex: '2' }} data-aos='fade-up' className='img-photos-4 position-relative shadow-lg' src={diving2} alt='My Photos'></img>
          </div>


          <div className='circle-4 position-absolute rounded-circle shadow'></div>
        </div>

      </div>
    </>
  )
}

export default Photos