import React, { useEffect } from "react"
import "./Home.css"
import Navbar from "../Sections/home/Navbar"
import Header from "../Sections/home/Header"
import Content from "../Sections/home/Content"
import Aos from 'aos';

const Home = () => {

    useEffect(() => {
        Aos.init({
          duration: 1000,
        });
    },[])

    return(
        <div id="home" className="container-fluid overflow-hidden m-0 p-0">

            <Navbar />
            <Header />
            <Content />

        </div>
    )
}

export default Home