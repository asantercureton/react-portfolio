import React, { Component } from 'react';
export default class Welcome extends Component {
    render() {
        return (
            <section id="welcome">
                <a href="/aboutMe">
                    <h2>Welcome to My REACT Portfolio!</h2>
                </a>
                <article>
                    <div className="welcomeCard">
                        <a href="/aboutMe"> <img src={`${process.env.PUBLIC_URL}/logo192.png`} alt="/" />
                        </a>
                    </div>
                </article>
            </section>
        );
    }
}