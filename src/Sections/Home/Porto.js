import React from 'react';
import weatherApp from '../../img/weatherApp.webp';
import kukiGames from '../../img/kukiGames.png';
import BoxPorto from '../../Components/BoxPorto';

const Porto = () => {
  return(
    <>
      <style>
        {`

          #porto .wrap-porto-radius{
            border-bottom-left-radius: 20%;
          }

          #porto .wrap-title h1{
            font-family: 'Oswald', sans-serif;
            user-select: none;
            font-weight: 200;
            padding-right: 17%;
            letter-spacing: 2px;
            margin-bottom: -8px !important;
            font-size: 40px;
          }

          #porto .wrap-title h5{
            font-family: 'Abril Fatface', cursive;
            font-size: 50px;
          }

          #porto .wrap-title p{
            letter-spacing: 1px;
            padding-left: 10%;
            font-size: 15px;
          }

          #porto .wrap-field{
            padding-top: 80px !important;
            padding-left: 10%;
            padding-right: 10%;
          }

          @media only screen and (min-width: 768px) and (max-width: 1024px){

          }

          @media only screen and (max-width: 767px){
            #porto .wrap-title{
              padding-left: 0%;
              text-align: start !important;
            }

            #porto .wrap-porto-radius{
              border-bottom-left-radius: 100px;
            }

            #porto .wrap-title h1{
              margin-bottom: -2% !important;
              padding-right: 0%;
              padding-left: 5%;
              font-size: 30px;
            }
            
            #porto .wrap-title h5{
              font-size: 35px;
              padding-left: 7%;
            }
            
            #porto .wrap-title p{
              font-size: 14px;
            }
            
            #porto .wrap-field{
              padding-top: 40px !important;
              padding-left: 0%;
              padding-right: 0%;
            }

            #porto a{
              font-size: 14px;
            }
          }
        `}
      </style>
      <div id='wrapPorto' className='wrap-porto-radius' style={{ 
          background: '#EAE0D5',  
          paddingTop: '12vh',
          paddingBottom: '6vh',
        }}
      >
        <div className='wrap-title text-center position-relative'>
          <h1 className='text-black text-opacity-75 m-0'>
            Digital
          </h1>
          <h5 className='m-0 text-black text-opacity-75'>
            Portofolio
          </h5>
          <p className='m-0 text-black'>
            Click the 'Porto' option to proceed to the website.
          </p>
        </div>

        <div className='wrap-field'>

          <BoxPorto 
            title='Weather App' 
            desc='The weather information, including temperature and forecasts.' 
            tech='React JS | Open meteo API'
            href='https://weather-git-master-khoirurrozkn.vercel.app/'
            img={weatherApp}
          />

          <BoxPorto 
            title='Kuki Games' 
            desc='This website offers recommendations for games and provides download links for them.' 
            tech='React JS | Rapid API'
            href='https://kukigames.vercel.app/'
            img={kukiGames}
          />

          <p style={{ userSelect: 'none', letterSpacing: '1px' }} className='bottom-0 m-0 mt-5 fs-5 text-center w-100'>
            <a href='http://localhost:3000/khoirurrozkn/#porto' style={{ background: '#5E503F' }} className='text-light btn shadow'>
            {/* <a href='http://khoirurrozkn.github.io/khoirurrozkn/#porto' style={{ background: '#5E503F' }} className='text-light btn shadow'> */}
              <span>View more Portofolio</span> <i class="bi bi-box-arrow-up-right ms-2"></i>
            </a>
          </p>

        </div>

      </div>
    </>
  )
}

export default Porto