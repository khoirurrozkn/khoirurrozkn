import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import { faCss3Alt, faHtml5, faJs, faLaravel, faPhp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Lottie from 'react-lottie';
import animateHeader from './img/animateHeader.json';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navActive, setNavActive] = useState('');
  const home = useRef(null);
  const about = useRef(null);
  const portofolio = useRef(null);

  useEffect(() => {
    if (home.current && about.current ) {
      if( scrollPosition >= about.current.offsetTop ){
        setNavActive('about');
      }else{
        setNavActive('home');
      }
      
    }
  }, [scrollPosition, navActive]);

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

  const styleLottie = {
    minHeight: '240px',
    minWidth: '240px',
  }

  return (
    <div className='container-fluid m-0 p-0'>
      <Navbar navActive={navActive} />

      <div id='home' ref={home} className='vh-100'>
        
        <div className='d-flex h-100 w-100 align-items-center'>
          <div className='row w-100 m-0 align-items-center'>
            <div className='col col1 p-0 col-lg-6 d-flex align-items-center justify-content-center order-sm-1 order-md-1 order-lg-2'>
              <div className='wrapFoto d-flex align-items-end justify-content-center'>
                <Lottie options={defaultOptions} style={styleLottie}  />
              </div>
            </div>
            <div
              className='col col2 col-lg-6 d-flex align-items-center justify-content-center order-sm-2 order-md-2 order-lg-1'
            >
              <div className='text-light'>
                <h1>Portofolio</h1>
                <p>Hi, I'm Khoirurrozkn. A passionate website Developer based in Surabaya, Indonesia.</p>
                <div className='d-flex justify-content-evenly'>
                  <FontAwesomeIcon style={{color: 'rgb(227,75,36)'}} className='icon' icon={faHtml5} />
                  <FontAwesomeIcon style={{color: '#0B73B7'}} className='icon' icon={faCss3Alt} />
                  <FontAwesomeIcon style={{color: 'rgb(227,161,39)'}} className='icon' icon={faJs} />
                  <FontAwesomeIcon style={{color: 'rgb(137,147,189)'}} className='icon' icon={faPhp} />
                  <FontAwesomeIcon style={{color: 'rgb(255,42,28)'}} className='icon' icon={faLaravel} />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div id='about' ref={about} className='border border-danger'>
        <h1 className='text-center text-light m-0'><b>About me</b></h1>
        <div className='wrapAbout d-flex justify-content-evenly align-items-center'>
          <div className='foto shadow rounded-4'></div>
          <div className='description'>
            <h4 className='text-light'>Seorang Pengembang Web yang berdedikasi,
                berbasis di Surabaya, Indonesia.
            </h4>
            <p className='text-light text-opacity-75'>
              Sebagai Pengembang Web Junior, saya memiliki keterampilan yang mengesankan 
              dalam HTML, CSS, JavaScript, React. Saya mahir dalam merancang 
              dan menjaga website responsif yang menawarkan pengalaman pengguna yang lancar. 
              Keahlian saya terletak pada menciptakan antarmuka yang dinamis dan menarik melalui
              penulisan kode yang bersih dan dioptimalkan.
            </p>
          </div>
        </div>
        
      </div> 

      <div ref={portofolio} className='vh-100'>

      </div>
    </div>
  );
}

export default App;