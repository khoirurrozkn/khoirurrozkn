import React from 'react'
import "./NHome.css";
import DarkMode from './../Components/DarkMode';
import Navbar from '../Components/Navbar';

const NHome = () => {
  return (
    <div id='NHome' className='container-fluid m-0 p-0'>
        {/* <DarkMode /> */}
        <Navbar page='home'/>
        <div className='header position-relative d-flex justify-content-center'>

            {/* <img className='wrap-photo-header'>
            </img> */}

            <div className='wrap-title'>
                <h1 className='title-header'>An enthusiastic</h1>
                <h1 className='title-header'>website developer</h1>
                <h1 className='title-header'>from Indonesia.</h1>
            </div>

            <div className='blur-circle rounded-circle position-absolute'></div>

        </div>
    </div>
  )
}

export default NHome