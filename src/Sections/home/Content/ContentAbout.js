import React from 'react'
import './ContentAbout.css'

const ContentAbout = () => {
    return (
        <div className='about overflow-hidden position-relative d-flex flex-wrap justify-content-evenly align-items-start'>
            <div className='desc-1'>
                <p className='m-0' data-aos={window.innerWidth > 1024 && 'fade-up'}>
                    Empowering <b>brands to shine</b> in the digital age. 
                    Together we will establish the new norm. 
                    No frills, always at the forefront.
                </p>
            </div>
            <div className='desc-2'>
                <p className='m-0' data-aos={window.innerWidth > 1024 && 'fade-up'}>
                    The fusion of my enthusiasm for <b>design</b>, 
                    <b>coding</b>, and <b>interaction</b> places me in a 
                    distinctive position in the realm of 
                    <b> web developer</b>.
                </p>
            </div>
            <div className='goto-about position-relative w-100 d-flex justify-content-between'>
                <a href='#awdaw' className='position-relative text-light d-flex align-items-center justify-content-center rounded-circle shadow'>
                    About Me ?
                </a>
                <div className='position-relative text-black d-flex justify-content-center align-items-center rounded-circle'>
                    Some Porto
                    <i className="bi bi-arrow-down-left ms-1"></i>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='position-absolute bottom-0 start-0 end-0'>
                <path fill="#00171F" fill-opacity="1" d="M0,288L48,261.3C96,235,192,181,288,170.7C384,160,480,192,576,224C672,256,768,288,864,250.7C960,213,1056,107,1152,101.3C1248,96,1344,192,1392,240L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
        </div>
    )
}

export default ContentAbout