import React,{ useState, useEffect } from 'react'
import './Navbar.css'
import DarkMode from './DarkMode';

const Navbar = (props) => {
    // const [activeBtnNav, setActiveBtnNav] = useState(false);
    const [wrapSideBar, setwrapSideBar] = useState(false);
    const [btnContent, setBtnContent] = useState("menu");

    // useEffect(() => {

    //     const handleScroll = () => {

    //         const scrollTop = window.scrollY;
    //         // if(window.innerWidth < 766){
    //             if(scrollTop > 200) setActiveBtnNav(true);
    //             else setActiveBtnNav(false);
    //         // }

    //     }

    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //       window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    const handleSideBar = (bool) => {
        setwrapSideBar(bool)
        if (bool) {
            document.body.classList.add('overflow-hidden');
            setBtnContent("close");
        } else {
            document.body.classList.remove('overflow-hidden');
            setBtnContent("menu");
        }
    }

    const isPage = 'active shadow p-1 px-3 rounded-4';
    const url = 'https://khoirurrozkn.github.io/khoirurrozkn/#';

    return (
        <>
            {/* <div className='navbar px-5 position-absolute w-100 top-0 d-flex align-items-end justify-content-between'> */}
            <div className='navbar px-5 fixed-top w-100 d-flex align-items-end justify-content-between'>

                <div>
                    khoirurrozkn
                </div>
                <div className='d-flex align-items-center'>
                    <a href={`${url}`} className={`${props.page === 'home' && isPage }`}>Home</a>
                    {/* <a href='http://localhost:3000/khoirurrozkn/' className={`${props.page === 'home' ? isPage : 'text-black'}`}>Home</a> */}
                    <a href={`${url}about`} className={`${props.page === 'about' && isPage}`}>About</a>
                    {/* <a href='http://localhost:3000/khoirurrozkn/#about' className={`${props.page === 'about' && isPage}`}>About</a> */}

                    <a href={`${url}porto`} className={`${props.page === 'porto' && isPage}`}>Porto</a>
                    {/* <a href='http://localhost:3000/khoirurrozkn/#porto' className={`${props.page === 'porto' && isPage}`}>Porto</a> */}

                    <a href={`${url}contact`} className={`${props.page === 'contact' && isPage}`}>Contact</a>
                    {/* <a href='http://localhost:3000/khoirurrozkn/#contact' className={`${props.page === 'contact' && isPage}`}>Contact</a> */}
                    
                </div>

            </div>

            {/* <div onClick={() => handleSideBar(!wrapSideBar)} className={`btn-nav ${activeBtnNav && 'active'} d-flex justify-content-center align-items-center rounded-circle p-3 position-fixed ${!wrapSideBar && 'shadow'} btn`}> */}
            <div onClick={() => handleSideBar(!wrapSideBar)} className='btn-nav position-fixed'>
                <p className={`m-0 ${wrapSideBar && 'text-light'}`}>{btnContent}</p>
            </div>

            <div className={`wrap-sidebar ${wrapSideBar && 'active'} position-fixed d-flex justify-content-center align-items-center w-100 h-100`}>
                {/* <div className='h-100 w-100 position-relative'> */}
                    {/* <div className={`sidebar ${wrapSideBar && 'active'} d-flex justify-content-center align-items-center position-absolute h-100`}> */}
                        <div className='box-sidebar'>
                            <p className='m-0'>
                                Navigation
                            </p>
                            <a href={`${url}`} className={`${props.page === 'home' && 'active'} d-block`}>
                            {/* <a href="http://localhost:3000/khoirurrozkn/" className={`${props.page === 'home' && 'active'} d-block`}> */}
                                Home
                            </a>
                            <a href={`${url}about`} className={`${props.page === 'about' && 'active'} d-block`}>
                            {/* <a href="http://localhost:3000/khoirurrozkn/#about" className={`${props.page === 'about' && 'active'} d-block`}> */}
                                About
                            </a>
                            <a href={`${url}porto`} className={`${props.page === 'porto' && 'active'} d-block`}>
                            {/* <a href='http://localhost:3000/khoirurrozkn/#porto' className={`${props.page === 'porto' && 'active'} d-block`}> */}
                                Porto
                            </a>
                            <a href={`${url}contact`} className={`${props.page === 'contact' && 'active'} d-block`}>
                            {/* <a href="http://localhost:3000/khoirurrozkn/#contact" className={`${props.page === 'contact' && 'active'} d-block`}> */}
                                Contact
                            </a>
                            <p>
                                Socials
                            </p>
                            <a href='https://www.instagram.com/khoirurrozkn/' target='blank'>Instagram</a>
                        </div>
                    {/* </div> */}
                {/* </div> */}
            </div>
        </>
    )
}

export default Navbar