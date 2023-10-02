import React from 'react'
import './Footer.css'

const Footer = (props) => {
    return (
        <>
            <div style={props.page === 'contact' ? {height: 'auto'} : {}} className='footer position-relative d-flex flex-wrap justify-content-center align-items-center'>

                {props.page === 'home' &&
                    <svg className='w-100' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#00171F" fillOpacity="1" d="M0,64L48,69.3C96,75,192,85,288,122.7C384,160,480,224,576,250.7C672,277,768,267,864,250.7C960,235,1056,213,1152,213.3C1248,213,1344,235,1392,245.3L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                    </svg>
                }

                {/* {props.page === 'about' &&
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#FFFFFF" fillOpacity="1" d="M0,128L48,154.7C96,181,192,235,288,256C384,277,480,267,576,234.7C672,203,768,149,864,154.7C960,160,1056,224,1152,261.3C1248,299,1344,309,1392,314.7L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                    </svg>
                } */}

                {props.page !== 'contact' &&
                    <div className='wrap-contact position-relative text-light'>
                        <p>
                            Shall we 
                        </p>
                        <p>
                            collaborate? 
                        </p>
                        <div>
                            <a href='http://localhost:3000/khoirurrozkn/#contact'  className='border border-warning btn rounded-5 text-light shadow'>
                                khoirurrozkn@gmail.com
                            </a> 
                        </div>
                        <div>
                            <a href="https://api.whatsapp.com/send?phone=6282139306484&text=Hallo%20Khoirurr..." target='blank' className='border border-warning btn rounded-5 text-light shadow'>
                                +62 8213 9306 484
                            </a>
                        </div>

                        <div className='wrap-nav-contact text-center position-absolute'>
                            <div className='w-100'>
                                Send an email directly, through the contact page.
                            </div>
                            <div className='d-flex w-100 justify-content-center'>
                                <a href='http://localhost:3000/khoirurrozkn/#contact' className='bg-warning btn d-flex align-items-center rounded-circle text-black shadow'>
                                    Go to Contact
                                </a>
                            </div>
                        </div>
                    </div>
                }
                <div className='bottom d-flex justify-content-between align-items-center w-100 text-secondary'>
                    <div>
                        <p className='title m-0 text-light text-opacity-75'>Socials</p>
                        <a href='https://www.instagram.com/khoirurrozkn/' target='blank' className='text-light'>Instagram</a>
                    </div>

                    <div>
                        <p className='title m-0 text-light text-opacity-75'>Created by</p>
                        <p className='m-0 text-light'>khoirurrozkn 2023</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer