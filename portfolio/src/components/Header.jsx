import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Header = () => {
    const Clickstyle =
    {
        borderBottom: "4px solid black",
        color: "black"
    }
    return (
        <nav className="navbar navbar-expand-lg font-1 w-5 shadow fs-5 bg-2 fixed-top">
            <div className="container-fluid">
                <a href="" className="navbar-brand mx-3 font-color-1"><img src="img/brand.png" width={"70px"} alt="" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 my-lg-2 me-auto container justify-content-center">
                        <li className="nav-item mx-4 hover-animation">
                            <Link className="nav-link" activeStyle={Clickstyle} spy={true} to="about" smooth={true} duration={100} offset={-200}>About me</Link>
                        </li>
                        <li className="nav-item mx-4 hover-animation">
                            <Link className="nav-link" activeStyle={Clickstyle} spy={true} to="skills" smooth={true} duration={100} offset={-140} >Skills</Link>
                        </li>

                        <li className="nav-item mx-4 hover-animation">
                            <Link className="nav-link" activeStyle={Clickstyle} spy={true} to="projects" smooth={true} duration={100} offset={-120} >Projects</Link>
                        </li>
                        {/* <li className="nav-item mx-4 hover-animation">
                            <Link className="nav-link" activeStyle={Clickstyle} spy={true} to="contact" smooth={true} duration={100} >Contact</Link>
                        </li> */}
                    </ul>
                    <div class="buttons">
                        <a href="Resume.pdf" download="Resume.pdf">
                            <button class="btn" type="button"><span></span><p data-text="download!" data-title="resume" ></p></button>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;