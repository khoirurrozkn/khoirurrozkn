import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import fotoProfil from './img/fotoProfil.png';
import { faCss3Alt, faHtml5, faJs, faLaravel, faPhp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Lottie from 'react-lottie';
import animateHeader from './img/animateHeader.json';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navActive, setNavActive] = useState('');
  const home = useRef(null);
  const about = useRef(null);

  useEffect(() => {
    if (home.current && about.current ) {
      if( scrollPosition >= about.current.offsetTop ){
        setNavActive('about');
      }else{
        setNavActive('home');
      }
      
    }
  }, [scrollPosition]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animateHeader,
  };

  const lottieHeaderStyle = {
    minHeight: '300px',
    minWidth: '300px',
  };

  return (
    <div className='container-fluid m-0 p-0'>
      <Navbar navActive={navActive} />

      <div
        id='home'
        ref={home}
        className='vh-100 overflow-hidden'
        style={{
          backgroundPositionY: `calc(50% + ${scrollPosition * 0.1}px)`,
          transition: '0.1s',
        }}
      >
        <div className='d-flex h-100 w-100 align-items-center'>
          <div className='row w-100 m-0 align-items-center'>
            <div className='col col1 p-0 col-lg-6 d-flex align-items-center justify-content-center order-sm-1 order-md-1 order-lg-2'>
              <div className='wrapFoto d-flex align-items-end justify-content-center position-relative'>
                <Lottie options={defaultOptions} style={lottieHeaderStyle} />
              </div>
            </div>
            <div
              className='col col2 col-lg-6 d-flex align-items-center justify-content-center order-sm-2 order-md-2 order-lg-1'
            >
              <div className='text-light'>
                <h1>Portofolio</h1>
                <p>Hi, I'm Khoirurrozkn. A passionate website Developer based in Surabaya, Indonesia. 📍</p>
                <div className='d-flex justify-content-evenly'>
                  <FontAwesomeIcon className='icon' icon={faHtml5} />
                  <FontAwesomeIcon className='icon' icon={faCss3Alt} />
                  <FontAwesomeIcon className='icon' icon={faJs} />
                  <FontAwesomeIcon className='icon' icon={faPhp} />
                  <FontAwesomeIcon className='icon' icon={faLaravel} />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div ref={about} className='vh-100'>

      </div>
      
      <div className='vh-100'></div>
    </div>
  );
}

export default App;
