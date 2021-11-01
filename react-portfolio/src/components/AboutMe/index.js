import React, { Component } from 'react';
export default class AboutMe extends Component {
    render() {
        return (
            <section id="about">
                <div className="row">
                    <div className="nine columns main-col">
                        <img src={`${process.env.PUBLIC_URL}/assets/images/IMG_20210627_170627_803.jpg`} alt="/" width="350" height="350" class="aboutMe" />
                        <section id="aboutMe">
                            <article>
                                <h2>About Me</h2>
                                <p>I am an Engineering Grad of NC State University, where I also played D-1 Football for the Wolfpack. I have experience in web design (REACT, CSS and Front-End Javascript), along with skillsets acquired via working with Controls and PLCs. In my free time, I love painting and writing family books that provide positive energy and spiritual growth.</p>
                            </article>
                        </section>
                    </div>
                </div>
            </section>
        );
    }
}