import React, { Component } from 'react';
export default class ContactMe extends Component {
  render() {
    return (
      <section id="contactMe">
        <h2>Contact</h2>
        <article className="contactLinks">
          <div>
            <a href="mailto:asantercureton@gmail.com">Gmail</a>
          </div>
          <div>
            <a href="https://github.com/asantercureton">Github</a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/asante-cureton-aaa8974a">Linkedin</a>
          </div>
        </article>
      </section>
    );
  }
}