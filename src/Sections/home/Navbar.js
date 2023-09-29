import React,{ useState, useEffect } from 'react'
import './Navbar.css'

const Navbar = () => {
    const [activeBtnNav, setActiveBtnNav] = useState(false);
    const [wrapSideBar, setwrapSideBar] = useState(false);
    const [btnContent, setBtnContent] = useState(<i className="bi bi-ui-radios-grid text-light"></i>);

    useEffect(() => {

        const handleScroll = () => {

            const scrollTop = window.scrollY;
            if(scrollTop > 200) setActiveBtnNav(true);
            else setActiveBtnNav(false);

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
            setBtnContent(<i className="bi bi-ui-radios-grid text-light"></i>);
        }
    }

    return (
        <>
            <div className='navbar px-5 position-absolute w-100 top-0 d-flex align-items-end justify-content-between'>
                <div>
                    <i className="bi bi-credit-card-2-front me-1"></i> Created by Krzkn
                </div>
                <div>
                    <a href='#awdc' className='bg-dark shadow text-light p-1 px-2 rounded-4'>Home</a>
                    <a href='#awda' className='text-black'>Porto</a>
                    <a href='#awdw' className='text-black'>About</a>
                    <a href='#awdd' className='text-black'>Contact</a>
                </div>
            </div>

            <div onClick={() => handleSideBar(!wrapSideBar)} className={`btn-nav ${activeBtnNav && 'active'} d-flex justify-content-center align-items-center rounded-circle p-3 position-fixed ${!wrapSideBar && 'shadow'} btn`}>
                {btnContent}
            </div>

            <div className={`wrap-sidebar ${wrapSideBar && 'active'} position-fixed d-flex justify-content-end w-100 h-100`}>
                <div className='h-100 w-100 position-relative'>
                    <div className={`sidebar ${wrapSideBar && 'active'} position-absolute h-100`}>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar