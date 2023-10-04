import React, { lazy, Suspense } from "react";
const Loading = lazy(() => import("../Components/Loading"));
const Navbar = lazy(() => import("../Components/Navbar"));
const Content = lazy(() => import("../Sections/contact/Content"));
const Footer = lazy(() => import("../Components/Footer"));

const Contact = () => {
    document.body.classList.remove('overflow-hidden');
    return(
        <div id="contact" className="container-fluid overflow-hidden m-0 p-0">

            <Suspense fallback={<Loading />}>
                <Navbar page='contact' />
                <Content />
                <Footer page='contact'/>
            </Suspense>

        </div>
    )
}

export default Contact