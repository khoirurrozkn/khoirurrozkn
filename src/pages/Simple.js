import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Simpel.css';
import profile from '../img/fotoProfil.png';
import tentangSaya from '../img/tentangSaya.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import kukiGames from '../img/kukigames.webp';
import weatherApp from '../img/weatherapp.jpg';

const Simple = () => {
  const [ navActive, setNavActive ] = useState('');
  const [ scrollPosition, setScrollPosition ] = useState(0);

  const beranda = useRef(null);
  const saya = useRef(null);
  const portofolio = useRef(null);
  const skill = useRef(null);
  const kontak = useRef(null);
  const blog = useRef(null);

  useEffect(() => {
    if( saya.current && portofolio.current && skill.current && kontak.current && blog.current ){

      if( scrollPosition >= blog.current.offsetTop ){
        setNavActive('blog');
      }else if( scrollPosition >= kontak.current.offsetTop ){
        setNavActive('kontak');
      }else if ( scrollPosition >= skill.current.offsetTop ) {
        setNavActive('skill');
      } else if ( scrollPosition >= portofolio.current.offsetTop ) {
        setNavActive('portofolio');
      } else if ( scrollPosition >= saya.current.offsetTop ) {
        setNavActive('saya');
      } else{
        setNavActive('beranda');
      }

    }
  }, [scrollPosition]);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  },[])

  return (
    <>
    <div className='container-fluid p-0'>
      <Navbar 
        navActive={navActive} 
        beranda={beranda}
        saya={saya}
        portofolio={portofolio}
        skill={skill}
        kontak={kontak}
        blog={blog}
      />
      <div id='berandaSimpel' ref={beranda} className='vh-100 d-flex position-relative align-items-center justify-content-center'>

        <div className='svg w-100 position-absolute top-0'>
          <div className='coloring'></div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#A2D9FF" fill-opacity="1" d="M0,96L48,112C96,128,192,160,288,149.3C384,139,480,85,576,74.7C672,64,768,96,864,128C960,160,1056,192,1152,213.3C1248,235,1344,245,1392,250.7L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        </div>

        <div className='nama position-relative'>
          <h1 className='m-0' style={{fontWeight: '100'}}>Saya</h1>
          <h1 style={{zIndex: '2'}} className='nickname m-0 position-relative'><b>Khoirurrozkn</b></h1>
          <div>
            <p>
              Seorang mahasiswa dan freelancer yang menyediakan pengembang web untuk semua bisnis
              dengan pengalaman lebih dari 1 tahun.
            </p>
          </div>
        </div>

        <div className='position-absolute translate-middle start-50 top-50'>
          <div className='fotoProfil position-relative'>
            <div className='bg shadow rounded-circle translate-middle start-50 position-absolute'></div>
            <img style={{zIndex: '5'}} className='position-relative' src={profile} alt='foto profil'></img>
            <p className='text-center shadow'>Website Developer</p>
          </div>
        </div>

        <div style={{zIndex: '5'}} className='visi position-relative d-flex justify-content-center'>
          <div>
            <p className='mb-1'>Tawaran</p>
            <h5>
              Ayo kita wujudkan produk pemrograman berkualitas
              melalui layanan yang saya sediakan.
            </h5>
          </div>
          
        </div>
      </div>

      <div id='sayaSimpel' ref={saya} className='position-relative d-flex justify-content-evenly align-items-center'>

        <div className='bg bg1 position-absolute rounded-circle'></div>
        {/* <div className='bg bg2 position-absolute rounded-circle'></div>
        <div className='bg bg3 position-absolute rounded-circle'></div> */}
        <div className='bg bg4 position-absolute rounded-circle'></div>

        <div className='foto position-relative'>
          <img src={tentangSaya} alt='Saya' className='shadow'></img>
        </div>

        <div className='deskripsi position-relative'>

          <div className='bgText rounded-4 shadow'>
            <div className='mb-3 d-flex align-items-center'>
              <div className='nomer rounded-circle d-flex align-items-center justify-content-center'>
                <h3 className='m-0'>1</h3>
              </div>
              <h3 className='m-0'> Ringkasan Profil</h3>
            </div>
            <p className='m-0'>
              <span className='paragraf'>Nama</span> saya Moch Khoirur Rozikin, bertempat tinggal di surabaya, 
              Saya seorang pengembang perangkat lunak yang berfokus pada pengembangan aplikasi web. 
              Pengalaman dalam mengembangkan solusi kustom sesuai dengan kebutuhan klien.
            </p>
          </div>

          <div className='bgText rounded-4 shadow'>
            <div className='mb-3 d-flex align-items-center'>
              <div className='nomer rounded-circle d-flex align-items-center justify-content-center'>
                <h3 className='m-0'>2</h3>
              </div>
              <h3 className='m-0'> Pengalaman Kerja</h3>
            </div>
            <p className='m-0'>
              <span className='paragraf'>Pengembang</span> Perangkat Lunak, XYZ Solutions <br />
              Periode: Mei 20XX - Sekarang <br />
              Mengembangkan aplikasi web klien berdasarkan spesifikasi yang diberikan.
              Berkolaborasi dengan tim desain untuk menghasilkan antarmuka yang menarik dan responsif.
            </p>
          </div>

          <div className='bgText rounded-4 shadow'>
            <div className='mb-3 d-flex align-items-center'>
              <div className='nomer rounded-circle d-flex align-items-center justify-content-center'>
                <h3 className='m-0'>3</h3>
              </div>
              <h3 className='m-0'> Pendidikan</h3>
            </div>
            <p className='m-0'>
              <span className='paragraf'>Mahasiswa</span> Teknik Informatika, ITATS. <br />
              Semester 3.
            </p>
          </div>


        </div>

      </div>

      <div id='portofolioSimpel' ref={portofolio} className='position-relative overflow-hidden'>

        <div className='bg1 bg position-absolute rounded-circle'></div>
        <div className='bg2 bg position-absolute rounded-circle'></div>

        <h2 className='text-center position-realtive'>Explore Projek Saya...</h2>
        <p className='text text-center m-0 position-relative'>
          Berikut adalah beberapa projek yang saya kerjakan
          dengan menggunakan teknologi react js dan laravel silahkan di klik untuk mengetahui aplikasi
          secara lebih lanjut.
        </p>

        <div className='wrapPortofolio d-flex justify-content-evenly align-items-center position-relative'>

          <a href='https://kukigames.vercel.app' target='blank'>
            <img src={kukiGames} alt='kukiGames' className='foto rounded-5 shadow mb-1'></img>
            <h5 className='m-0 text-center'>e-Raport</h5>
            <p className='m-0 text-center'>Web apk Pendata nilai siswa </p>
          </a>

          <a href='https://kukiGames.vercel.app' target='blank'>
            <img src={kukiGames} alt='kukiGames' className='foto rounded-5 shadow mb-1'></img>
            <h5 className='m-0 text-center'>Download games</h5>
            <p className='m-0 text-center'>Web apk Rekomendasi serta Download game </p>
          </a>
          
          <a href='https://weather-sepia-phi.vercel.app/' target='blank'>
            <img src={weatherApp} alt='kukiGames' className='foto rounded-5 shadow mb-1'></img>
            <h5 className='m-0 text-center'>Kondisi cuaca</h5>
            <p className='m-0 text-center'>Web apk Pengecek kondisi cuaca </p>
          </a>


        </div>

      </div>
      <div id='skillSimpel' ref={skill} className='vh-100'>

      </div>
      <div id='kontakSimpel' ref={kontak}>

      </div>
      <div id='blogSimpel' ref={blog}>

      </div>
    </div>
    <Footer />
    </>
  )
}

export default Simple