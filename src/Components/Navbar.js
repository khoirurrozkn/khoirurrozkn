import React,{ useState, useEffect } from 'react'
import './Navbar.css'

const Navbar = (props) => {
    const [activeBtnNav, setActiveBtnNav] = useState(false);
    const [wrapSideBar, setwrapSideBar] = useState(false);
    const [btnContent, setBtnContent] = useState(<i className="bi bi-list text-light"></i>);

    useEffect(() => {

        const handleScroll = () => {

            const scrollTop = window.scrollY;
            // if(window.innerWidth < 766){
                if(scrollTop > 200) setActiveBtnNav(true);
                else setActiveBtnNav(false);
            // }

        }

        window.addEventListener('scroll', handleScroll);

        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleSideBar = (bool) => {
        setwrapSideBar(bool)
        if (bool) {
            document.body.classList.add('overflow-hidden');
            setBtnContent(<i className="bi bi-x-lg text-light"></i>);
        } else {
            document.body.classList.remove('overflow-hidden');
            setBtnContent(<i className="bi bi-list text-light"></i>);
        }
    }

    const isPage = 'active bg-dark shadow text-light p-1 px-2 rounded-4';

    return (
        <>
            <div className='navbar px-5 position-absolute w-100 top-0 d-flex align-items-end justify-content-between'>
                <div>
                    Created by Krzkn
                </div>
                <div>
                    <a href='http://localhost:3000/khoirurrozkn' className={`${props.page === 'home' ? isPage : 'text-black'}`}>Home</a>
                    <a href='http://localhost:3000/khoirurrozkn/#about' className={`${props.page === 'about' ? isPage : 'text-black'}`}>About</a>
                    <a href='http://localhost:3000/khoirurrozkn/#porto' className={`${props.page === 'porto' ? isPage : 'text-black'}`}>Porto</a>
                    <a href='http://localhost:3000/khoirurrozkn/#contact' className={`${props.page === 'contact' ? isPage : 'text-black'}`}>Contact</a>
                </div>
            </div>

            <div onClick={() => handleSideBar(!wrapSideBar)} className={`btn-nav ${activeBtnNav && 'active'} d-flex justify-content-center align-items-center rounded-circle p-3 position-fixed ${!wrapSideBar && 'shadow'} btn`}>
                {btnContent}
            </div>

            <div className={`wrap-sidebar ${wrapSideBar && 'active'} position-fixed d-flex justify-content-end w-100 h-100`}>
                <div className='h-100 w-100 position-relative'>
                    <div className={`sidebar ${wrapSideBar && 'active'} d-flex justify-content-center align-items-center position-absolute h-100`}>
                        <div className='box-sidebar text-light'>
                            <p className='text-light text-opacity-75 m-0'>
                                Navigation
                            </p>
                            <a href='http://localhost:3000/khoirurrozkn' className={`${props.page === 'home' && 'active'}`}>
                                Home
                            </a>
                            <a href='http://localhost:3000/khoirurrozkn/#about' className={`${props.page === 'about' && 'active'}`}>
                                About
                            </a>
                            <a href='http://localhost:3000/khoirurrozkn/#porto' className={`${props.page === 'porto' && 'active'}`}>
                                Porto
                            </a>
                            <a href='http://localhost:3000/khoirurrozkn/#contact' className={`${props.page === 'contact' && 'active'}`}>
                                Contact
                            </a>
                            <p className='text-light text-opacity-75'>
                                Socials
                            </p>
                            <a href='https://www.instagram.com/khoirurrozkn/' className='text-light' target='blank'>Instagram</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar