import React, { Component } from 'react';
export default class AboutMe extends Component {
    render() {
        return (
            <section id="about">
                <div className="row">
                    <div className="nine columns main-col">
                        <img id="aboutMe" src={`${process.env.PUBLIC_URL}/assets/images/IMG_20210627_170627_803.jpg`} alt="/" width="300" height="300" class="aboutMe" />
                        <section >
                            <article>
                                <h2 className="aboutH2">About Me</h2>
                                <p className="aboutP">I am an Engineering Grad of NC State University, where I also played D-1 Football for the Wolfpack. I have experience in web design <span>(REACT, CSS and Front-End Javascript)</span>, a great understanding of the <span>MERN Stack for Full-Stack Web Development</span>, along with skillsets acquired via working with Controls and PLCs. In my free time, I love painting and writing family books that provide positive energy and spiritual growth.</p>
                            </article>
                        </section>
                    </div>
                </div>
            </section>
        );
    }
}