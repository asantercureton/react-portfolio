import React, { Component } from 'react';
export default class Porfolio extends Component {
    render() {
        return (
            <section id="portfolio">
                <div class="experience">
                    <section id="work" class="work">
                        <h2>Work</h2>
                        <article>
                            <div class="overlay3">
                                <div class="overlay">
                                    <a href="https://little-village-10292021.herokuapp.com/">
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/little-village.jpg`} alt="/" width="500" />
                                    </a>

                                </div>
                                <div class="overlay2">Little Village App</div>
                            </div>

                            <div class="overlay3">
                                <div class="overlay">
                                    <a href="https://ghostly-stories-10-4-2021.herokuapp.com/">
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/gs.png`} alt="/" width="500" />
                                    </a>

                                </div>
                                <div class="overlay2">Ghostly Stories App</div>
                            </div>

                            <div class="overlay3">
                                <div class="overlay">
                                    <a href="https://github.com/asantercureton">
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/gs.png`} alt="/" width="500" />
                                    </a>

                                </div>
                                <div class="overlay2">More Projects</div>
                            </div>
                        </article>
                    </section>
                </div>
            </section>
        );
    }
}