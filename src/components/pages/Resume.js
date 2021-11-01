import React, { Component } from 'react';
export default class Resume extends Component {
    render() {
        return (
            <section id="resume">
                <div>

                </div>

                <article>
                    <div className="proCard">
                <h2>Resume</h2>
                    <img className="imgCard" src={`${process.env.PUBLIC_URL}/assets/images/resume-page1.jpg`} alt="/" width="300" height="auto" />
                    <img className="imgCard" src={`${process.env.PUBLIC_URL}/assets/images/resume-page2.jpg`} alt="/" width="300" height="auto" />
                    <img className="imgCard" src={`${process.env.PUBLIC_URL}/assets/images/resume-page3.jpg`} alt="/" width="300" height="auto" />
                    <img className="imgCard" src={`${process.env.PUBLIC_URL}/assets/images/resume-page4.jpg`} alt="/" width="300" height="auto" />

                    </div>
                </article>
            </section>
        );
    }
}