import React,{ useState, useEffect, useRef } from 'react';
import Navbar from '../Components/Navbar';
import Header from '../Sections/Home/Header';
import About from '../Sections/Home/About';
import Porto from '../Sections/Home/Porto';
import Contact from '../Sections/Home/Contact';
import Footer from '../Sections/Home/Footer';
import Aos from 'aos';

function Home(){
  const [scroll, setScroll] = useState(0);
  const [navActive, setNavActive] = useState(false);
  const [section, setSection] = useState(0);
  
  const header = useRef(null);
  const about = useRef(null);
  const porto = useRef(null);
  const contact = useRef(null);

  useEffect(() =>{
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

        #about{
          padding-top: 12vh;
          padding-bottom: 5vh;
          border-top-right-radius: 25%;
        }

        #contact{
          padding-top: 6vh;
          padding-bottom: 4vh;
        }

        @media only screen and (min-device-width: 768px) and (max-device-width: 1024px){

        }

        @media only screen and (max-device-width: 767px){
          #about{
            padding-top: 10vh;
            border-top-right-radius: 100px;
          }

          #contact{
            padding-top: 8vh;
          }

        }
      `}
    </style>

      <div className='container-fluid position-relative m-0 p-0'>

        <Navbar navActive={navActive} section={section} header={header} about={about} porto={porto} contact={contact}/>

        <div id='header' ref={header} className='vh-100 position-relative overflow-hidden d-flex justify-content-center align-items-center'>
          <Header about={about} porto={porto} contact={contact}/>
        </div>

        <div data-aos='fade-up' id='about' ref={about} className='overflow-hidden'>
          <About about={about} />
        </div>

        <div data-aos='fade-up' style={{ userSelect: 'none', background: '#5E503F' }} id='porto' ref={porto} className='overflow-hidden'>
          <Porto/>
        </div>

        <div id='contact' style={{ background: '#5E503F' }} ref={contact}>
          <Contact />
        </div>

        <Footer />

      </div>
    </>  
    )
}

export default Home;