import React from 'react'
import './ContentAbout.css'

const ContentAbout = () => {
    return (
        <>
        <div className='about bg-white position-relative d-flex flex-wrap justify-content-evenly align-items-start'>
            <div className='desc-1'>
                <p className='m-0' data-aos={window.innerWidth > 767 && 'fade-up'}>
                    Empowering <b>brands to shine</b> in the digital age. 
                    Together we will establish the new norm. 
                    No frills, always at the forefront.
                </p>
            </div>
            <div className='desc-2'>
                <p className='m-0' data-aos={window.innerWidth > 767 && 'fade-up'}>
                    The fusion of my enthusiasm for <b>design</b>, 
                    <b> coding</b>, and <b>interaction</b> places me in a 
                    distinctive position in the realm of 
                    <b> web developer</b>.
                </p>
            </div>

            <div className='goto-about w-100 position-relative d-flex justify-content-between'>
                <a href='http://localhost:3000/khoirurrozkn/#about' className='position-relative text-light d-flex align-items-center justify-content-center rounded-circle shadow'>
                    About Me ?
                </a>

                <div className='this-porto position-relative text-black d-flex justify-content-center align-items-center rounded-circle'>
                    Some Porto
                    <i className="bi bi-arrow-down-left ms-1"></i>
                </div>
            </div>
        </div>
        <svg className='bg-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00171F" fillOpacity="1" d="M0,64L48,69.3C96,75,192,85,288,112C384,139,480,181,576,202.7C672,224,768,224,864,192C960,160,1056,96,1152,80C1248,64,1344,96,1392,112L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </>
    )
}

export default ContentAbout