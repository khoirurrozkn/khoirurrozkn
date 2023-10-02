import React,{ useEffect, useRef } from 'react'
import './Header.css'
import handleGsap from '../../Utils/handleGsap';

const Header = () => {
    const descOpening = useRef(null);

    useEffect(() => {
        if (window.innerWidth > 1025) {
            handleGsap(descOpening, descOpening, 0, 200, 'top 10%', 'top -30%');
        }
    
    },[]);

    return (
        <div className='header vh-100 d-flex flex-wrap justify-content-evenly align-items-center'>
            <div className='photo-opening shadow'>            
            </div>
            <div ref={descOpening} className='desc-opening border-black'>
                My name`s <b>Moch Khoirur Rozikin</b> I help businesses in website development with <b>customized solutions</b>. 
                With every endeavor, I propel my efforts to new horizons, <b>always prioritizing excellence</b>.
            </div>
        </div>
    )
}   

export default Header