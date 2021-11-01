import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <Main />
    );
  }
}

export default App;