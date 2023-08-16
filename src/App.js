import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import { faCss3Alt, faHtml5, faInstagram, faJs, faLaravel, faPhp, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Lottie from 'react-lottie';
import animateHeader from './img/animateHeader.json';
import weatherApp from './img/weatherapp.jpg';
import kukiGames from './img/kukigames.webp';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Footer from './Components/Footer';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navActive, setNavActive] = useState('');
  const home = useRef(null);
  const about = useRef(null);
  const portofolio = useRef(null);

  useEffect(() => {
    if (home.current && about.current  && portofolio.current ) {
      if( scrollPosition >= portofolio.current.offsetTop ){
        setNavActive('porto')
      }else if( scrollPosition >= about.current.offsetTop ){
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

  const dataPorto = [
    {
      title: 'Weather App',
      body: 'Website Pengecek Kondisi cuaca di seluruh dunia',
      img: weatherApp,
      href: 'https://weather-sepia-phi.vercel.app/',
    },
    {
      title: 'Kuki Games',
      body: 'Website Rekomendasi dan download game',
      img: kukiGames,
      href: 'https://kukigames.vercel.app/',
    },
    {
      title: 'Weather App',
      body: 'Website Pengecek Kondisi cuaca di seluruh dunia',
      img: weatherApp,
      href: 'https://weather-sepia-phi.vercel.app/',
    },
  ]

  return (
    <div className='container-fluid m-0 p-0'>
      <Navbar navActive={navActive} />

      <div id='home' ref={home} className='vh-100 shadow'>
        
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

      <div id='about' ref={about}>
        <h1 className='text-center text-light m-0'><b>About me</b></h1>
        <div className='wrapAbout d-flex justify-content-evenly align-items-center'>
          <div className='foto shadow rounded-4'></div>
          <div className='description'>
            <h4 className='text-light'>Seorang Pengembang Web yang berdedikasi,
                berbasis di Surabaya, Indonesia.
            </h4>
            <p className='text-light text-opacity-75'>
              Sebagai Pengembang Web Junior, saya memiliki keterampilan yang mengesankan 
              dalam HTML, CSS, JavaScript, php. Saya mahir dalam merancang 
              dan menjaga website responsif yang menawarkan pengalaman pengguna yang lancar.
            </p>
          </div>
        </div>
        
      </div> 

      <div ref={portofolio} id='porto' style={{flexWrap: 'wrap'}} className='d-flex justify-content-center shadow'>
        <h1 className='w-100 text-light text-center'><b>Portofolio</b></h1>
        <p className='info text-light text-opacity-75 text-center'>Berikut adalah beberapa portofolio saya.</p>
        <div style={{flexWrap: 'wrap'}} className='wrapPorto d-flex justify-content-evenly'>

          {dataPorto.map((v,i) => (
            <a key={i} href={v.href} target='blank' className='box text-center rounded-4'>
              <img src={v.img} className='rounded-4 shadow' alt={v.title}></img>
              <p className='m-0 mt-3 text-light'><b>{v.title}</b></p>
              <div className='desc d-flex justify-content-center'>
                <p className='m-0 mt-1 text-light text-opacity-75'>{v.body}</p>
              </div>
            </a>
          ))}

        </div>
      </div>

      <div id='contact' style={{flexWrap: 'wrap'}} className='d-flex align-items-center justify-content-evenly'>
          <div className='w-100 mb-3 text-center'>
            <h1 className='text-light'><b>Kontak</b></h1>
            <p className='text-light text-opacity-75'>Mari mulai project bersama</p>
          </div>
          <div className='left d-flex justify-content-evenly'>
            <a className='text-center' href="https://api.whatsapp.com/send?phone=+6282139306484&text=hallo%20khoirur%20saya%20ingin%20bertanya%20mengenai%20project%20anda">
              <FontAwesomeIcon style={{color: 'rgb(29,148,18)'}} className='icon' icon={faWhatsapp} />
            </a>
            <a className='text-center' href="https://www.instagram.com/khoirurrozkn/">
              <FontAwesomeIcon style={{color: 'rgb(242,76,88)'}} className='icon' icon={faInstagram} />
            </a>
            <a className='text-center' href="mailto:irurkampus@gmail.com?subject=Pertanyaan%20Tentang%20Project">
              <FontAwesomeIcon className='icon text-primary' icon={faEnvelope} />
            </a>
          </div>
          <iframe className='maps rounded-4 shadow' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.3272459277446!2d112.76026341066246!3d-7.317087871918791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb1d58af8ff1%3A0x50a41159a084aaef!2sJl.%20Tenggilis%20Lama%20III%20A%20No.35%2C%20Tenggilis%20Mejoyo%2C%20Kec.%20Tenggilis%20Mejoyo%2C%20Surabaya%2C%20Jawa%20Timur%2060292!5e0!3m2!1sid!2sid!4v1692174317670!5m2!1sid!2sid" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      </div>
      <Footer />
    </div>
  );
}

export default App;