import React,{ useState, useEffect } from 'react'
import './Navbar.css'
import Magnetic from './Magnetic';

const Navbar = (props) => {
    // const [activeBtnNav, setActiveBtnNav] = useState(false);
    const [wrapSideBar, setwrapSideBar] = useState(false);
    const [btnContent, setBtnContent] = useState("menu");
    const [colorNav, setColorNav] = useState('');

    useEffect(() => {    
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if(props.content.current && props.promotion.current){

                if(scrollTop >= (props.footer.current.offsetTop - 40)) setColorNav('text-light')
                else if(scrollTop >= (props.promotion.current.offsetTop + 750)) setColorNav('text-black');
                else if(scrollTop >= (props.content.current.offsetTop - 150)) setColorNav('text-light');
                else setColorNav('text-black');

            }
        }

        
    
        window.addEventListener('scroll', handleScroll); // Menambahkan event listener untuk mendeteksi scroll.
    
        return () => {
            window.removeEventListener('scroll', handleScroll); // Membersihkan event listener saat komponen tidak lagi digunakan.
        };
    }, [props.content, props.footer, props.promotion]); 
    

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

    // const isPage = 'active shadow p-1 px-3 rounded-4';

    const url = 'https://khoirurrozkn.github.io/khoirurrozkn/#';

    return (
        <>
            {/* <div className='navbar px-5 position-absolute w-100 top-0 d-flex align-items-end justify-content-between'> */}
            <div className='navbar px-5 mt-4 fixed-top w-100 d-flex align-items-end justify-content-between'>

                <div className={`${colorNav}`}>
                    <i className="bi bi-c-circle"></i> khoirurrozkn
                </div>
                <div className='d-flex wrap-href align-items-center'>
                    <Magnetic >
                        <div>
                            <a href={`${url}`} className={`${props.page === 'home' && "active" } ${colorNav} hover`}>Home</a>
                        </div>
                        {/* <a href='http://localhost:3000/khoirurrozkn/' className={`${props.page === 'home' ? isPage : 'text-black'}`}>Home</a> */}
                    </Magnetic>

                    <Magnetic>
                        <div>
                            <a href={`${url}about`} className={`${props.page === 'about' && "active"} ${colorNav} hover`}>About</a>
                        </div>
                    </Magnetic>
                    {/* <a href='http://localhost:3000/khoirurrozkn/#about' className={`${props.page === 'about' && isPage}`}>About</a> */}

                    <Magnetic>
                        <div>
                            <a href={`${url}porto`} className={`${props.page === 'porto' && "active"} ${colorNav} hover`}>Porto</a>
                        </div>
                    </Magnetic>
                    {/* <a href='http://localhost:3000/khoirurrozkn/#porto' className={`${props.page === 'porto' && isPage}`}>Porto</a> */}

                    <Magnetic>
                        <div>
                            <a href={`${url}contact`} className={`${props.page === 'contact' && "active"} ${colorNav} hover`}>Contact</a>
                        </div>
                    </Magnetic>
                    {/* <a href='http://localhost:3000/khoirurrozkn/#contact' className={`${props.page === 'contact' && isPage}`}>Contact</a> */}
                    
                </div>

            </div>

            {/* <div onClick={() => handleSideBar(!wrapSideBar)} className={`btn-nav ${activeBtnNav && 'active'} d-flex justify-content-center align-items-center rounded-circle p-3 position-fixed ${!wrapSideBar && 'shadow'} btn`}> */}
            <div onClick={() => handleSideBar(!wrapSideBar)} className={`btn-nav position-fixed mt-4 ${colorNav}`}>
                <p className={`m-0 ${wrapSideBar && 'text-light'}`}>{btnContent}</p>
            </div>

            <div className={`wrap-sidebar ${wrapSideBar && 'active'} position-fixed d-flex justify-content-center align-items-center w-100 h-100`}>
                {/* <div className='h-100 w-100 position-relative'> */}
                    {/* <div className={`sidebar ${wrapSideBar && 'active'} d-flex justify-content-center align-items-center position-absolute h-100`}> */}
                        <div className='box-sidebar px-2'>
                            <p className='m-0'>
                                Navigation <i className='bi bi-arrow-down'></i>
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