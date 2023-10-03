import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className='header d-flex flex-wrap justify-content-evenly align-items-center'>
            <div className='desc-opening border-black'>
                <p className='title'>My name is</p>
                <p className='title'>Moch Khoirur Rozikin</p>
                <div className='wrap-body d-flex flex-wrap justify-content-between border-top border-black border-opacity-25'>
                    <p>
                         I help businesses in website development with <b>customized solutions</b> and
                        <b> always prioritizing excellence</b>.
                    </p>
                    <div className='shadow'>
                    </div>
                </div>
            </div>
        </div>
    )
}   

export default Header