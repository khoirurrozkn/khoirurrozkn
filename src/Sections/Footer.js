import React from 'react'

const Footer = (props) => {
  return (
    <>
      <div className={`${props.bootstrap} border-top border-secondary border-opacity-50 py-3 d-flex align-items-center justify-content-center`}>
          <div>
              <p className='m-0 text-secondary text-opacity-75'>@2023 Khoirurrozkn</p>
          </div>
      </div>
    </>
  )
}

export default Footer