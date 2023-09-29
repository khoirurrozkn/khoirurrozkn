import React,{ useState, useEffect } from 'react'
import './Navbar.css'

const Navbar = () => {
    const [activeBtnNav, setActiveBtnNav] = useState(false);
    const [sideBar, setSideBar] = useState(false);

    useEffect(() =>{
        function handleScroll() {
          const scrollTop = window.scrollY;
          if(scrollTop > 200) setActiveBtnNav(true);
          else setActiveBtnNav(false);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if(sideBar) document.body.style.overflow = 'hidden';
    }, [sideBar])

    const handleSideBar = (bool) => {
        setSideBar(bool)
        if(bool) document.body.classList.add('overflow-hidden');
        else document.body.classList.remove('overflow-hidden');
    }

    return (
        <>
            <div className='navbar px-5 position-absolute w-100 top-0 d-flex align-items-end justify-content-between border border-danger'>
                <div className='border border-black'>
                    <i className="bi bi-credit-card-2-front me-1"></i> Created by Khoirurrozkn
                </div>
                <div className='border border-danger'>
                    <a href='#' className='bg-dark shadow text-light p-1 px-2 rounded-4'>Home</a>
                    <a href='#' className='text-black'>Porto</a>
                    <a href='#' className='text-black'>About</a>
                    <a href='#' className='text-black'>Contact</a>
                </div>
            </div>

            <div onClick={() => handleSideBar(true)} className={`btn-nav ${activeBtnNav && 'active'} bg-dark d-flex justify-content-center align-items-center rounded-circle p-3 position-fixed shadow btn`}>
                <i className="bi bi-ui-radios-grid text-light"></i>
            </div>

            <div className={`wrap-sidebar ${sideBar && 'active'} position-fixed d-flex justify-content-end w-100 h-100 bg-black bg-opacity-25`}>
                <div className='sidebar h-100 bg-dark'>

                </div>
            </div>
        </>
    )
}

export default Navbar