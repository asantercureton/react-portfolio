import React, { Component } from 'react';
export default class Porfolio extends Component {
    render() {
        return (
            <section id="portfolio">
                <div class="experience">
                    <section id="work" class="work">
                        <h2>Professional Portfolio</h2>
                        <article className="article">
                            <div>
                                <div>
                                    <a href="https://little-village-10292021.herokuapp.com/">
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/little-village.jpg`} alt="/" width="125%" height="125%" />
                                    </a>

                                    <div className="cardTitle">LITTLE VILLAGE APP (MERN)</div>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <a href="https://ghostly-stories-10-4-2021.herokuapp.com/">
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/gs.png`} alt="/" width="125%" height="125%" />
                                    </a>
                                    <div className="cardTitle">GHOSTLY STORIES APP (Express)</div>

                                </div>
                            </div>

                            <div>
                                <div>
                                    <a href="https://github.com/asantercureton">
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/gs.png`} alt="/" width="125%" height="125%" />
                                    </a>

                                    <div className="cardTitle">MORE PROJECTS!</div>
                                </div>
                            </div>
                        </article>
                    </section>
                </div>
            </section>
        );
    }
}