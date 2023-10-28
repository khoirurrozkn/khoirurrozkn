import React from 'react'
import "./Content.css"
import ContentTop from './content/ContentTop';
import ContentBottom from './content/ContentBottom';

const Content = (props) => {
    return (
        <div ref={props.content} style={{backgroundColor: "#171717"}} className='content position-relative overflow-hidden'>
            <ContentTop />
            {/* <ContentBottom promotion={props.promotion} /> */}
        </div>
    )
}

export default Content