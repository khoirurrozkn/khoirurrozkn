import React from "react"
import "./Home.css"
import Header from "../Sections/home/Header"
import Content from "../Sections/home/Content"
import Navbar from "../Sections/home/Navbar"

const Home = () => {
    return(
        <div id="home" className="container-fluid m-0 p-0">

            <Navbar />
            <Header />
            <Content />

        </div>
    )
}

export default Home