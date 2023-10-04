import React from 'react';
import './Content.css';
import porto from './../../Constant'

const Content = () => {

    return (
        <>
        <div data-aos='fade-up' className='content position-relative d-flex flex-wrap justify-content-center'>
            <div className='wrap-title'>
            <p>
                Elevating digital products
                to the next level
            </p>
            </div>
            <div className='wrap-porto d-flex flex-wrap justify-content-center w-100'>
                {porto.map((v,i) => (
                    <div key={i} className={`box-porto ${(i+1) < 3 ? 'first' : ''}`}>
                        <div className='wrap-image d-flex align-items-center' style={{backgroundColor: v.backgroundColor}}>
                            <div style={{backgroundImage: `url('${v.backgroundImage}')`}} className='m-0 border w-100 bg-dark'></div>
                        </div>
                        <h1 className='border-bottom border-black border-opacity-25'>ewaw</h1>
                        <div className='wrap-desc mb-1'>
                            <span>ReactJs, Laravel</span>  
                            <button className='btn btn-feature btn-dark ms-2 rounded-4 shadow'>Features?</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
};

export default Content;
