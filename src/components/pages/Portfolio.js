import React, { Component } from 'react';
export default class Porfolio extends Component {
    render() {
        return (
            <section id="portfolio">
                <div className="experience">
                    <section id="work" className="work">
                        <h2>Professional Portfolio</h2>
                        <article className="article">
                            <div className="proCard">
                                <a href="https://little-village-10292021.herokuapp.com/">
                                    <img className="image" src={`${process.env.PUBLIC_URL}/assets/images/little-village.jpg`} alt="/" width="300" height="auto" />
                                </a>

                                <div className="cardTitle">LITTLE VILLAGE APP (MERN Stack)</div>

                                <a href="https://ghostly-stories-10-4-2021.herokuapp.com/">
                                    <img className="image" src={`${process.env.PUBLIC_URL}/assets/images/gs.png`} alt="/" width="300" height="auto" />
                                </a>
                                <div className="cardTitle">GHOSTLY STORIES APP (Express/Node.JS)</div>

                                <a href="https://github.com/asantercureton/employee-tracker">
                                    <img className="image" src={`${process.env.PUBLIC_URL}/assets/images/employee-tracker.jpg`} alt="/" width="300" height="auto" />
                                </a>
                                <div className="cardTitle">EMPLOYEE TRACKER (Node.JS)</div>
                                <a href="https://github.com/asantercureton/note-taker-app">
                                    <img className="image" src={`${process.env.PUBLIC_URL}/assets/images/note-taker.jpg`} alt="/" width="300" height="auto" />
                                </a>
                                <div className="cardTitle">NOTE TAKER (Express/Node.JS)</div>
                                <a href="https://github.com/asantercureton/e-commerce-backend">
                                    <img className="image" src={`${process.env.PUBLIC_URL}/assets/images/e-commerce-npm-run-watch.jpg`} alt="/" width="300" height="auto" />
                                </a>
                                <div className="cardTitle">E-COMMERCE BACKEND (Express.JS/Sequelize)</div>
                                <a href="https://github.com/asantercureton/weather-dashboard">
                                    <img className="image" src={`${process.env.PUBLIC_URL}/assets/images/weather-dashboard.jpg`} alt="/" width="300" height="auto" />
                                </a>
                                <div className="cardTitle">WEATHER DASHBOARD (One Call API/Bootstrap)</div>



                                <a href="https://github.com/asantercureton">
                                    <img className="image" src={`${process.env.PUBLIC_URL}/assets/images/matrix.jpg`} alt="/" width="300" height="auto" />
                                </a>

                                <div className="cardTitle">MORE PROJECTS!</div>

                            </div>

                            <div>

                            </div>

                            <div>

                            </div>
                        </article>
                    </section>
                </div>
            </section>
        );
    }
}