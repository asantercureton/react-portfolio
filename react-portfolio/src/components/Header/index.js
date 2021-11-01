import React, { Component } from 'react';
export default class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <header>
                    <h1>Hello, I am Asanté</h1>
                    <nav>
                        <a href="#aboutMe">About Me</a>
                        <a href="#portfolio">Work</a>
                        <a href="#contactMe">Contact Me</a>
                        <a href="https://docs.google.com/document/d/1NuiyiejxRlxbLRRtyFnyfrwBkARIzggE/edit">Resume</a>
                    </nav>
                </header>
            </React.Fragment>
        );
    }
}