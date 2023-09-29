import React from 'react'
import './Header.css'
import profile from '../../img/profile.png'
import profileBlur from '../../img/profileblur.jpg'
import LazyLoadImage from '../../Components/LazyLoadImage'

const Header = () => {
    return (
        <div className='header vh-100 position-relative d-flex justify-content-center align-items-center'>
            <div className='wrap-profile position-relative rounded-circle bg-dark shadow'>
                <LazyLoadImage placeholderSrc={profileBlur} src={profile} className='rounded-4'/>
            </div>
            <div className='background text-center position-absolute'>
                <h1>PORTO</h1>
                <h1>AB o UT</h1>
            </div>
        </div>
    )
}

export default Header