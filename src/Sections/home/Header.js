import React, { useEffect, useRef } from 'react'
import './Header.css'
import profile from '../../img/profile.png'
import profileBlur from '../../img/profileblur.jpg'
import LazyLoadImage from '../../Components/LazyLoadImage'
import handleGsap from '../../Utils/handleGsap'

const Header = () => {
    const photo = useRef(null);
    const background = useRef(null);
    const desc = useRef(null);

    useEffect(() => {
        if (window.innerWidth > 768) {
            handleGsap(background, desc, 0, 130, 'top 80%', 'top 30%');
            handleGsap(photo, desc, 0, 110, 'top 80%', 'top 30%');
        }
    
    },[]);

    return (
        <div className='header vh-100 overflow-hidden position-relative d-flex justify-content-center align-items-center'>
            <div ref={photo} className='wrap-profile position-relative rounded-circle bg-dark shadow'>
                <LazyLoadImage placeholderSrc={profileBlur} src={profile} className='rounded-5'/>
            </div>
            <div ref={background} className='background text-center position-absolute'>
                <h1>PORTO</h1>
                <h1>AB o UT</h1>
                <h1>CONTACT</h1>
            </div>
            <div ref={desc} className='desc position-absolute bottom-0 mb-5'>
                Moch Khoirur Rozikin | Frelancer | Web Developer
            </div>
        </div>
    )
}

export default Header