import React from 'react'

export default function Navigation() {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                {/* <a className="navbar-brand" href="#">
                                    <img src="./images/arcure_logo_w.png" width="40" height="40"
                                        className="d-inline-block align-top" alt="">
                                    Hello, I am Asanté
                                </a> */}


                <ul className="nav nav-tabs">
                    <a className="nav-link active" href="#about-me">About Me</a>
                    <a className="nav-link" href="#projects">Projects</a>
                    <a className="nav-link" href="#contact-me">Contact Me</a>
                </ul>
            </nav>
        </div>
    )
}
