import React, { useRef, useEffect } from 'react'
import './ContentPorto.css'
import handleGsap from '../../../Utils/handleGsap'
import porto from '../../../Constant'

const ContentPorto = () => {

    const wrapSomePorto1 = useRef(null);
    const wrapSomePorto2 = useRef(null);

    useEffect(() => {
        if (window.innerWidth > 1025) {
            handleGsap(wrapSomePorto1, wrapSomePorto1, -290, 0, 'top 100%', 'top 0%', 'x');
            handleGsap(wrapSomePorto2, wrapSomePorto2, 0, -290, 'top 100%', 'top 0%', 'x');
        }
    
    },[]);

    return (
        <>

        <div className='porto position-relative text-light'>
            <div className='some-porto'>
                <div className='wrap-porto' ref={wrapSomePorto1}>
                    {porto.map((v, i) => (
                        (window.innerWidth > 767 || i < 2) && (
                            <div className='box-porto' key={i} style={{backgroundColor: v.backgroundColor}}>
                                <div style={{backgroundImage: `url('${v.backgroundImage}')`}}></div>
                            </div>
                        )
                    ))}
                </div>
            </div>
            <div className='some-porto'>
                <div className='wrap-porto' ref={wrapSomePorto2}>
                    {porto.map((v,i) => (
                        <div className='box-porto' key={i} style={{backgroundColor: v.backgroundColor}}>
                            <div style={{backgroundImage: `url('${v.backgroundImage}')`}}></div>
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

                <a href='https//khoirurrozkn.github.io/khoirurrozkn/#porto' className='border border-2 rounded-circle d-flex align-items-center justify-content-center shadow text-light'>
                    More Porto ?
                </a>
            </div>
        </div>
        </>
    )
}

export default ContentPorto