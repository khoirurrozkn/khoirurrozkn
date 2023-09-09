import React from 'react'
import WeatherApp from './../img/weatherapp.jpg';

const About = () => {
  return (
    <>
    <style>
      {`
        #about h1{
          font-family: 'Abril Fatface', cursive;
          user-select: none;
          padding: 0px 45vh;
        }

        #about h1 span{
          font-family: 'Abril Fatface', cursive;
          font-size: 50px;
        }

        #about .wrapBox{
          padding-top: 10vh;
        }

        #about .box-1{
          width: 20%;
          z-index: 5;
        }

        #about .box-1 h5{
          font-weight: 200;
          letter-spacing: 1px;
          position: relative;
        }

        #about .box-1 h5::before{
          content: '';
          position: absolute;
          bottom: -3%;
          height: 2px;
          right: 0;
          background-color: gold;
          width: 80%;
        }

        #about .box-2{
          width: 60%;
          user-select: none;
        }

        #about .box-2 .circle-top{
          height: 6vh;
          top: -6%;
          width: 120%;
          z-index: 1;
        }

        #about .box-2 .circle-bottom{
          height: 6vh;
          bottom: -6%;
          width: 120%;
          z-index: 1;
        }

        #about .box-2 .scroll{
          overflow: scroll;
          white-space: nowrap;
        }

        #about .box-2 img{
          width: 550px;
          height: 342px;
        }

        #about .box-2 img:not(:last-child){
          margin-right: 30px;
        }

        @media only screen and (min-device-width: 768px) and (max-device-width: 1024px){
          #about h1{
            font-family: 'Abril Fatface', cursive;
            user-select: none;
            padding: 0px 5vh;
            font-size: 40px;
          }

          #about .box-1{
            width: 70%;
            text-align: start !important;
            margin-bottom: 10%;
          }

          #about .wrapBox{
            padding-top: 3vh;
          }

          #about .box-1 h5{
            font-size: 22px;
          }

          #about .box-1 h5::before{
            left: 2%;
          }

          #about .box-1 .info-slide{
            margin-top: 4% !important;
          }

          #about .box-2{
            width: 100%;
            user-select: none;
          }
          
          #about .box-2 .circle-top{
            height: 3.5vh;
            top: -10%;
            margin-left: 1.5%;
            width: 120%;
            z-index: 1;
          }
          
          #about .box-2 .circle-bottom{
            height: 3.5vh;
            bottom: -10%;
            margin-left: 1.5%;
            width: 120%;
            z-index: 1;
          }

          #about .box-2 .scroll{
            overflow: scroll;
            white-space: nowrap;
            transform: scale(1.05);
          }
          
          #about .box-2 img{
            width: 450px;
            height: auto;
          }
        }

        @media only screen and (max-device-width: 767px){
          #about h1{
            font-family: 'Abril Fatface', cursive;
            user-select: none;
            padding: 0px 0vh;
          }

          #about h1 span{
            font-size: 40px;
          }

          #about .box-1{
            width: 85%;
            text-align: start !important;
            margin-bottom: 10%;
          }

          #about .wrapBox{
            padding-top: 3vh;
          }

          #about .box-1 h5{
            font-size: 15px;
          }

          #about .box-1 h5::before{
            left: 2%;
          }

          #about .box-1 .info-slide{
            margin-top: 4% !important;
          }

          #about .box-2{
            width: 100%;
            user-select: none;
          }
          
          #about .box-2 .circle-top{
            height: 3.5vh;
            top: -10%;
            margin-left: 1.5%;
            width: 120%;
            z-index: 1;
          }
          
          #about .box-2 .circle-bottom{
            height: 3.5vh;
            bottom: -10%;
            margin-left: 1.5%;
            width: 120%;
            z-index: 1;
          }

          #about .box-2 .scroll{
            overflow: scroll;
            white-space: nowrap;
            transform: scale(1.05);
          }
          
          #about .box-2 img{
            width: 300px;
            height: auto;
          }
        }
      `}
    </style>
      <div>
        <h1 className='text-center text-light text-opacity-75'>
          A passionate <span className='text-light'>web developer</span> from Indonesia, surabaya
        </h1>
      </div>

      <p style={{ userSelect: 'none' }} 
        className='hidePc text-center text-light text-opacity-75'
      >
          Coding & Hiking
      </p>
      <div className='wrapBox d-flex flex-wrap justify-content-center align-items-center'>

        <div className='box-1 position-relative text-light text-end me-4'>
          <h5>
            Hello, I'm <b>Moch Khoirur Rozikin.</b>       
              <span style={{ userSelect: 'none' }} className='ms-1'>
                I'm an Freelancer. 
                With my creativity and technical expertise, I strive to provide 
                you with unique and innovative solutions. Welcome to my world of 
                work, and let's embark on an amazing digital journey together.
            </span>
          </h5>

          <div className='text-light text-opacity-75 mt-5 info-slide'>Slide the image to the right.</div>
        </div>

        <div className='box-2 d-flex justify-content-center position-relative text-light'>
          <div className='circle-top bg-black position-absolute rounded-circle'></div>
          <div className='scroll'>
            <img src={WeatherApp} alt='Weather App'></img>
            <img src={WeatherApp} alt='Weather App'></img>
            <img src={WeatherApp} alt='Weather App'></img>
            <img src={WeatherApp} alt='Weather App'></img>
          </div>
          <div className='circle-bottom bg-black position-absolute rounded-circle'></div>
        </div>

      </div>
    </>
  )
}

export default About