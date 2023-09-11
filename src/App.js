import React from 'react';
import Home from './Pages/Home';
import Photos from './Pages/Photos';
import Portofolio from './Pages/Portofolio';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';

function App(){
  return(
    <>
      <HashRouter>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/photos' element={<Photos />}></Route>
          <Route exact path='/portofolio' element={<Portofolio />}></Route>
        </Routes>
      </HashRouter>
    </>  
  )
}

export default App;