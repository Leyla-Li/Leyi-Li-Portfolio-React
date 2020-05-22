import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: 'Leyi Li',
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'About', path: '/about'},
        {title: 'Contacct', path: '/contact'},
      ],
      home: {
        title: 'Build an inclusive world',
        subTitle: 'Provide everyone an inclusive environment to live and learn',
        text: 'This is my personal goal and philosophy.'
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Let\'s Talk'
      }
    };
  }

  render() {
    return (
      <div>Hello there</div>
    );
  }
}

export default App;
