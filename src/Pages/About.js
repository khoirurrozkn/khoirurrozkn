import React, { lazy, Suspense } from "react";
const Loading = lazy(() => import("../Components/Loading"));
const Navbar = lazy(() => import("../Components/Navbar"));

const About = () => {
    return(
        <div id="about" style={{backgroundColor: '#adadad'}} className="container-fluid overflow-hidden m-0 p-0">

            <Suspense fallback={<Loading />}>
                <Navbar page='about' />
                <div className="vh-100"></div>
                <div className="vh-100"></div>
                <div className="vh-100"></div>
                <div className="vh-100"></div>
            </Suspense>

        </div>
    )
}

export default About