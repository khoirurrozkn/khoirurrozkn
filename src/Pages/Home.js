import React, { lazy, Suspense } from "react";
const Loading = lazy(() => import("../Components/Loading"));
const Navbar = lazy(() => import("../Components/Navbar"));
const Header = lazy(() => import("../Sections/home/Header"));
const Content = lazy(() => import("../Sections/home/Content"));
const Footer = lazy(() => import("../Components/Footer"));

const Home = () => {
    document.body.classList.remove('overflow-hidden');
    return(
        <div id="home" 
            style={{backgroundColor: '#999C9F'}} 
            className="container-fluid overflow-hidden m-0 p-0"
            >

            <Suspense fallback={<Loading />}>
                <Navbar page='home' />
                <Header />
                <Content />
                <Footer page='home'/>
            </Suspense>

        </div>
    )
}

export default Home