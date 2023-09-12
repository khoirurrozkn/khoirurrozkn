import React from 'react'
import weatherApp from './../img/weatherApp.webp';
import kukiGames from './../img/kukiGames.png';
import kukiAuth from './../img/kukiAuth.webp';
import kukiChat from './../img/kukiChat.webp';
import BoxPorto from './../Components/BoxPorto';

const Porto = () => {
  return (
    <>
    <style>
      {`
        #page-porto{
          min-height: 100vh;
        }

        #page-porto .btn{
          transition: 0.5s;
        }

        #page-porto .btn:hover{
          transform: scale(1.1);
        }

        #page-porto .wrap-porto{
          padding-left: 10%;
          padding-right: 10%;
        }

        #page-porto .back i{
          margin: 30px;
          padding: 0px 20px;
          transition: 0.5s;
          z-index: 999;
        }

        #page-porto .back i:hover{
          transform: scale(1.1);
        }

        #page-porto h1{
          font-family: 'Abril Fatface', cursive;
          margin-top: 40px;
          font-size: 50px;
        }

        #page-porto p{
          font-size: 18px;
          letter-spacing: 1px;
          margin-bottom: 40px;
        }

        @media only screen and (min-width: 768px) and (max-width: 1024px){

        }

        @media only screen and (max-width: 767px){
          #page-porto .wrap-porto{
            padding-left: 0%;
            padding-right: 0%;
          }

          #page-porto .back i{
            margin: 20px;
          }

          #page-porto h1{
            font-size: 40px;
            margin: 0;
            margin-top: 60px;
          }

          #page-porto p{
            font-size: 15px;
          }
        }
      `}
    </style>
      <div id='page-porto' className='position-relative'>
        <a href='http://localhost:3000/khoirurrozkn/' className='text-black back'>
        {/* <a href='https://khoirurrozkn.github.io/khoirurrozkn/' className='text-black back'> */}
          <i style={{ zIndex: '999' }} class="bi bi-arrow-left position-fixed top-0 left-0 fs-4 bg-black text-light bg-opacity-75 rounded-4 shadow"></i>
        </a>

        <h1 className='text-center text-black text-opacity-75'>
          My portfolio.
        </h1>
        <p className='text-center'>
          Here are some of my portfolios
        </p>

        <div className='wrap-porto'>
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

          <BoxPorto 
            title='Kuki Auth' 
            desc='This website is dedicated to Google authentication.' 
            tech='Laravel | Google API'
            href='https://kukiauth2.000webhostapp.com/'
            img={kukiAuth}
          />

          <BoxPorto 
            title='Kuki Chat' 
            desc='This website is a real-time chat platform inspired by WhatsApp, 
              but you can log in using Google or create an account.' 
            tech='Laravel | Pusher // Still in Development //'
            development={true}
            img={kukiChat}
          />

        </div>
        
      </div>
    </>
  )
}

export default Porto