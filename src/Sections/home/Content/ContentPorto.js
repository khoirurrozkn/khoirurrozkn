import React, { useRef, useEffect } from 'react'
import './ContentPorto.css'
// import kukiGames from './../../../img/kukiGames.png'
// import weatherApp from './../../../img/weatherApp.webp'
// import kukiAuth from './../../../img/kukiAuth.webp'
// import kukiChat from './../../../img/kukiChat.webp'
// import LazyLoadImage from './../../../Components/LazyLoadImage'
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

    // const somePorto = [
    //     {
    //         'image': process.env.PUBLIC_URL + '/kukiGames.png',
    //         'backgroundColor': '#D7D4CF'
    //     },
    //     {
    //         'image': process.env.PUBLIC_URL + '/weatherApp.webp',
    //         'backgroundColor': '#D1CFE2'
    //     },
    //     {
    //         'image': process.env.PUBLIC_URL + '/kukiAuth.webp',
    //         'backgroundColor': '#E7E7E7'
    //     },
    //     {
    //         'image': process.env.PUBLIC_URL + '/kukiChat.webp',
    //         'backgroundColor': '#D6D7DD'
    //     },
    // ];

    const somePorto = [
        {
            'image': 'asd',
            'backgroundColor': '#D7D4CF'
        },
        {
            'image': 'asd',
            'backgroundColor': '#D1CFE2'
        },
        {
            'image': 'asd',
            'backgroundColor': '#E7E7E7'
        },
        {
            'image': 'asd',
            'backgroundColor': '#D6D7DD'
        },
    ];

    return (
        <>

        <div className='porto position-relative text-light'>
            <div className='some-porto'>
                <div ref={wrapSomePorto1}>
                    {somePorto.map((v, i) => (
                        (window.innerWidth > 1024 || i < 2) && (
                            <div key={i} style={{backgroundColor: v.backgroundColor}}>
                                {/* <img src={v.image} loading='lazy' width='400' style={{maxWidth: '100%', height: 'auto', width: '100%'}} height='280' title='Front-end' alt='FrontEnd'></img> */}
                                <div style={{backgroundImage: `url('${v.image}')`}}></div>
                            </div>
                        )
                    ))}
                </div>
            </div>
            <div className='some-porto'>
                <div ref={wrapSomePorto2}>
                    {somePorto.map((v,i) => (
                        <div key={i} style={{backgroundColor: v.backgroundColor}}>
                            {/* <img src={v.image} loading='lazy' width='400' style={{maxWidth: '100%', height: 'auto', width: '100%'}} height='280' title='Back-end' alt='BackEnd'></img> */}
                            <div style={{backgroundImage: `url('${v.image}')`}}></div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='programming d-flex flex-wrap justify-content-center text-center'>
                <div className='w-100 d-flex justify-content-center'>
                    <p>
                        More of my portfolio, including 
                        descriptions and feature explanations? {window.innerWidth > 1024 && <br />}
                        Click the "More Porto" button.
                    </p>
                </div>

                <a href='http://localhost:3000/khoirurrozkn/#porto' className='border border-2 rounded-circle d-flex align-items-center justify-content-center shadow text-light'>
                    More Porto ?
                </a>
            </div>
        </div>
        </>
    )
}

export default ContentPorto