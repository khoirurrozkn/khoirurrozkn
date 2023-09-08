import React,{ useState, useEffect, useRef } from 'react';
import './App.css';
import Navbar from './Sections/Navbar';
import Header from './Sections/Header';
import About from './Sections/About';
import Porto from './Sections/Porto';
import Recent from './Sections/Recent';
import Contact from './Sections/Contact';
import Footer from './Sections/Footer';

function App(){
  const [scroll, setScroll] = useState(0);
  const [navActive, setNavActive] = useState(false);
  const [section, setSection] = useState(0);
  const header = useRef(null);
  const about = useRef(null);
  const porto = useRef(null);
  const recent = useRef(null);
  const contact = useRef(null);

  useEffect(() => {
    // Fungsi ini akan dipanggil setiap kali komponen di-render ulang atau ada perubahan dalam state atau props
    function handleScroll() {
      // Mendapatkan jumlah scroll vertikal dari window
      const scrollTop = window.scrollY;
      setScroll(scrollTop);
    }

    // Menambahkan event listener untuk mengikuti scroll
    window.addEventListener('scroll', handleScroll);

    // Membersihkan event listener saat komponen tidak lagi terlihat atau di-unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (
      header.current &&
      about.current &&
      porto.current &&
      recent.current &&
      contact.current
    ) {
      if (scroll >= contact.current.offsetTop) {
        setSection(5);
      } else if (scroll >= recent.current.offsetTop) {
        setSection(4);
      } else if (scroll >= porto.current.offsetTop) {
        setSection(3);
      } else if (scroll >= about.current.offsetTop - 250) {
        setSection(2);

        setNavActive(true);
      } else {
        setSection(1);

        setNavActive(false);
      }
    }
  }, [scroll]);

  return(
    <>
      <div className='container-fluid position-relative m-0 p-0'>

        <Navbar navActive={navActive} section={section}/>

        <div id='header' ref={header} className='vh-100 position-relative overflow-hidden d-flex justify-content-center align-items-center'>
          <Header/>
        </div>

        <div id='about' ref={about} style={{ minHeight: '100vh' }} className='overflow-hidden'>
          <About about={about} />
        </div>

        <div id='porto' ref={porto} style={{ minHeight: '100vh' }} className='position-relative overflow-hidden'>
          <Porto/>
        </div>
        
        <div id='recent' ref={recent} className='vh-100'>
          <Recent />
        </div>

        <div id='contact' ref={contact} className='vh-100'>
          <Contact />
        </div>

        <Footer />

      </div>
    </>  
    )
}

export default App;