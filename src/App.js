import React,{ useState, useEffect, useRef } from 'react';
import Navbar from './Components/Navbar';
import Header from './Sections/Header';
import About from './Sections/About';
import Porto from './Sections/Porto';
import Contact from './Sections/Contact';
import Footer from './Sections/Footer';
import Aos from 'aos';

function App(){
  const [scroll, setScroll] = useState(0);
  const [navActive, setNavActive] = useState(false);
  const [section, setSection] = useState(0);
  const header = useRef(null);
  const about = useRef(null);
  const porto = useRef(null);
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
    Aos.init({
      duration: 1500,
    });
  },[])

  useEffect(() => {
    if (
      header.current &&
      about.current &&
      porto.current &&
      contact.current
    ) {
      if (scroll >= contact.current.offsetTop) {
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
    <style>
      {`
        @import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Oswald:wght@200;300;500&display=swap');
        @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css");

        *{
          font-family: 'Oswald', sans-serif;
          font-weight: 200;
        }

        ::-webkit-scrollbar {
          width: 5px;
          height: 0px;
        }

        ::-webkit-scrollbar-track {
          background-color: transparent; 
        }

        ::-webkit-scrollbar-thumb {
          background-color: #ffffff3b;
          border-radius: 10px;
        }

        ::-moz-scrollbar {
          width: 5px;
          height: 0px;
        }

        ::-moz-scrollbar-track {
          background-color: transparent; 
        }

        ::-moz-scrollbar-thumb {
          background-color: #ffffff3b;
          border-radius: 10px;
        }

        ::-webkit-scrollbar-corner {
          background: none;
        }

        a{
          text-decoration: none !important;
        }

        .btn{
          opacity: 0.75;
          transition: 0.5s;
        }

        .btn:hover{
          transform: scale(1.1);
          opacity: 100 !important;
        }

        .btn.active{
          opacity: 1;
          transform: scale(1.1);
        }

        .hidePc{
          display: none;
        }

        #about{
          padding-top: 12vh;
          padding-bottom: 40px;
        }

        #porto{
          padding-top: 12vh;
          padding-bottom: 1vh;
        }

        #contact{
          padding-top: 12vh;
          padding-bottom: 4vh;
        }

        @media only screen and (min-device-width: 768px) and (max-device-width: 1024px){
          .hideSp{
            display: none;
          }

          .hidePc{
            display: block;
          }

          #about{
            padding-top: 20vh;
          }

          #porto{
            padding-top: 20vh;
          }

          #contact{
            padding-top: 20vh;
          }
        }

        @media only screen and (max-device-width: 767px){
          .hideSp{
            display: none;
          }

          .hidePc{
            display: block;
          }

          #about{
            padding-top: 10vh;
          }

          #porto{
            padding-top: 12vh;
          }

          #contact{
            padding-top: 10vh;
          }
        }
      `}
    </style>

      <div className='container-fluid position-relative m-0 p-0'>

        <Navbar navActive={navActive} section={section}/>

        <div id='header' ref={header} className='vh-100 position-relative overflow-hidden d-flex justify-content-center align-items-center'>
          <Header/>
        </div>

        <div data-aos='fade-up' data-aos-delay={window.innerWidth > 780 && '200' } id='about' ref={about} className='overflow-hidden rounded-5'>
          <About about={about} />
        </div>

        <div data-aos='fade-up' style={{ userSelect: 'none' }} data-aos-delay={window.innerWidth > 780 && '200' } id='porto' ref={porto} className='overflow-hidden'>
          <Porto/>
        </div>

        <div id='contact' ref={contact}>
          <Contact />
        </div>

        <Footer />

      </div>
    </>  
    )
}

export default App;