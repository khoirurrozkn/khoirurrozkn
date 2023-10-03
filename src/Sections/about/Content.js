import React, { useEffect, useRef } from 'react'
import './Content.css'
import handleGsap from '../../Utils/handleGsap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBootstrap, faCss3Alt, faHtml5, faJsSquare, faLaravel, faPhp, faReact } from '@fortawesome/free-brands-svg-icons'

const Content = () => {
    const boxIcon = useRef(null);

    useEffect(() => {
        if (window.innerWidth > 1025) {
            handleGsap(boxIcon, boxIcon, 0, 100, 'top 80%', 'top 30%');
        }
    
    },[]);
    

    return (
        <>
        <div className='content bg-white'>
            <h1 className='text-center' data-aos='fade-up'>
                Available to help you with...
            </h1>
            <div className='wrap-desc d-flex flex-wrap w-100 justify-content-evenly'>
                <div className='wrap-photo wrap-photo-1' data-aos='fade-up'>
                    
                    <div className='shadow'></div>
                    <h2>Styling</h2>
                    With a strong website, I create robust and user-friendly digital designs. 
                    Building a strong company brand is the foundation of every successful website.
                </div>
                <div className='wrap-photo wrap-photo-2' data-aos='fade-up'>
                    
                    <div className='shadow'></div>

                    <h2>Development</h2>
                    I build expandable websites from the ground up that are integrated with 
                    responsiveness. My focus is on both user interface and data management.
                </div>
                <div className='wrap-photo wrap-photo-3' data-aos='fade-up'>
                    
                    <div className='shadow'></div>

                    <h2>Marketing</h2>
                    My strategies are tailored to effectively reach your target market. 
                    Through responsive client-side and robust server-side approaches, I aim to maximize 
                    the visibility and impact of your brand.
                </div>
            </div>
            <div ref={boxIcon} className='icon d-flex flex-wrap justify-content-evenly'>
                <FontAwesomeIcon style={{color: '#FF5733'}} icon={faHtml5} />
                <FontAwesomeIcon style={{color: '#F7E01D'}} icon={faJsSquare} />
                <FontAwesomeIcon style={{color: '#379BD9'}} icon={faCss3Alt} />
                <FontAwesomeIcon style={{color: '#767BB2'}} icon={faPhp} />
                <FontAwesomeIcon style={{color: '#65D6FB'}} icon={faReact} />
                <FontAwesomeIcon style={{color: '#7911F8'}} icon={faBootstrap} />
                <FontAwesomeIcon style={{color: '#F55347'}} icon={faLaravel} />
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" style={{backgroundColor: '#1C1D20'}} viewBox="0 0 1440 320">
            <path fill="#FFFFFF" fillOpacity="1" d="M0,128L48,154.7C96,181,192,235,288,256C384,277,480,267,576,234.7C672,203,768,149,864,154.7C960,160,1056,224,1152,261.3C1248,299,1344,309,1392,314.7L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
        </>
    )
}

export default Content