import React, { lazy, Suspense } from "react";
const Loading = lazy(() => import("../Components/Loading"));
const Navbar = lazy(() => import("../Components/Navbar"));

const Footer = lazy(() => import("../Components/Footer"));

const Porto = () => {
    return(
        <div id="porto" style={{backgroundColor: '#999C9F'}} className="container-fluid overflow-hidden m-0 p-0">

            <Suspense fallback={<Loading />}>
                <Navbar page='porto' />
                <div className="vh-100"></div>
                <div className="vh-100"></div>
                <div className="vh-100"></div>
                <div className="vh-100"></div>
                <Footer page='porto'/>
            </Suspense>

        </div>
    )
}

export default Porto