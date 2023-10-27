// import React,{ lazy, Suspense } from 'react'
import React,{ useRef } from 'react';
import Navbar from '../Components/Navbar';
import Header from '../Sections/Nhome/Header';
import Content from '../Sections/Nhome/Content';
import NFooter from '../Components/NFooter';
import Cursor from '../Components/Cursor';
// const Loading = lazy(() => import("../Components/Loading"));
// const Navbar = lazy(() => import("../Components/Navbar"));
// const Header = lazy(() => import("../Sections/Nhome/Header"));
// const Content = lazy(() => import("../Sections/Nhome/Content"));

const NHome = () => {
  const content = useRef(null);
  const promotion = useRef(null);
  const footer = useRef(null);

  return (
    <div id='NHome'>
        {/* <DarkMode /> */}
        {/* <Suspense fallback={<Loading />}> */}
            <Cursor />
            <Navbar page='home' content={content} promotion={promotion} footer={footer}/>
            <Header />
            {/* <Content content={content} promotion={promotion} />
            <NFooter footer={footer}/> */}
        {/* </Suspense> */}

    </div>
  )
}

export default NHome