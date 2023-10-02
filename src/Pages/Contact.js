import React, { lazy, Suspense } from "react";
const Loading = lazy(() => import("../Components/Loading"));
const Navbar = lazy(() => import("../Components/Navbar"));

const Footer = lazy(() => import("../Components/Footer"));

const Contact = () => {
    return(
        <div id="contact" style={{backgroundColor: '#999C9F'}} className="container-fluid overflow-hidden m-0 p-0">

            <Suspense fallback={<Loading />}>
                <Navbar page='contact' />
                <div className="vh-100"></div>
                <div className="vh-100"></div>
                <div className="vh-100"></div>
                <div className="vh-100"></div>
                <Footer page='contact'/>
            </Suspense>

        </div>
    )
}

export default Contact