import React, { lazy, Suspense } from "react";
const Loading = lazy(() => import("../Components/Loading"));
const Navbar = lazy(() => import("../Components/Navbar"));
const Header = lazy(() => import("../Sections/about/Header"));
const Content = lazy(() => import("../Sections/about/Content"));
const Footer = lazy(() => import("../Components/Footer"));

const About = () => {
    document.body.classList.remove('overflow-hidden');
    return(
        <div id="about"
            className="container-fluid overflow-hidden m-0 p-0"
            >

            <Suspense fallback={<Loading />}>
                <Navbar page='about' />
                <Header />
                <Content />
                <Footer page='about'/>
            </Suspense>

        </div>
    )
}

export default About