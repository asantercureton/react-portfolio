import React, { Component } from 'react';
export default class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <header>
                    <a href="/">
                        <h1 className="headerTitle">Hello, I am Asanté</h1>
                    </a>
                    <nav>
                        <a href="/aboutme">About Me</a>
                        <a href="/portfolio">Work</a>
                        <a href="/contactme">Contact Me</a>
                        <a href="/resume">Resume</a>
                    </nav>
                </header>
            </React.Fragment>
        );
    }
}