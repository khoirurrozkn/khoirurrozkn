import React from 'react'
import "./ContentBottom.css"

const ContentBottom = (props) => {
    return (
        <>
        <div className='wrap-wrapping position-relative'>
            <div className='wrap-3 position-absolute'></div>
            <div className='wrap-4 position-absolute'></div>
        </div>
        <div ref={props.promotion} className='promotion text-center'>

            <p className='promotion-title'>Let`s unlock</p>
            <p className='promotion-body'>Your Brand's Full Potential. Together, we'll take your brand to new heights.</p>
            <a href='#adaw' className='btn text-light'>
                Send email
                <i className='bi bi-arrow-right ms-1'></i>
            </a>
        </div>
        </>
    )
}

export default ContentBottom