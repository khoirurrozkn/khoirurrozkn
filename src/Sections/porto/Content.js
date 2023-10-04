import React, {useState} from 'react';
import './Content.css';
import porto from './../../Constant'

const Content = () => {
    const [isGrid, setIsGrid] = useState(true);

    const notSelected = 'border border-dark'
    const selected = 'bg-dark text-light';

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
                <div className='layout border w-100 d-flex justify-content-center'>
                    <div onClick={() => setIsGrid(false)} className={`${isGrid? notSelected : selected } d-flex justify-content-center align-items-center rounded-circle`}>
                        <i class="bi bi-list-ol"></i>
                    </div>
                    <div onClick={() => setIsGrid(true)} className={`${isGrid? selected : notSelected } d-flex justify-content-center align-items-center rounded-circle`}>
                        <i class="bi bi-grid"></i>
                    </div>
                </div>
                {porto.map((v,i) => (
                    <div key={i} className={`box-porto ${(i+1) < 3 ? 'first' : ''}`}>
                        <div className='wrap-image d-flex align-items-center' style={{backgroundColor: v.backgroundColor}}>
                            <div style={{backgroundImage: `url('${v.backgroundImage}')`}} className='m-0 border w-100 bg-dark'></div>
                        </div>
                        <h1 className='border-bottom border-black border-opacity-25'>
                            {v.title}
                        </h1>
                        <p>{v.desc}</p>  
                        <div className='w-100 text-center'>
                            <a href='#' className='btn btn-feature btn-dark rounded-circle shadow mb-1'>Features ^</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
};

export default Content;
