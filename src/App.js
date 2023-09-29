import React from 'react';
import HomeOld from './Pages/HomeOld';
import Home from './Pages/Home';
import Photos from './Pages/Photos';
import Porto from './Pages/Porto';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import 'react-lazy-load-image-component/src/effects/blur.css';

function App(){
  return(
    <>
      <HashRouter>
        <Routes>
        <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/asd' element={<HomeOld />}></Route>
          <Route exact path='/photos' element={<Photos />}></Route>
          <Route exact path='/porto' element={<Porto />}></Route>
        </Routes>
      </HashRouter>
    </>  
  )
}

export default App;