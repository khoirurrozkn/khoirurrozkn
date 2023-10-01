import React, { lazy, Suspense } from 'react';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Spinner } from 'react-bootstrap';

const Home = lazy(() => import("./Pages/Home"));

function App(){
  return(
    <>
      <HashRouter>
        <Routes>
          <Route exact path='/' element={<Suspense fallback={<Loading />}><Home /></Suspense>}></Route>
        </Routes>
      </HashRouter>
    </>  
  )
}

const Loading = () => {
  return(
    <div style={{backgroundColor: '#ADADAD'}} className='vh-100 d-flex justify-content-center align-items-center'>
      <Spinner />
    </div>
  )
}

export default App;