import React, { useEffect, useState } from "react";

const Header = () => {
    // const [current, setCurrent] = useState("Home")
    // const menu = ["Home" , "About" , "Projects" , "Contact"]
    // const home = document.querySelector("#home")
    // const about = document.querySelector("#about")
    // const projects = document.querySelector("#projects")
    // const contact = document.querySelector("#contact")
    // const handleClick = (text) => {
    //     if (current in menu) {
    //         if(current == "Home"){
    //             home.
    //         }
    //     }
    // }
    // useEffect(() => {

    // }, [])
    return (
        <nav className="navbar navbar-expand-lg font-1 w-5 shadow fs-5 bg-2 fixed-top">
            <div className="container-fluid">
                <a href="" className="navbar-brand mx-3 font-color-1">Midhun Mareedu</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 my-lg-2 me-auto container justify-content-center">
                        <li className="nav-item mx-4 hover-animation">
                            <a className="nav-link  font-color-1" id="home" aria-current="page" href="#" value="home" >Home</a>
                        </li>
                        <li className="nav-item mx-4 hover-animation">
                            <a className="nav-link " aria-current="page" id="about" href="#" onClick={(e) => { e.target.classList.toggle("active") }}>About</a>
                        </li>
                        <li className="nav-item mx-4 hover-animation">
                            <a className="nav-link " aria-current="page" id="projects" href="#" onClick={(e) => { e.target.classList.toggle("active") }}>Projects</a>
                        </li>
                        <li className="nav-item mx-4 hover-animation">
                            <a className="nav-link " aria-current="page" id="contact" href="#" onClick={(e) => { e.target.classList.toggle("active") }}>Contact</a>
                        </li>
                    </ul>
                    <div class="buttons">
                        <button class="btn"><span></span><p data-text="download!" data-title="resume"></p></button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;