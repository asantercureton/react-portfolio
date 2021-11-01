import React, { useState } from 'react';
import Header from '../Header';
import AboutMe from '../pages/AboutMe';
import Portfolio from '../pages/Portfolio';
import ContactMe from '../pages/ContactMe';
import Resume from '../pages/Resume';
import Footer from '../Footer';
import Welcome from '../pages/Welcome';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function Main() {
  return (
    <Router >

      <div>
        <Header  />
        {/* {renderContent()} */}
        <Route exact path="/welcome">
          <Welcome />
        </Route>
        <Route exact path="/aboutme">
          <AboutMe />
        </Route>
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>
        <Route exact path="/contactme">
          <ContactMe />
        </Route>
        <Route exact path="/resume">
          <Resume />
        </Route>
      </div>
      <Footer />
    </Router>
  );
}

export default Main;