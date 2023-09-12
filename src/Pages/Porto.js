import React from 'react'
import weatherApp from './../img/weatherApp.webp';
import kukiGames from './../img/kukiGames.png';
import kukiAuth from './../img/kukiAuth.webp';
import kukiChat from './../img/kukiChat.webp';
import BoxPorto from './../Components/BoxPorto';
import './Porto.css';

const Porto = () => {
  return (
    <>
      <div id='page-porto' className='position-relative'>
        {/* <a href='http://localhost:3000/khoirurrozkn/' className='text-black back'> */}
        <a href='https://khoirurrozkn.github.io/khoirurrozkn/' className='text-black back'>
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