import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer position-relative'>
            <svg className='vw-100' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#00171F" fill-opacity="1" d="M0,64L48,69.3C96,75,192,85,288,122.7C384,160,480,224,576,250.7C672,277,768,267,864,250.7C960,235,1056,213,1152,213.3C1248,213,1344,235,1392,245.3L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            </svg>
            <div className='collaborate d-flex justify-content-center align-items-center'>
                <div className='wrap-contact position-relative text-light'>
                    <p>
                        Shall we 
                    </p>
                    <p>
                        collaborate? 
                    </p>
                    <div>
                        <a className='border border-warning btn rounded-5 text-light shadow'>
                            khoirurrozkn@gmail.com
                        </a> 
                    </div>
                    <div>
                        <a className='border border-warning btn rounded-5 text-light shadow'>
                            +62 8213 9306 484
                        </a>
                    </div>

                    <div className='wrap-nav-contact text-center position-absolute'>
                        <div className='w-100'>
                            Send an email directly, through the contact page.
                        </div>
                        <div className='d-flex w-100 justify-content-center'>
                            <a href='#contact' className='bg-warning btn d-flex align-items-center rounded-circle text-black shadow'>
                                Go to Contact
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bottom border-top border-secondary border-opacity-25 d-flex justify-content-center align-items-center position-absolute bottom-0 w-100 bg-black bg-opacity-25 text-secondary'>
                @2023, Khoirurrozkn
            </div>
        </div>
    )
}

export default Footer