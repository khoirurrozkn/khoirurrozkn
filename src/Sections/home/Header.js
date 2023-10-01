import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className={`header overflow-hidden position-relative d-flex flex-wrap justify-content-evenly ${window.innerWidth <= 1024 ? 'align-content-center' : 'align-items-center'}`}>
            <div className='photo-opening rounded-circle shadow'>
            </div>

            <div className='opening'>
                <h1><b>
                    An enthusiastic  web developer from indonesia
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