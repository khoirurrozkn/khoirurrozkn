import React from 'react';
import HomeOld from './Pages/HomeOld';
import Photos from './Pages/Photos';
import Porto from './Pages/Porto';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';

function App(){
  return(
    <>
      <HashRouter>
        <Routes>
          <Route exact path='/' element={<HomeOld />}></Route>
          <Route exact path='/photos' element={<Photos />}></Route>
          <Route exact path='/porto' element={<Porto />}></Route>
        </Routes>
      </HashRouter>
    </>  
  )
}

export default App;