import React, { lazy, Suspense, useEffect } from 'react';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Aos from 'aos';

const Loading = lazy(() => import("./Components/Loading"))
const Home = lazy(() => import("./Pages/NHome"));
// const Home = lazy(() => import("./Pages/Home"));
// const About = lazy(() => import("./Pages/About"));
// const Porto = lazy(() => import("./Pages/Porto"));
// const Selected = lazy(() => import("./Pages/Selected"));
// const Contact = lazy(() => import("./Pages/Contact"));

function App(){
  useEffect(() => {
      Aos.init({
        duration: 1000,
      });
  },[])

  return(
    <>
      <HashRouter>
        <Routes>
        <Route exact path='/' element={<Suspense fallback={<Loading />}><Home /></Suspense>}></Route>
          {/* <Route exact path='/' element={<Suspense fallback={<Loading />}><Home /></Suspense>}></Route>
          <Route exact path='/about' element={<Suspense fallback={<Loading />}><About /></Suspense>}></Route>
          <Route exact path='/porto' element={<Suspense fallback={<Loading />}><Porto /></Suspense>}></Route>
          <Route exact path='/selected' element={<Suspense fallback={<Loading />}><Selected /></Suspense>}></Route>
          <Route exact path='/contact' element={<Suspense fallback={<Loading />}><Contact /></Suspense>}></Route> */}
        </Routes>
      </HashRouter>
    </>  
  )
}

export default App;