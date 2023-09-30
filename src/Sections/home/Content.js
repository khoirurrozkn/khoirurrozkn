import React from 'react'
import './Content.css'
import ContentAbout from './Content/ContentAbout'
import ContentPorto from './Content/ContentPorto'

const Content = () => {
    return (
        <div className='content'>
            <ContentAbout />
            <ContentPorto />
        </div>
    )
}

export default Content