import React,{ useState } from 'react'
import Footer from '../components/Footer'
import './Home.css';
import LightMode from '../components/LightMode';

const Home = () => {
    const [ isLight, setIsLight ] = useState(false);

    const toggleTheme = () => {
        if( isLight ){
            setIsLight(false);
        }else{
            setIsLight(true);
        }
    }
    return (
        <div className='container-fluid vh-100 d-flex align-items-center justify-content-center'>

            <div className='wrapThemeHome d-flex align-items-center justify-content-end position-absolute top-0 w-100'>
                <div style={isLight? {backgroundColor: 'rgb(131, 168, 190)'} : {backgroundColor: 'rgb(121, 72, 153)'}} className='position-relative d-flex align-items-center shadow border rounded-5'>
                    <div onClick={() => toggleTheme()} className={`position-absolute ${isLight? 'light' : null} `}>
                        <LightMode />
                    </div>
                </div>
            </div>

            <div className='wrapHome border'>
                <h1>
                    Selamat datang...
                </h1>
                <p className='m-0'>Anda bisa memilih tema sebelum masuk ke portofolio saya.</p>
                <img alt='Memilih tema'></img>
                <div className='wrapChoiceHome'>

                </div>
            </div>

            <Footer bootstrap='position-absolute bottom-0'/>

        </div>
    )
}

export default Home