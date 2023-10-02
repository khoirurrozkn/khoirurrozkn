import React from 'react'
import './ContentAbout.css'

const ContentAbout = () => {

    const svg = `
        <svg id="wave" style={{ transform:'rotate(0deg)', transition: '0.3s'}} viewBox="0 0 1440 270" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(0, 23, 31, 1)" offset="0%"></stop><stop stop-color="rgba(0, 23, 31, 1)" offset="100%"></stop></linearGradient></defs><path style={{transform: 'translate(0, 0px)', opacity: '1'}} fill="url(#sw-gradient-0)" d="M0,162L60,144C120,126,240,90,360,81C480,72,600,90,720,121.5C840,153,960,198,1080,180C1200,162,1320,81,1440,49.5C1560,18,1680,36,1800,72C1920,108,2040,162,2160,175.5C2280,189,2400,162,2520,153C2640,144,2760,153,2880,148.5C3000,144,3120,126,3240,126C3360,126,3480,144,3600,130.5C3720,117,3840,72,3960,81C4080,90,4200,153,4320,153C4440,153,4560,90,4680,94.5C4800,99,4920,171,5040,171C5160,171,5280,99,5400,99C5520,99,5640,171,5760,166.5C5880,162,6000,81,6120,45C6240,9,6360,18,6480,58.5C6600,99,6720,171,6840,180C6960,189,7080,135,7200,117C7320,99,7440,117,7560,117C7680,117,7800,99,7920,76.5C8040,54,8160,27,8280,22.5C8400,18,8520,36,8580,45L8640,54L8640,270L8580,270C8520,270,8400,270,8280,270C8160,270,8040,270,7920,270C7800,270,7680,270,7560,270C7440,270,7320,270,7200,270C7080,270,6960,270,6840,270C6720,270,6600,270,6480,270C6360,270,6240,270,6120,270C6000,270,5880,270,5760,270C5640,270,5520,270,5400,270C5280,270,5160,270,5040,270C4920,270,4800,270,4680,270C4560,270,4440,270,4320,270C4200,270,4080,270,3960,270C3840,270,3720,270,3600,270C3480,270,3360,270,3240,270C3120,270,3000,270,2880,270C2760,270,2640,270,2520,270C2400,270,2280,270,2160,270C2040,270,1920,270,1800,270C1680,270,1560,270,1440,270C1320,270,1200,270,1080,270C960,270,840,270,720,270C600,270,480,270,360,270C240,270,120,270,60,270L0,270Z"></path></svg>
    `;

    return (
        <>
        <div className='about position-relative d-flex flex-wrap justify-content-evenly align-items-start'>
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

            <div className='goto-about w-100 d-flex justify-content-between'>
                <a href='http://localhost:3000/khoirurrozkn/#about' className='position-relative text-light d-flex align-items-center justify-content-center rounded-circle shadow'>
                    About Me ?
                </a>
                <div className='position-relative text-black d-flex justify-content-center align-items-center rounded-circle'>
                    Some Porto
                    <i className="bi bi-arrow-down-left ms-1"></i>
                </div>
            </div>
        </div>
        <div className='w-100' style={{ backgroundColor: 'rgba(255,255,255,0.750)'}}>
                <div dangerouslySetInnerHTML={{ __html: svg }} />
        </div>
        </>
    )
}

export default ContentAbout