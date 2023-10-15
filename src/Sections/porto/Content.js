import React, { useEffect, useState } from 'react';
import './Content.css';
import porto from './../../Constant'

const Content = () => {
    const [isGrid, setIsGrid] = useState(true);

    const notSelected = 'border border-dark';
    const selected = 'bg-dark text-light';
  
    const handleLayout = (bool) => {
        setIsGrid(bool);
        if (bool) {
            localStorage.removeItem('list');
        } else {
            localStorage.setItem('list', 'true');
        }
    };

    useEffect(() => {
        const storedLayout = localStorage.getItem('list');
        setIsGrid(storedLayout? false : true);
    }, []);

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
                <div className='layout w-100 d-flex justify-content-center'>
                    <div onClick={() => handleLayout(false)} className={`${isGrid? notSelected : selected } d-flex justify-content-center align-items-center rounded-circle`}>
                        <i className="bi bi-list-ol"></i>
                    </div>
                    <div onClick={() => handleLayout(true)} className={`${isGrid? selected : notSelected } d-flex justify-content-center align-items-center rounded-circle`}>
                        <i className="bi bi-grid"></i>
                    </div>
                </div>
                {!isGrid &&
                <>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" className='text-black text-opacity-50'>Title</th>
                                <th scope="col" className='text-black text-opacity-50'>Tech</th>
                                <th scope="col" className='text-black text-opacity-50'>Year</th>
                                <th scope="col" className='text-black text-opacity-50'>Features</th>
                            </tr>
                        </thead>
                        <tbody>
                            {porto.map((v,i) => (
                                <tr key={i}>
                                    <th scope="row"><h1>{v.title}</h1></th>
                                    <td>{v.desc}</td>
                                    <td>{v.year}</td>
                                    <td><a href='/#awd' className='text-light bg-dark rounded-circle d-flex justify-content-center align-items-center'>Check</a></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
                }
                {isGrid && porto.map((v,i) => (
                    <div key={i} className={`box-porto ${(i+1) < 3 ? 'first' : ''}`}>
                        <div className='wrap-image d-flex align-items-center' style={{backgroundColor: v.backgroundColor}}>
                            <div style={{backgroundImage: `url('${v.backgroundImage}')`}} className='m-0 border w-100 bg-dark'></div>
                        </div>
                        <h1 className='border-bottom border-black border-opacity-25'>
                            {v.title}
                        </h1>
                        <p>{v.desc}</p>  
                        <div className='w-100 text-center'>
                            <a href='#' className='btn btn-feature btn-dark rounded-4 shadow mb-2'>Features?</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
};

export default Content;
