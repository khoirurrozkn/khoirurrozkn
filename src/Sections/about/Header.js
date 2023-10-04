import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div data-aos='fade-up' className='header d-flex flex-wrap justify-content-evenly align-items-center'>
            <div className='desc-opening border-black'>
                <p className='title'>My name is</p>
                <p className='title'>Moch Khoirur Rozikin</p>
                <div className='wrap-body position-relative d-flex flex-wrap justify-content-between border-top border-black border-opacity-25'>
                    <div className='wrap-icon position-absolute rounded-circle shadow'>
                        <i className="bi icon text-light text-opacity-75 bi-broadcast"></i>                    
                    </div>
                    <p>
                        I help businesses in website development with <b>customized solutions</b> and
                        <b> always prioritizing excellence</b>.
                    </p>
                    <div className='photo'>
                    </div>
                </div>
            </div>
        </div>
    )
}   

export default Header