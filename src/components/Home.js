import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div id='home' className='container-fluid p-0 position-relative vh-100 border'>
        <div className='bg top-0 w-100 position-absolute'>
            <div></div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#4AC9E3" fill-opacity="1" d="M0,32L60,64C120,96,240,160,360,197.3C480,235,600,245,720,218.7C840,192,960,128,1080,122.7C1200,117,1320,171,1380,197.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
        </div>
        
    </div>
  )
}

export default Home