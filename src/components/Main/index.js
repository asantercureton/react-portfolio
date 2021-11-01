import React, { useState } from 'react';
import Header from '../Header';
import AboutMe from '../pages/AboutMe';
import Portfolio from '../pages/Portfolio';
import ContactMe from '../pages/ContactMe';

function Main() {
  const [currentPage, setCurrentPage] = useState('main');

  const renderContent = () => {
    switch (currentPage) {
        case 'portfolio': {
            return <Portfolio />
        }
        case 'contactMe': {
            return <section id="contactMe">
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
        }
        default: {
            return <section id="about">
            <div className="row">
                <div className="nine columns main-col">
                    <img id="aboutMe" src={`${process.env.PUBLIC_URL}/assets/images/IMG_20210627_170627_803.jpg`} alt="/" width="300" height="300" class="aboutMe" />
                    <section >
                        <article>
                            <h2 className="aboutH2">About Me</h2>
                            <p className="aboutP">I am an Engineering Grad of NC State University, where I also played D-1 Football for the Wolfpack. I have experience in web design (REACT, CSS and Front-End Javascript), a great understanding of the MERN Stack for Full-Stack Web Development, along with skillsets acquired via working with Controls and PLCs. In my free time, I love painting and writing family books that provide positive energy and spiritual growth.</p>
                        </article>
                    </section>
                </div>
            </div>
        </section>
        }
    }
  };

  const handleChange = (page) => {
    setCurrentPage(page);
  }

  return (
    <div>
      <Header currentPage={currentPage} handleChange={handleChange} />
      {renderContent()}
    </div>
  );
}

export default Main;