import React,{ useState } from 'react'
import Footer from '../components/Footer'
import './Home.css';
import LightMode from '../components/LightMode';
import bingung from '../img/bingung.json';
import animasiLogo from '../img/animasiLogo.webp';
import interaktifLogo from '../img/interaktifLogo.webp';
import simpleLogo from '../img/simpleLogo.webp';
import Lottie from 'react-lottie';

const Home = () => {
    const [ isLight, setIsLight ] = useState(false);

    const toggleTheme = () => {
        if( isLight ){
            setIsLight(false);
        }else{
            setIsLight(true);
        }
    }

    const styleLottie = {
        maxWidth: '200px',
        maxHeight: '150px',
        cursor: 'arrow',
    };

    const optionsLottie = {
        loop: true,
        autoplay: true,
        animationData: bingung,
    };
    
    return (
        <>
        <div className='container-fluid position-relative overflow-hidden vh-100 d-flex align-items-center justify-content-center'>
            <div className='wrapThemeHome d-flex align-items-center justify-content-between position-fixed top-0 w-100'>
                <div>
                    <h4><b>Khoirurrozkn</b></h4>
                </div>
                <div style={isLight? {backgroundColor: 'rgb(131, 168, 190)'} : {backgroundColor: 'aqua'}} className='position-relative d-flex align-items-center shadow rounded-5'>
                    <div onClick={() => toggleTheme()} className={`position-absolute ${isLight? 'light' : null} `}>
                        <LightMode />
                    </div>
                </div>
            </div>

            <div className='wrapHome text-center'>
                <Lottie
                    options={optionsLottie}
                    style={styleLottie}
                />
                <h1>
                    <b>Selamat datang...</b>
                </h1>
                <p className='m-0'>Anda bisa memilih tema sebelum masuk ke portofolio saya.</p>
                <div className='wrapChoiceHome d-flex justify-content-evenly'>
                    <a
                        href='#animasi'
                        className='d-flex align-items-center justify-content-center overflow-hidden rounded-4 shadow'
                        style={{backgroundImage: `url(${animasiLogo})`}}
                    >
                        <h1>
                            Animasi
                        </h1>
                    </a>
                    <a
                        href='#interaktif'
                        className='d-flex align-items-center justify-content-center overflow-hidden rounded-4 shadow'
                        style={{backgroundImage: `url(${interaktifLogo})`}}
                    >
                        <h1>                          
                            Interaktif                                
                        </h1>
                    </a>
                    <a
                        href='#simpel'
                        className='d-flex align-items-center justify-content-center overflow-hidden rounded-4 shadow'
                        style={{backgroundImage: `url(${simpleLogo})`}}
                    >
                        <h1>
                            Simpel
                        </h1>
                    </a>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Home