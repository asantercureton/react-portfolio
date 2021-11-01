import React, { Component } from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <AboutMe />
        <Portfolio />
        <ContactMe />
        <Footer />
      </div>
    );
  }
}

export default App;