import React, { useRef, useEffect } from 'react'
import './ContentPorto.css'
import kukiGames from './../../../img/kukiGames.png'
import weatherApp from './../../../img/weatherApp.webp'
import kukiAuth from './../../../img/kukiAuth.webp'
import kukiChat from './../../../img/kukiChat.webp'
import LazyLoadImage from './../../../Components/LazyLoadImage'
import handleGsap from '../../../Utils/handleGsap'

const ContentPorto = () => {

    const wrapSomePorto1 = useRef(null);
    const wrapSomePorto2 = useRef(null);

    useEffect(() => {
        if (window.innerWidth > 1025) {
            handleGsap(wrapSomePorto1, wrapSomePorto1, -290, 0, 'top 100%', 'top 0%', 'x');
            handleGsap(wrapSomePorto2, wrapSomePorto2, 0, -290, 'top 100%', 'top 0%', 'x');
        }
    
    },[]);

    const somePorto = [
        {
            'image': kukiGames,
            'backgroundColor': '#E7E7E7'
        },
        {
            'image': weatherApp,
            'backgroundColor': '#D1CFE2'
        },
        {
            'image': kukiAuth,
            'backgroundColor': '#D7D4CF'
        },
        {
            'image': kukiChat,
            'backgroundColor': '#D6D7DD'
        },
    ];

    return (
        <>

        <div className='porto position-relative text-light'>
            <div className='some-porto'>
                <div ref={wrapSomePorto1}>
                    {somePorto.map((v,i) => (
                        <div key={i} style={{backgroundColor: v.backgroundColor}}>
                            <LazyLoadImage placeholderSrc={v.image} src={v.image}/>
                        </div>
                    ))}
                </div>
            </div>
            <div className='some-porto'>
                <div ref={wrapSomePorto2}>
                    {somePorto.map((v,i) => (
                        <div key={i} style={{backgroundColor: v.backgroundColor}}>
                            <LazyLoadImage placeholderSrc={v.image} src={v.image}/>
                        </div>
                    ))}
                </div>
            </div>

            <div className='programming d-flex flex-wrap justify-content-center text-center'>
                <div className='w-100 d-flex justify-content-center'>
                    <p>
                        More of my portfolio, including 
                        descriptions and feature explanations? <br/>  
                        Click the " More Porto " button.
                    </p>
                </div>

                <a href='#adawdw' className='border border-2 rounded-circle d-flex align-items-center justify-content-center shadow text-light'>
                    More Porto ?
                </a>
            </div>
        </div>
        </>
    )
}

export default ContentPorto