import React, { lazy, Suspense } from "react";
import Content from "../Sections/porto/Content";
const Loading = lazy(() => import("../Components/Loading"));
const Navbar = lazy(() => import("../Components/Navbar"));
const Footer = lazy(() => import("../Components/Footer"));

const Porto = () => {
    document.body.classList.remove('overflow-hidden');
    return(
        <div id="porto" className="container-fluid overflow-hidden m-0 p-0">

            <Suspense fallback={<Loading />}>
                <Navbar page='porto' />
                <Content />
                <Footer page='porto'/>
            </Suspense>

        </div>
    )
}

export default Porto