import React from 'react'
import './BoxPorto.css';

const BoxPorto = (props) => {
  return (
    <>
      <div id='accord' className='row p-0 border-top d-flex align-items-center justify-content-between flex-wrap border-black border-opacity-25'>
        <div className='desc col col-12 order-2 order-lg-1 order-md-1'>
          <h5 className='text-black text-opacity-75'>
            {props.title}
          </h5>
          <p className='message text-black m-0'>
            {props.desc}
          </p>
          <p className='tech text-black text-opacity-75 m-0 mt-2'>
            {props.tech}
            {props.development !== true &&
              <a href={props.href} target='blank' style={{ background: '#5E503F' }} className='ms-2 text-light btn px-3 py-1 shadow'>
                <span>Go</span> <i class="bi bi-box-arrow-up-right"></i>
              </a>
            }
          </p>
        </div>
        <div className='photo col col-12 order-1 order-lg-2 order-md-2 text-end border-danger'>
          <img loading='lazy' src={props.img} alt='Portofolio ss'></img>
        </div>
      </div>
    </>
  )
}

export default BoxPorto