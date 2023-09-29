import React from "react"
import "./Home.css"
import Navbar from "../Sections/home/Navbar"
import Header from "../Sections/home/Header"
import Content from "../Sections/home/Content"

const Home = () => {
    return(
        <div id="home" className="container-fluid overflow-hidden m-0 p-0">

            <Navbar />
            <Header />
            <Content />

        </div>
    )
}

export default Home