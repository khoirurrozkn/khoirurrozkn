import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';

function App(){
  return(
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  )
}

export default App;