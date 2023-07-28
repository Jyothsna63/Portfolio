import React, { useEffect, useState } from "react";

const Header = () => {
    const [current, setCurrent] = useState("About me")

    useEffect(() => {

    }, [current])
    const Clickstyle =
    {
        borderBottom: "2px solid black",
        color: "black"
    }
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
                            <a className="nav-link " style={current == "About me" ? Clickstyle : {}} aria-current="page" id="about" href="#" onClick={(e) => setCurrent(e.target.innerHTML)} >About me</a>
                        </li>
                        <li className="nav-item mx-4 hover-animation">
                            <a className="nav-link " style={current == "Skills" ? Clickstyle : {}} aria-current="page" id="skills" href="#" onClick={(e) => setCurrent(e.target.innerHTML)} >Skills</a>
                        </li>

                        <li className="nav-item mx-4 hover-animation">
                            <a className="nav-link " style={current == "Projects" ? Clickstyle : {}} aria-current="page" id="projects" href="#" onClick={(e) => setCurrent(e.target.innerHTML)} >Projects</a>
                        </li>
                        <li className="nav-item mx-4 hover-animation">
                            <a className="nav-link " style={current == "Certifications" ? Clickstyle : {}} aria-current="page" id="certifications" href="#" onClick={(e) => setCurrent(e.target.innerHTML)}  >Certifications</a>
                        </li>
                        <li className="nav-item mx-4 hover-animation">
                            <a className="nav-link " style={current == "Contact" ? Clickstyle : {}} aria-current="page" id="contact" href="#" onClick={(e) => setCurrent(e.target.innerHTML)} >Contact</a>
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