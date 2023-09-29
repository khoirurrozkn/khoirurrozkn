import React from 'react';
import weatherApp from '../../img/weatherApp.webp';
import kukiGames from '../../img/kukiGames.png';
import BoxPorto from '../../Components/BoxPorto';
import './Porto.css';

const Porto = () => {
  return(
    <>
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
            {/* <a href='http://localhost:3000/khoirurrozkn/#porto' style={{ background: '#5E503F' }} className='text-light btn shadow'> */}
            <a href='http://khoirurrozkn.github.io/khoirurrozkn/#porto' style={{ background: '#5E503F' }} className='text-light btn shadow'>
              <span>View more Portofolio</span> <i class="bi bi-box-arrow-up-right ms-2"></i>
            </a>
          </p>

        </div>

      </div>
    </>
  )
}

export default Porto