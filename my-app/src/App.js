import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Footer from './components/Footer';
import Header from './pages/Header';
import AboutMe from './pages/AboutMe';
import ContactForm from './pages/ContactForm';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: 'Hi, I am Asante Cureton',
      headerLinks:[
        {title: 'Home', path: '/'},
        {title: 'About Me', path: '/aboutme'},
        {title: 'Contact', path: '/contact'}
      ],
      home: {
        title: 'PRO React Portfolio',
        subTitle: 'REACT',
        text: 'Welcome to the Realm of React'
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Contact'
      }
    }
  }

  render(){
    return(
      <Router>
        <Container className='p-0' fluid={true}>
          <Navbar className='border-bottom' bg='transparent' expand='lg'>
            <Navbar.Brand>Asante Cureton</Navbar.Brand>

            <Navbar.Toggle className='border-0' aria-controls='nav-toggle'/>
            <Navbar.Collapse id='navbar-toggle'>
              <Nav className='ml-auto'>
                <Link className='nav-link' to='/'>Home</Link>
                <Link className='nav-link' to='/aboutme'>About Me</Link>
                <Link className='nav-link' to='/contact'>Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path='/' exact render={() =>
             <Header title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />}/>

          <Route path='/aboutme' render={() =>
             <AboutMe title={this.state.about.title} />}/>

          <Route path='/contact' render={() =>
             <ContactForm title={this.state.contact.title} />}/>

          <Footer />

        </Container>

      </Router>
    )
  }
}




export default App;