import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div data-aos={window.innerWidth > 1024 && 'fade-up'} className='header overflow-hidden position-relative d-flex flex-wrap justify-content-evenly'>
            <div className='photo-opening shadow'>
            </div>

            <div className='opening'>
                <h1><b>
                    An enthusiastic <b>web developer</b> from indonesia
                </b></h1>
                <p>
                    Enthusiastic web developer hailing from Indonesia, 
                    devoted to crafting user-friendly digital experiences. 
                    Let's turn your vision into reality
                </p>
            </div>
            

            <div className='info m-0 position-absolute translate-middle start-50 w-100'>
                Moch Khoirur Rozikin | Freelancer | Website developer
            </div>

        </div>
    )
}

export default Header